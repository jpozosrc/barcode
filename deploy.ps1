param($commitMsg)

git add .
npm run build
git commit -am "$commitMsg"
git push origin master