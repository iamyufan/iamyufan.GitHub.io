rm -r ./site
rm 404.html
rm index.html
rm sitemap.xml
rm sitemap.xml.gz
rm -r assets
rm -r Life
rm -r img
rm -r Home
rm -r Projects
rm -r Innovate
rm -r Experience
rm -r zh
rm -r search
rm -r tags
rm -r stylesheets
rm -r meet
rm CV.pdf
rm CV_zh.pdf

mkdocs build
cp -r ./site/* ./
