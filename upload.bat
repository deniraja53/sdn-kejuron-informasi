@echo off
setlocal
cd /d "d:\dunlutan\kejuron web"

echo ==========================================
echo    SDN KEJURON - MANUAL DEPLOYMENT
echo ==========================================

echo [1/4] Membangun website (Build)...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Gagal membangun website. Pastikan Node.js sudah terinstal.
    pause
    exit /b %ERRORLEVEL%
)

echo [2/4] Menyiapkan folder hasil build...
cd dist
echo > .nojekyll

echo [3/4] Mengunggah hasil build ke GitHub...
git init
git config user.name "sdnkejuron"
git config user.email "sdnkejuron13@gmail.com"
git add -A
git commit -m "Manual Deploy %date% %time%"
git push -f https://github.com/sdnkejuron/website.git HEAD:gh-pages

echo [4/4] Selesai!
echo.
echo PENTING:
echo 1. Pergi ke GitHub Settings > Pages.
echo 2. Ubah Source ke "Deploy from a branch".
echo 3. Pilih branch "gh-pages" dan folder "/(root)".
echo 4. Klik SAVE.
echo.
echo URL: https://sdnkejuron.github.io/website/
echo.
pause
