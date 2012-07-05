jquery.coins
============

jquery.coins is a simple jQuery plugin for generating a bunch of
spinning coins to gamify any site.

[Demo](http://mmmurf.github.com/jquery.coins/)


    $(document).ready(function(){
      $("#target").coins({
        count: 5,
        expire_callback: function(points){
          alert('you got ' + points + ' points')
        },
        got_all_coins_callback: function(){
          alert('got em all')
        }
      })
    })
