@echo off
cd /d "d:\dunlutan\kejuron web"
echo Menghubungkan ke repository GitHub...
git init
git remote remove origin >nul 2>&1
git remote add origin https://github.com/sdnkejuron/website.git

echo Menyiapkan semua file...
git add .
git commit -m "Initial Deployment and Configuration"

echo Mengunggah ke GitHub secara paksa...
git push -u origin main --force

echo Selesai! Sekarang cek tab Actions di GitHub Anda.
pause
