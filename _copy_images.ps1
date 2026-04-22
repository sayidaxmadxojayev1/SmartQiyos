$src = 'C:\Users\user\.gemini\antigravity\brain\4bc0266e-4d00-4841-8acc-30f792eb9b77'
$dst = 'C:\Users\user\Documents\narxlarni solishtrish programmasi\images'
New-Item -ItemType Directory -Force -Path $dst | Out-Null

$files = @(
    'kitoblar_render_1774713100967.png',
    'telefonlar_render_1774713115199.png',
    'kompyuter_render_1774713131449.png',
    'maishiy_render_1774713145179.png',
    'tv_render_1774713160860.png',
    'oyinchoqlar_render_1774713178924.png',
    'bolalar_render_1774713193804.png',
    'iqlim_render_1774713206590.png',
    'gozallik_render_1774713223742.png',
    'sport_render_1774713236981.png',
    'avto_render_1774713256152.png',
    'uy_ofis_render_1774713272190.png',
    'idish_render_1774713289034.png',
    'mebel_render_1774713302299.png',
    'kiyim_render_1774713320477.png'
)

foreach ($f in $files) {
    $from = Join-Path $src $f
    $to   = Join-Path $dst $f
    if (Test-Path $from) {
        Copy-Item $from $to -Force
        Write-Host "OK: $f"
    } else {
        Write-Host "MISSING: $f"
    }
}
Write-Host "Done! $($files.Count) files processed."
