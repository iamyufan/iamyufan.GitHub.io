rm -r ./site

mkdocs build

rm 404.html
rm index.html
rm sitemap.xml
rm sitemap.xml.gz
rm -r assets
rm -r Life
rm -r img
rm -r Home
rm -r Research
rm -r Innovate
rm -r Leadership
rm -r search
rm -r stylesheets
rm -r 张宇凡

cp -r ./site/* ./
