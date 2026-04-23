@echo off
cd /d "d:\dunlutan\kejuron web"
echo Menghubungkan ke repository GitHub...
git init
git remote remove origin >nul 2>&1
git remote add origin https://github.com/sdnkejuron/website.git
git add .
git commit -m "Upload semua proyek ke GitHub"
git branch -M main
echo Mengunggah ke GitHub...
git push -u origin main
echo Selesai!
pause
