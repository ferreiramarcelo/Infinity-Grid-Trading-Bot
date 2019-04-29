# Binance-Bot
Another bot for Binance with the fewer code as possible, for an automatic buying and selling based on ATR and RSI signals with ADX filter.

### Installation

#### resolvconf
```bash
sudo apt install resolvconf
sudo dpkg-reconfigure resolvconf

| Prepare /etc/resolv.conf for dynamic updates?
| No

sudo mcedit /etc/resolv.conf
| nameserver 127.0.0.1

sudo apt-get install dnsmasq dnsutils

sudo mcedit /etc/dhcpcd.conf
| interface eth0
| static ip_address=192.168.0.1/24
| static routers=192.168.0.254
| static domain_name_servers=192.168.0.1 8.8.8.8

sudo /etc/init.d/networking restart

/etc/init.d/dnsmasq status

dig api.binance.com
dig @1.1.1.1 api.binance.com +short
````

#### midnight-commander
```bash
sudo mcedit /usr/share/mc/syntax/js.syntax
```
insert ````context exclusive //! \n white red```` just after ````# Comments````

Menu (F9) ›  Command ›  Edit Extension File › 
````# log
shell/i/.log
  View=/usr/bin/less -N -R %f
````

#### node-js
https://nodejs.org
```bash
VERSION=11.13.0
sudo apt-get -y install build-essential
wget https://nodejs.org/dist/v$VERSION/node-v$VERSION-linux-armv7l.tar.gz -O node.tar.gz
sudo tar -xvf node.tar.gz --strip 1 -C /usr/local
rm node.tar.gz
mkdir ~/bot
cd ~/bot
wget https://raw.githubusercontent.com/ManuCart/Binance-Bot/master/package.json
npm install
node bot.js
```
#### node-js
```
npm install eslint --save-dev
./node_modules/.bin/eslint --init
./node_modules/.bin/eslint ./bot/bot6.js
```
#### eslint
```
npm install eslint --save-dev
./node_modules/.bin/eslint --init
./node_modules/.bin/eslint bot6.js
```

#### backup key
````
#sudo fdisk -l
sudo mkfs.ext4 /dev/sda1
sudo mkdir /media/bot
sudo mount /dev/sda1 /media/bot
sudo chown -R $USER:$USER /media/bot

sudo blkid /dev/sda1
sudo mcedit /etc/fstab
PARTUUID=ABCDEFGH-01 /media/bot ext4 defaults 0 0 
````

#### bot.js
````
sudo mkdir /media/card
sudo mount /dev/sda1 /media/card
cp /media/card/bot.js ~/bot/bot.js
cp /media/card/bot.json ~/bot/bot.json
sudo umount /media/card
cd ~/bot && node bot.js
````

### License

MIT License

Copyright (c) May 1, 2018 Emmanuel CHARETTE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
