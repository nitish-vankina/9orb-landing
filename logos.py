import math

# Terminal canvas dimensions
W, H = 140, 50
canvas = [[(19, 19, 21, ' ') for _ in range(W)] for _ in range(H)]

def set_pixel(x, y, r, g, b, char=' '):
    ix, iy = int(round(x)), int(round(y))
    if 0 <= ix < W and 0 <= iy < H:
        canvas[iy][ix] = (r, g, b, char)

def draw_rect(x0, y0, w, h, fr, fg, fb):
    for y in range(y0, y0 + h):
        for x in range(x0, x0 + w):
            set_pixel(x, y, fr, fg, fb)

def draw_circle(cx, cy, radius, r, g, b, fill=False):
    for y in range(int(cy - radius - 1), int(cy + radius + 2)):
        for x in range(int(cx - 2*radius - 2), int(cx + 2*radius + 2)):
            # Adjust for terminal character aspect ratio (approx 2x taller than wide)
            dx = (x - cx) * 0.5
            dy = (y - cy)
            dist = math.sqrt(dx*dx + dy*dy)
            if fill and dist <= radius:
                set_pixel(x, y, r, g, b, '•')
            elif not fill and abs(dist - radius) < 0.8:
                set_pixel(x, y, r, g, b, 'o')

# Colors
TILE_BG = (19, 19, 21)
TILE_BORDER = (35, 35, 38)
WHITE = (250, 250, 250)
DIM = (90, 90, 96)

# Geometry for 6 tiles (2 rows, 3 columns)
col_w, row_h = 42, 22
col_x = [4, 48, 92]
row_y = [2, 26]

tiles = []
for r in range(2):
    for c in range(3):
        tiles.append((col_x[c], row_y[r]))

# Draw Tile Backgrounds & Borders
for (tx, ty) in tiles:
    draw_rect(tx, ty, col_w, row_h, TILE_BG[0], TILE_BG[1], TILE_BG[2])
    # Draw border outline
    for x in range(tx, tx + col_w):
        set_pixel(x, ty, TILE_BORDER[0], TILE_BORDER[1], TILE_BORDER[2])
        set_pixel(x, ty + row_h - 1, TILE_BORDER[0], TILE_BORDER[1], TILE_BORDER[2])
    for y in range(ty, ty + row_h):
        set_pixel(tx, y, TILE_BORDER[0], TILE_BORDER[1], TILE_BORDER[2])
        set_pixel(tx + col_w - 1, y, TILE_BORDER[0], TILE_BORDER[1], TILE_BORDER[2])

def icon_center(tx, ty):
    return tx + col_w / 2, ty + 9

# ---- Icon 1: Orbit node ----
cx, cy = icon_center(*tiles[0])
draw_circle(cx, cy, 6, DIM[0], DIM[1], DIM[2])
draw_circle(cx, cy, 1.5, WHITE[0], WHITE[1], WHITE[2], fill=True)
ang = math.radians(-40)
draw_circle(cx + 6*math.cos(ang)*2, cy + 6*math.sin(ang), 1.5, WHITE[0], WHITE[1], WHITE[2], fill=True)

# ---- Icon 2: Nine grid ----
cx, cy = icon_center(*tiles[1])
for oy in [-3, 0, 3]:
    for ox in [-6, 0, 6]:
        set_pixel(cx + ox, cy + oy, WHITE[0], WHITE[1], WHITE[2], '•')

# ---- Icon 3: Bracket mark ----
cx, cy = icon_center(*tiles[2])
for dy in range(-4, 5):
    set_pixel(cx - 8, cy + dy, WHITE[0], WHITE[1], WHITE[2], '#')
    set_pixel(cx + 8, cy + dy, WHITE[0], WHITE[1], WHITE[2], '#')
draw_circle(cx, cy, 2, WHITE[0], WHITE[1], WHITE[2], fill=True)

# ---- Icon 4: Shield point ----
cx, cy = icon_center(*tiles[3])
for dx in range(-6, 7):
    set_pixel(cx + dx, cy - 5, WHITE[0], WHITE[1], WHITE[2], '-')
    set_pixel(cx + dx, cy + 5, WHITE[0], WHITE[1], WHITE[2], '-')
draw_circle(cx, cy, 2, WHITE[0], WHITE[1], WHITE[2], fill=True)

# ---- Icon 5: Nine orbit ----
cx, cy = icon_center(*tiles[4])
draw_circle(cx, cy, 6, DIM[0], DIM[1], DIM[2])
for k in range(9):
    theta = math.radians(-90 + 40*k)
    px, py = cx + 6*math.cos(theta)*2, cy + 6*math.sin(theta)
    set_pixel(px, py, WHITE[0], WHITE[1], WHITE[2], '•')

# ---- Icon 6: Open loop ----
cx, cy = icon_center(*tiles[5])
for k in range(30):
    theta = math.radians(k * 10)
    if not (20 <= k * 10 <= 70): # Create gap
        px, py = cx + 6*math.cos(theta)*2, cy + 6*math.sin(theta)
        set_pixel(px, py, WHITE[0], WHITE[1], WHITE[2], 'o')

# Render canvas to terminal with TrueColor ANSI codes
print("\n" + "="*W)
print("             9ORB LOGO CONCEPTS - TERMINAL PREVIEW")
print("="*W)

for row in canvas:
    line_str = ""
    for (r, g, b, char) in row:
        # ANSI 24-bit color escape sequence
        line_str += f"\033[38;2;{r};{g};{b}m{char}\033[0m"
    print(line_str)

print("="*W + "\n")