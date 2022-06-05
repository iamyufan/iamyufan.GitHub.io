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
rm -r LeadershipService
rm -r zh
rm -r search
rm -r tags
rm -r stylesheets

cp -r ./site/* ./
