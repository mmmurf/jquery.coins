/*
   version: "0.0.1"
*/
(function( $ ){

    $.fn.coins = function( options ) {

	var coin_callback = function(){}
	var expire_callback = function(){}
	var got_all_coins_callback = function(){}

	var settings = $.extend( {
	    'count' : 50,
	    'image' : 'mario.gif',
	    'width' : 500,
	    'height' : 500,
	    'expires': 15000,
	    'points': 1,
	    'coin_callback': coin_callback,
	    'expire_callback': expire_callback,
	    'got_all_coins_callback': got_all_coins_callback
	}, options);

	return this.each(function() {
	    var score = 0;
	    var coins_left = settings.count

	    var generate_coin = function(){
		var top = Math.floor(Math.random()*settings.height)
		var left = Math.floor(Math.random()*settings.width)
		var coin = $('<img class="jq_coins" src="mario.gif" style="height: 50px">')

		var c = coin.clone().css({position: 'absolute', top: top +'px', left: left +'px'})

		c.mouseover(function(){
		    score += settings.points;
		    var aud = $('<audio autoplay="autoplay"><source src="mario.ogg" type="audio/ogg" /></audio>').clone().remove()

		    coins_left -= 1;
		    $(this).hide().remove()
		    settings.coin_callback()
		    if(coins_left === 0){
			settings.got_all_coins_callback(score)
		    }
		})
		return c;
	    }

	    for(x=0;x<settings.count;x++){
		$(this).append(generate_coin())
	    }

	    setTimeout(function(){
		$(".jq_coins").hide().remove()
		settings.expire_callback(score)
	    }, settings.expires)
	});
    };
})( jQuery );
g
