$(document).ready(function(){
    $("#target").coins({
	count: 5,
	expire_callback: function(points){
	    alert('you got ' + points + ' points')
	},
	got_all_coins_callback: function(){
	    alert('got em all')
	}})
})
