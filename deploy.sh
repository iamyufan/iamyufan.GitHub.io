rm -r ./site

mkdocs build

rm 404.html
rm index.html
rm sitemap.xml
rm sitemap.xml.gz
rm -r assets
rm -r About
rm -r Life
rm -r img
rm -r Innovate
rm -r LeadershipService
rm -r Research
rm -r search
rm -r stylesheets
rm -r 张宇凡

cp -r ./site/* ./
