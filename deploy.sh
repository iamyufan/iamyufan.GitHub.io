rm -r ./site
mkdocs build
rm -rf ../iambrucez.Github.io/*
cp -r ./* ../iambrucez.Github.io/
cp -r ./site/* ./