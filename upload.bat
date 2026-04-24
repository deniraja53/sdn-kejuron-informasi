@echo off
setlocal
cd /d "d:\dunlutan\kejuron web"

echo ==========================================
echo    SDN KEJURON - GITHUB DEPLOYMENT
echo ==========================================

echo [1/3] Menyiapkan Git...
git init
git remote remove origin >nul 2>&1
git remote add origin https://github.com/sdnkejuron/website.git

echo [2/3] Mengunggah file ke GitHub...
git add .
git commit -m "Deploy: Update configuration and assets"
git push -u origin main --force

echo [3/3] Selesai! 
echo.
echo PENTING: 
echo 1. Pastikan di GitHub Settings > Pages, "Source" diatur ke "GitHub Actions".
echo 2. Cek tab "Actions" di GitHub untuk melihat proses build.
echo 3. Tunggu 1-2 menit setelah Actions selesai (hijau).
echo.
echo URL Anda: https://sdnkejuron.github.io/website/
echo.
pause
