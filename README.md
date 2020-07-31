# Notes:

in the StoryHub folder,
`yarn`

<!-- `yarn dev:personal-minimal` -->

In case building starts throwing mysterious src errors, try just reinstalling all packages, removing the public directory, and gatsby cleaning

```
rm yarn.lock
rm yarn-error.log
rm -rf node_modules
rm package-lock.json
yarn install

rm -r public
rm -r packages/personal-blog-lite/public
mkdir packages/personal-blog-lite/public

git clean -xdf
yarn install

gatsby clean
yarn build
gatsby serve
yarn deploy



yarn add -W gatsby-plugin-matomo
```

## [Documentation](/DOCUMENTATION.md)

NOTE:

1. puppeteer causes problem some time to fix it you may need to apply:

- try to on/off your network connection
- restart your device
  if not solve then try to run

```
PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors
or
sudo npm install puppeteer --unsafe-perm=true --allow-root
```
