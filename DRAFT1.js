Game = {
  // Initialize and start our game
  

  
start: function() {
	var assetsObj = {
    "sprites": {
        "http://i.imgur.com/yYqGbpK.png": {
            tile: 16,
            tileh: 22,
            map: {
                walker_start: [0, 0],
                //walker_middle: [7, 0],
                walker_end: [2, 0]
            }
        }
    }
};


    // Start crafty and set a background color so that we can see it's working
    Crafty.init(600, 600);
	//change bg
   Crafty.background('url(http://www.psdgraphics.com/file/stars.jpg)');

   
	//bar
	Crafty.e('Floor, 2D, Canvas, Color')
	  .attr({x: 0, y: 500, w: 800, h: 10})
	  .color(255, 0 ,0);
	  
	Crafty.load(assetsObj, walker);
	

//function go() {
	var walker = Crafty.e('2D, Canvas, walker_start, SpriteAnimation, Gravity, Twoway')
		.reel("walking", 1000, [ //x, y
			[0, 0], [1, 0], [2, 0]//, [0, 1], [1, 1], [2, 1], [0, 2], [1, 2],
			//[2, 2], [0, 3], [1, 3], [2, 3]
			])
		.animate("walking", -1)
		.gravity('Floor')
		.twoway(7, 5);
//}
Crafty.viewport.follow(walker, 0, 300);




//sprite
/*	var len = Crafty.e('2D, Canvas,Fourway, Gravity, Image')
	  .attr({x: 0, y: 0, w: 50, h: 50})
	  //.color('#F00')
	 .fourway(4)			//move
	.gravity('Floor')
	.image("http://33.media.tumblr.com/7ffb83e85ab22032ffec4fa1dc40efaf/tumblr_inline_n5fmwpwGhK1sqx5ng.png");
	*/
	
	//camera viewpoint
	//Crafty.viewport.follow(len, 0, 300);
	
	

  }

}
