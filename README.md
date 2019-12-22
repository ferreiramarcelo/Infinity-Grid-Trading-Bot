# Infinity-Grid-Trading-Bot
Infinity grid trading bot for Binance with the fewer code as possible, based on ATR and RSI signals with ADX filter

## Prerequisite
#### Download and Install Node.js
Go to [nodejs.org](https://nodejs.org/en/download/current/) to download and install latest current version
````
VERSION=13.0.1
sudo apt-get -y install build-essential
wget https://nodejs.org/dist/v$VERSION/node-v$VERSION-linux-armv7l.tar.gz -O node.tar.gz
sudo tar -xvf node.tar.gz --strip 1 -C /usr/local
rm node.tar.gz
````
#### InfluxDB
````
wget https://dl.influxdata.com/influxdb/releases/influxdb_1.7.9_armhf.deb
sudo dpkg -i influxdb_1.7.9_armhf.deb
rm influxdb_1.7.9_armhf.deb
sudo nvim /etc/influxdb/influxdb.conf
````
Uncomment next lines
````
[http]
  # Determines whether HTTP endpoint is enabled.
  enabled = true

  # The bind address used by the HTTP service.
  bind-address = ":8086"

  # Determines whether user authentication is enabled over HTTP/HTTPS.
  auth-enabled = false

[meta]
dir = "/media/key/influxdb"

[data]
dir = "/media/key/influxdb/data"
wal-dir = "/media/key/influxdb/wal"
````
Start influxdb database 
````
sudo service influxdb restart
````

Create Binance database
````
influx
CREATE DATABASE binance
#DROP DATABASE binance
````

#### Grafana
````
wget https://dl.grafana.com/oss/release/grafana_6.5.1_armhf.deb 
sudo dpkg -i grafana_6.5.1_armhf.deb
rm grafana_6.5.1_armhf.deb
sudo nvim /etc/grafana/grafana.ini
````
Uncomment next lines
````
[server]
# Protocol (http, https, socket)
protocol = http

# The ip address to bind to, empty will bind to all interfaces
;http_addr =

# The http port  to use
http_port = 3000
````
Start grafana server 
````
sudo service grafana-server restart
````
Login with your admin user (default admin/admin). Open side menu (click the Grafana icon in top menu) head to Data Sources and add Binance data source.


#### Telegram Notification
Creating a new bot with [BotFather](https://telegram.me/botfather)
* Use the __/newbot__ command to create a new bot. The BotFather will ask you for a name and username, then generate an authorization token for your new bot.
* The __name__ of your bot is displayed in contact details and elsewhere.
* The __Username__ is a short name, to be used in mentions and telegram.me links. Usernames are 5-32 characters long and are case insensitive, but may only include Latin characters, numbers, and underscores. Your bot's username must end in ‘bot’.
* Copy the __token__ to the configuration file ````config.json````
* Send a dummy message to your new bot
````
sudo apt-get install -y jq
TELEGRAM_TOKEN=
curl https://api.telegram.org/bot$TELEGRAM_TOKEN/getUpdates | jq .result[0].message.chat.id
````
* Go to following url ````https://api.telegram.org/bot````__token__````/getUpdates````
* Look for ````"chat":{"id":````
* Copy the __chatid__ to the configuration file ````config.json````

## Installation & Execution
#### Dependencies :
 * binance-api-node   : https://github.com/Ashlar/binance-api-node
 * bignumber.js       : https://github.com/MikeMcl/bignumber.js
 * ccxt               : https://github.com/ccxt/ccxt
 * coinmarketcap-api  : https://github.com/tiaanduplessis/coinmarketcap-api
 * dropbox            : https://github.com/dropbox/dropbox-sdk-js
 * fs                 :           
 * google-spreadsheet : https://github.com/theoephraim/node-google-spreadsheet
 * isomorphic-fetch   : https://github.com/matthew-andrews/isomorphic-fetch
 * js_yaml            : https://github.com/nodeca/js-yaml
 * moment             : https://github.com/moment/moment
 * nanoid             : https://github.com/ai/nanoid
 * node-schedule      : https://github.com/node-schedule/node-schedule
 * telegraf           : https://github.com/telegraf/telegraf
 * tulind             : https://github.com/TulipCharts/tulipnode
 * util               :
#### Downloading and installing dependencies packages locally
````
mkdir ~/igtb && cd ~/igtb
wget https://raw.githubusercontent.com/ManuCart/Infinity-Grid-Trading-Bot/master/package.json
npm install
````
## Developement Tools (Optional)
### Create User
```bash
sudo adduser bot
sudo adduser bot sudo
sudo adduser bot adm
sudo visudo
  pi   ALL=(ALL) ALL
  bot  ALL=(ALL) NOPASSWD: ALL
sudo reboot
sudo apt-get update
sudo deluser pi sudo
sudo deluser pi adm
sudo deluser -remove-home pi
```
###  Install Domain Name System (DNS) resolver
```bash
sudo apt-get install resolvconf
sudo dpkg-reconfigure resolvconf
```
Prepare /etc/resolv.conf for dynamic updates? ````No````

````
sudo mcedit /etc/resolv.conf
````
| nameserver 127.0.0.1

````
sudo apt-get install dnsmasq dnsutils
````
````
sudo mcedit /etc/dhcpcd.conf
| interface eth0
|   static ip_address=192.168.0.1/24
|   static routers=192.168.0.254
|   static domain_name_servers=127.0.0.1 8.8.8.8
````
````
sudo /etc/init.d/networking restart
/etc/init.d/dnsmasq status
dig api.binance.com
dig @1.1.1.1 api.binance.com +short
````

Menu (F9) ›  Command ›  Edit Extension File › 
````# log
shell/i/.log
  View=/usr/bin/less -N -R %f
````

### Eslint
```
npm install eslint --save-dev
./node_modules/.bin/eslint --init
./node_modules/.bin/eslint ./igtb/igtb.js
```

### bot.js
````
sudo mkdir /media/card
sudo mount /dev/sda1 /media/card
cp /media/card/bot.js ~/bot/bot.js
cp /media/card/bot.json ~/bot/bot.json
sudo umount /media/card
cd ~/bot && node bot.js
````
### Uninstall
```
sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}
```

### Code Editor
#### Neovim
https://github.com/neovim/neovim
```bash
sudo apt-get install -y git libtool libtool-bin autoconf automake cmake g++ pkg-config unzip libffi-dev gettext
git clone https://github.com/neovim/neovim.git
cd neovim
make CMAKE_BUILD_TYPE=RelWithDebInfo
sudo make install
```
#### Plugins
nvim ~/.tern-config
```bash
{
  "plugins":
  {
    "node": {}
  }
}
```
```bash
mkdir ~/.config/nvim
nvim ~/.config/nvim/init.vim
```

```bash
set number

if empty(glob('~/.config/nvim/autoload/plug.vim'))
  silent !curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall
endif

call plug#begin()
    Plug 'ternjs/tern_for_vim', { 'do': 'npm install && npm install -g tern' }
    Plug 'drewtempelmeyer/palenight.vim'
    Plug 'majutsushi/tagbar'
    Plug 'https://github.com/powerman/vim-plugin-AnsiEsc'
call plug#end()

set background=dark
colorscheme palenight

set mouse=a
autocmd VimEnter * nested :call tagbar#autoopen(1)

map <F2> :w<CR>
map <F10> :q<CR>
```
#### Universal Ctags
https://github.com/universal-ctags/ctags
```bash
git clone https://github.com/universal-ctags/ctags.git
cd ctags
./autogen.sh 
./configure
make
sudo make install
ctags -R
```
```
neovim
:PlugInstall
```

Useful commands
````
:TagbarOpen
:set mouse=a
:PlugInstall
:CheckHealth
:set wrap
:set nowrap
:AnsiEsc
````



#### mc
https://github.com/MidnightCommander/mc
```bash
clear
sudo apt-gen install autogen autoconf libtool gettext libslang2-dev
wget https://github.com/MidnightCommander/mc/archive/4.8.20.tar.gz
tar xvfz 4.8.20.tar.gz
cd mc-4.8.20
autoconf
./configure
make
make install

nvim .config/mc/mc.ext
shell/i/.log
        Open=/usr/bin/less -N -R %f
shell/i/.js
        Open=/usr/local/bin/nvim %f
shell/i/.json
        Open=/usr/local/bin/nvim %f
shell/i/.yml
        Open=/usr/local/bin/nvim %f
```

## Appendix
### Format USB Key to store database
````
lsblk
sudo fdisk /dev/sda
d,n,p,1,ENTER,ENTER,t,83,w
sudo mkfs.ext4 /dev/sda1
sudo mkdir /media/key
sudo mount /dev/sda1 /media/key
sudo chown -R $USER:$USER /media/bot
mkdir /media/key/influxdb
sudo chown -R influxdb:influxdb /media/key/influxdb
sudo blkid /dev/sda1
sudo mcedit /etc/fstab
PARTUUID=ABCDEFGH-01 /media/bot ext4 defaults 0 0 
````

### License

MIT License

Copyright (c) ````May 1, 2018```` ````Emmanuel CHARETTE````

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
