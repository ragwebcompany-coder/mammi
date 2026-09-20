#!/usr/bin/env python3
"""
BNL — Κέντρο Αισθητικής & Αδυνατισμού · media pipeline
======================================================
Διαβάζει τα πρωτότυπα του πελάτη από το SRC και γράφει τα έτοιμα για το web
αρχεία στο assets/. Τρέχει ΠΡΙΝ τη γεννήτρια σελίδων:

    python3 _build/make_assets.py

Είναι idempotent — ξανατρέχει όποτε θέλεις.
"""
import subprocess, shutil, sys
from pathlib import Path
from PIL import Image, ImageEnhance, ImageDraw, ImageFont
import numpy as np

SRC  = Path("/Users/apostolospollalis/Downloads")
ROOT = Path(__file__).resolve().parent.parent
OUT  = ROOT / "assets"
VID  = OUT / "video"
ORIG = ROOT / "_build" / "src-media"      # αντίγραφο των πρωτοτύπων, για μελλοντικά builds
for d in (OUT, VID, ORIG):
    d.mkdir(parents=True, exist_ok=True)

# ---------------------------------------------------------------- πηγές
# Τα πρωτότυπα όπως τα έστειλε η πελάτισσα (18/9/2026).
PHOTOS = {
    "1000037622": "space-entrance",   # είσοδος: ξύλινες περσίδες, πράσινη πόρτα
    "1000037621": "space-lounge",     # αναμονή: σμαραγδένιος καναπές, stand APOPSIS
    "1000037623": "massage",          # μασάζ / ρεφλεξολογία
}
POSTERS = {
    "1000037616": "riziki-apotrichosi",
    "1000037617": "metallo-mineral",
    "1000037618": "exosomes",
    "1000037619": "multisomes",
    "1000037620": "simadia-dermatos",
    "1000037624": "ratin",
    "1000037626": "longevity",
}
# Το 1000037625 ήρθε με μαύρες μπάρες πάνω/κάτω (ανιχνεύθηκε με ffmpeg cropdetect).
VIDEO_CROP = {"1000037625": "crop=1080:1364:0:278"}

VIDEOS = {
    "1000037629": ("katharismos-prosopou", "Καθαρισμός προσώπου με Dermagenetic"),
    "1000037628": ("katharismos-detail",   "Καθαρισμός προσώπου, λεπτομέρεια"),
    "1000037627": ("laser-apotrichosi",    "Αποτρίχωση με laser diode"),
    "1000037625": ("mesotherapeia",        "Εξατομικευμένη θεραπεία με αμπούλες"),
}

# Προ-κοπή: το 1000037621 έχει πάνω δεξιά το badge «1/2» του Instagram.
PRE_CROP = {"1000037621": (0, 158, 1079, 1352)}

def src(stem, ext):
    """Ψάχνει πρώτα στα Downloads, μετά στο αντίγραφο μέσα στο repo.

    Οι φωτογραφίες είναι μέσα στο git, οπότε το logo και τα poster
    ξαναχτίζονται οπουδήποτε. Τα ακατέργαστα βίντεο (74 MB) δεν είναι —
    αν λείπουν, τρέξε τη γεννήτρια με --skip-video ή φέρε τα πρωτότυπα.
    """
    for p in (SRC / f"{stem}{ext}", ORIG / f"{stem}{ext}"):
        if p.exists():
            return p
    sys.exit(
        f"Λείπει το πρωτότυπο {stem}{ext}.\n"
        f"Ψάχτηκε σε: {SRC} και {ORIG}"
    )

def keep(p: Path):
    """Κρατάει αντίγραφο του πρωτοτύπου μέσα στο repo."""
    dst = ORIG / p.name
    if not dst.exists():
        shutil.copy2(p, dst)

# ---------------------------------------------------------------- λογότυπο
# Το λογότυπο υπάρχει μόνο μέσα στα poster: λευκό πάνω σε επίπεδο λαδί (#8b8b4d).
# Το ξεκολλάμε λύνοντας p = a·λευκό + (1-a)·λαδί ως προς a — δίνει καθαρό alpha,
# χωρίς σκαλοπάτια στις λεπτές γραμμές του φύλλου και της παλάμης.
LOGO_SRC  = "1000037619"
LOGO_BOX  = (16, 8, 360, 208)      # x0, y0, x1, y1 — μέσα στο λαδί πλαίσιο
LOGO_BG   = np.array([139., 139., 77.])

