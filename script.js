
var btc = document.getElementById("bitcoin") ;
var eth = document.getElementById("ethereum") ;
var doge = document.getElementById("dogecoin") ;
var ada = document.getElementById("cardano") ;




var settings = {
    "async": true ,
    "scrossDomain": true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ccardano&vs_currencies=usd" ,
    "headers":{}

}
$.ajax(settings).done(function(response){
    console.log(response);
    btc.innerHTML = response.bitcoin.usd ;
    eth.innerHTML = response.ethereum.usd ;
    doge.innerHTML = response.dogecoin.usd ;
    ada.innerHTML = response.cardano.usd ;

});