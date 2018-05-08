const chalk = require('chalk');
var tulip = require('tulind');
const log = console.log;
const binance = require('node-binance-api');

binance.options({
  APIKEY: '',
  APISECRET: '',
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: true // If you want to use sandbox mode where orders are simulated
});

binance.candlesticks("BNBBTC", "5m", function(error, ticks) {
    let last_tick = ticks[ticks.length - 2];
    let [t, o, h, l, c, v, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
console.log("close ticks"+ticks.slice(ticks.length-4, ticks.length-2)[1]);

let high = ticks.map(function(value,index) { return value[2]; });
let low = ticks.map(function(value,index) { return value[3]; });
let close = ticks.map(function(value,index) { return value[4]; });

log("-------------------");
log(tulip.indicators.macd);
tulip.indicators.macd.indicator([close], [a,b,c], function(err, results) {
  log("Result of macd is:");
  log(results[2][results.length-1]);
});

log("-------------------");
log(tulip.indicators.stoch);
tulip.indicators.stoch.indicator([high, low, close], [a, b, c], function(err, results) {
  log("Result of stochastic oscillator is:");
  log(results[0][results.length-1]);
  log(results[1][results.length-1]);
});

log("-------------------");
log(tulip.indicators.rsi);

//console.log("BNBBTC last close: "+close);
console.log("BNBBTC last close: "+last_tick);
color=chalk.bold.blue
if (o<c) {color=chalk.bold.green}
if (o>c) {color=chalk.bold.red}
log(chalk.underline(t) + " " + chalk.green(h) + " " + chalk.red(l) + " " + color(c));
//},{limit: 1000});
});
