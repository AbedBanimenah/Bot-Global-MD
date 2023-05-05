# BOT-DARK-MAN

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Dark-Man747/BOT-DARK-MAN)

## ✧✧✧ CMD Deployment Method (Without downloading this code as .zip)
```
git clone https://github.com/Dark-Man747/BOT-DARK-MAN.git
cd BOT-DARK-MAN
npm i
npm start
```


## ✧✧✧ CMD  / VS code Deployment Method (After downloading this code as .zip)
```
npm i
npm start
```


## ✧✧✧ Termux Deployment Method
```js
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone github.com/Dark-Man747/BOT-DARK-MAN
cd BOT-DARK-MAN
npm i
npm start
```


## ✧✧✧ To keep BOT-STAR-EMPLRE alive without internet 24/7 (Termux, Vs Code etc. physical deploy only)
```
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