def logo_alpha():
    im = Image.open(src(LOGO_SRC, ".jpg")).convert("RGB").crop(LOGO_BOX)
    a  = np.asarray(im).astype(np.float32)
    al = ((a - LOGO_BG) / (255.0 - LOGO_BG)).mean(axis=2)
    al = np.clip((np.clip(al, 0, 1) - 0.12) / 0.78, 0, 1)   # καθαρίζει το jpeg grain
    # Το λαδί πλαίσιο του poster έχει στρογγυλεμένες γωνίες: η κάτω δεξιά μπαίνει
    # μέσα στο κάδρο ως κρεμ σφήνα. Τη σβήνουμε ρητά.
    h, w = al.shape
    yy, xx = np.mgrid[0:h, 0:w]
    al[(xx + yy) > (w + h - 42)] = 0.0
    return al

def write_logo(alpha, rgb, name, width):
    h, w = alpha.shape
    rgba = np.zeros((h, w, 4), np.uint8)
    rgba[..., 0], rgba[..., 1], rgba[..., 2] = rgb
    rgba[..., 3] = (alpha * 255).astype(np.uint8)
    im = Image.fromarray(rgba, "RGBA")
    im = im.resize((width, round(width * h / w)), Image.LANCZOS)
    im.save(OUT / name, optimize=True)
    return im

def build_logos():
    al = logo_alpha()
    write_logo(al, (255, 255, 255), "logo.png", 760)          # για σκούρο φόντο
    write_logo(al, (74, 78, 42),    "logo-olive.png", 760)    # για ανοιχτό φόντο
    # Το σήμα μόνο (φύλλο + B·N·L + παλάμη), χωρίς το όνομα — για favicon & μικρά σημεία
    mark = al[0:138, :]
    write_logo(mark, (255, 255, 255), "logo-mark.png", 620)

    # favicon: λαδί τετράγωνο με το σήμα στο κέντρο
    mark_im = Image.open(OUT / "logo-mark.png").convert("RGBA")
    for size, fname in ((512, "favicon-512.png"), (180, "apple-touch-icon.png"), (32, "favicon-32.png")):
        canvas = Image.new("RGBA", (size, size), (78, 82, 46, 255))
        mw = int(size * 0.76)
        m = mark_im.resize((mw, round(mw * mark_im.height / mark_im.width)), Image.LANCZOS)
        canvas.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
        canvas.convert("RGB").save(OUT / fname, optimize=True)
    shutil.copy2(OUT / "favicon-32.png", OUT / "favicon.png")

# ---------------------------------------------------------------- φωτογραφίες
def grade(im, warmth=1.02, contrast=1.06, sat=1.04, bright=1.02):
    """Διακριτική διόρθωση: οι φωτογραφίες του χώρου είναι ήδη καλές."""
    im = ImageEnhance.Color(im).enhance(sat)
    im = ImageEnhance.Contrast(im).enhance(contrast)
    im = ImageEnhance.Brightness(im).enhance(bright)
    r, g, b = im.split()
    r = r.point(lambda v: min(255, int(v * warmth)))
    b = b.point(lambda v: min(255, int(v / warmth)))
    return Image.merge("RGB", (r, g, b))

def save_jpg(im, path, q=82):
    im.convert("RGB").save(path, "JPEG", quality=q, optimize=True, progressive=True)

def resized(im, width):
    if im.width <= width:
        return im.copy()
    return im.resize((width, round(width * im.height / im.width)), Image.LANCZOS)

def crop_ratio(im, ratio, anchor=0.5):
    """Κόβει στο ζητούμενο λόγο πλάτος/ύψος, κρατώντας το `anchor` του άξονα."""
    want = im.width / ratio
    if want <= im.height:
        top = int((im.height - want) * anchor)
        return im.crop((0, top, im.width, top + int(want)))
    want_w = int(im.height * ratio)
    left = int((im.width - want_w) * anchor)
    return im.crop((left, 0, left + want_w, im.height))

def load_photo(stem):
    p = src(stem, ".jpg"); keep(p)
    im = Image.open(p).convert("RGB")
    if stem in PRE_CROP:
        im = im.crop(PRE_CROP[stem])
    return grade(im)

