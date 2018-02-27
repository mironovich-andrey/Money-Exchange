module.exports = function makeExchange(currency) {
    
    var ogregood = {};
    
    

var H =  Math.floor(currency/50);
      if (H) {
	 currency -= H*50;
	 ogregood.H = H;	 
	} 

var Q =	 Math.floor(currency/25);
	if (Q) {
	 currency -= Q*25;
     ogregood.Q = Q; 
} 

var D =	 Math.floor(currency/10); 
 if (D) {
	 currency -= D*10;
	 ogregood.D = D; 
} 

var N =	 Math.floor(currency/5); 
 if (N) {
	 currency -= N*5;
     ogregood.N = N; 	 
} 
var P =	 Math.floor(currency/1);
 if (P) {
	 currency -= P*1;
	 ogregood.P = P;	 
}
if (currency <= 0) {
    return {};
} else if (currency >= 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
};


return ogregood; 
}