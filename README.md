# Binance-Bot
Another bot for Binance with the fewer code as possible, for an automatic buying and selling based on MACD, RSI and Stochastic indicators

### Installation

#### configuration
```bash
sudo mcedit /usr/share/mc/syntax/js.syntax
```
insert ````context exclusive //! \n white red```` just after ````# Comments````

#### redis-server
https://redis.io/
```bash
sudo apt-get -y update
sudo apt-get -y install redis-server
redis-cli flushall
sudo /etc/init.d/redis-server stop
sudo mcedit /etc/redis/redis.conf 

| databases 1
| #save 900 1
| #save 300 10
| #save 60 10000

sudo rm /var/lib/redis/dumb.db
sudo /etc/init.d/redis-server start
```
#### node-js
https://nodejs.org
```bash
sudo apt-get -y install build-essential
wget https://nodejs.org/dist/v10.10.0/node-v10.10.0-linux-armv7l.tar.gz
sudo tar -xvf node-v10.10.0-linux-armv7l.tar.gz --strip 1 -C /usr/local
rm node-v10.10.0-linux-armv7l.tar.gz
mkdir ~/bot
cd ~/bot
wget https://raw.githubusercontent.com/ManuCart/Binance-Bot/master/package.json
npm install
node bot.js
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
