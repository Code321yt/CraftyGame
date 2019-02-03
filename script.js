Crafty.init(500,650, document.getElementById('game'));
let EnemyY = 0


Crafty.defineScene("HomeScreen", function(){
    Crafty.e("2D, DOM, Text")
        .attr({w: 100, h: 20, x: 200, y: 100})
        .text("Click start to begin");

    Crafty.e("Start, 2D, Canvas, Color, Solid, Text, Mouse")
        .attr({x: 228, y: 150, w: 100, h: 40})
        .text("Start")
        .bind("Click", function(MouseEvent){
             Crafty.enterScene("Game");
        });
})


Crafty.defineScene("Game", function(){

var Floor = Crafty.e('Floor, 2D, Canvas, Color')
                    .attr({x: 0, y: 620, w: 500, h: 10})
                    .color('green');

var player = Crafty.e('2D, Canvas, Color, Twoway, Gravity')
  .attr({x: 0, y: 600, w: 50, h: 50})
  .color('#F00')
  .twoway(200)
  .gravity('Floor');
  


var Enemy1 = Crafty.e('2D, Canvas, Color, Gravity')
  .attr({x: 0, y: EnemyY, w: 50, h: 50})
  .color('#F00')
  .gravity();



var Enemy2 = null
var Enemy3 = null
var Enemy4 = null



})



Crafty.enterScene("HomeScreen");
