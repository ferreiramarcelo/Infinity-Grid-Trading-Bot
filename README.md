# Binance-Bot
Another bot for Binance with the fewer code as possible, for an automatic buying and selling based on ATR and RSI signals with ADX filter.

### Installation

#### Create User
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
|   static ip_address=192.168.0.1/24
|   static routers=192.168.0.254
|   static domain_name_servers=127.0.0.1 8.8.8.8

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

### Dependencies :
 * binance-api-node  : https://github.com/Ashlar/binance-api-node
 * coinmarketcap-api : https://github.com/tiaanduplessis/coinmarketcap-api
 * dropbox           : https://github.com/dropbox/dropbox-sdk-js
 * fs                :           
 * isomorphic-fetch  : https://github.com/matthew-andrews/isomorphic-fetch
 * js_yaml           : https://github.com/nodeca/js-yaml
 * moment            : https://github.com/moment/moment
 * nanoid            : https://github.com/ai/nanoid
 * node-schedule     : https://github.com/node-schedule/node-schedule
 * telegraf          : https://github.com/telegraf/telegraf
 * tulind            : https://github.com/TulipCharts/tulipnode
 * util              :

### Installation :

```bash
VERSION=10.16.0
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

#### eslint
```
npm install eslint --save-dev
./node_modules/.bin/eslint --init
./node_modules/.bin/eslint ./bot/bot6.js
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
#### Uninstall
```
sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}
```


## Tools

### tmux
https://github.com/tmux/tmux
```bash
clear
tmux -V
tmux kill-server
sudo apt-get install -y libevent-dev libncurses5-dev
wget https://github.com/tmux/tmux/releases/download/2.8/tmux-2.8.tar.gz
tar xvfz tmux-2.8.tar.gz
cd tmux-2.8
./configure && make
sudo cp ./tmux /usr/bin/tmux
tmux -V
cd ..
rm tmux-2.8.tar.gz
rm -rf tmux-2.8
```

### nvim
https://github.com/neovim/neovim
```bash
sudo apt-get install -y git libtool libtool-bin autoconf automake cmake g++ pkg-config unzip libffi-dev gettext
git clone https://github.com/neovim/neovim.git
cd neovim
make CMAKE_BUILD_TYPE=RelWithDebInfo
sudo make install
```
#### plugins
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

#### ctags
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

### mc
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

### ttyd
https://github.com/tsl0922/ttyd
```bash
sudo apt-get install cmake g++ pkg-config git vim-common libwebsockets-dev libjson-c-dev libssl-dev
git clone https://github.com/tsl0922/ttyd.git
cd ttyd && mkdir build && cd build
cmake ..
make && make install

ttyd -p 8080 bash -x
```

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