def build_photos():
    for stem, name in PHOTOS.items():
        im = load_photo(stem)
        save_jpg(resized(im, 1600), OUT / f"{name}.jpg")
        save_jpg(resized(im, 900),  OUT / f"{name}-900.jpg")
    # hero: ο καναπές σε κάθετο 4:5, κομμένος ψηλά ώστε να μένει ο καναπές & το stand
    lounge = load_photo("1000037621")
    save_jpg(resized(crop_ratio(lounge, 4 / 5, anchor=0.62), 1100), OUT / "hero-portrait.jpg", 84)
    # πλατιά ζώνη για τα CTA bands
    ent = load_photo("1000037622")
    save_jpg(resized(crop_ratio(ent, 21 / 9, anchor=0.42), 1900), OUT / "band-entrance.jpg", 80)

def build_posters():
    for stem, name in POSTERS.items():
        p = src(stem, ".jpg"); keep(p)
        im = Image.open(p).convert("RGB")
        save_jpg(resized(im, 1100), OUT / f"poster-{name}.jpg", 84)
        save_jpg(resized(im, 560),  OUT / f"poster-{name}-thumb.jpg", 78)

# ---------------------------------------------------------------- βίντεο
def build_videos():
    for stem, (name, _label) in VIDEOS.items():
        p = src(stem, ".mp4"); keep(p)
        pre = VIDEO_CROP.get(stem)
        vf = (pre + "," if pre else "")
        mp4 = VID / f"{name}.mp4"
        subprocess.run([
            "ffmpeg", "-v", "error", "-y", "-i", str(p),
            "-vf", vf + "scale=-2:1280,fps=25",
            "-c:v", "libx264", "-profile:v", "high", "-crf", "30", "-preset", "slow",
            "-pix_fmt", "yuv420p", "-movflags", "+faststart",
            "-c:a", "aac", "-b:a", "64k", "-ac", "1",
            str(mp4)
        ], check=True)
        # σιωπηλό, κομμένο loop για το autoplay preview (τα πρώτα 8 δευτερόλεπτα)
        loop = VID / f"{name}-loop.mp4"
        subprocess.run([
            "ffmpeg", "-v", "error", "-y", "-t", "8", "-i", str(p),
            "-vf", vf + "scale=-2:854,fps=24",
            "-c:v", "libx264", "-crf", "32", "-preset", "slow",
            "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an",
            str(loop)
        ], check=True)
        # poster frame
        subprocess.run([
            "ffmpeg", "-v", "error", "-y", "-ss", "1.5", "-i", str(p),
            "-vf", vf + "scale=-2:1280", "-frames:v", "1", "-q:v", "4",
            str(VID / f"{name}.jpg")
        ], check=True)

# ---------------------------------------------------------------- OG image
def build_og():
    logo = Image.open(OUT / "logo.png").convert("RGBA")
    card = Image.new("RGB", (1200, 630), (78, 82, 46))
    d = ImageDraw.Draw(card)
    for i in range(630):                       # ήπια κάθετη διαβάθμιση
        k = i / 630
        d.line([(0, i), (1200, i)], fill=(int(78 - 16 * k), int(82 - 16 * k), int(46 - 8 * k)))
    lw = 620
    l = logo.resize((lw, round(lw * logo.height / logo.width)), Image.LANCZOS)
    card.paste(l, ((1200 - lw) // 2, (630 - l.height) // 2 - 24), l)
    # Το προεπιλεγμένο bitmap font της PIL δεν έχει ελληνικά — φορτώνουμε σύστημα.
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 26)
    except OSError:
        font = ImageFont.load_default()
    d.text((600, 630 - 92), "Κ Ε Ν Τ Ρ Ο   Α Ι Σ Θ Η Τ Ι Κ Η Σ   ·   Ζ Η Π Α Ρ Ι ,   Κ Ω Σ",
           fill=(206, 210, 176), anchor="mm", font=font)
    card.save(OUT / "og.jpg", "JPEG", quality=88, optimize=True, progressive=True)

if __name__ == "__main__":
    skip_video = "--skip-video" in sys.argv
    build_logos();  print("· λογότυπα")
    build_photos(); print("· φωτογραφίες")
    build_posters();print("· poster")
    build_og();     print("· og image")
    if skip_video:
        print("· βίντεο — παραλείφθηκαν (--skip-video)")
    else:
        build_videos(); print("· βίντεο")
    total = sum(f.stat().st_size for f in OUT.rglob("*") if f.is_file())
    print(f"\nassets/: {len(list(OUT.rglob('*.*')))} αρχεία, {total/1e6:.1f} MB")
