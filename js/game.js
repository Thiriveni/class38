class Game{
    constructor(){

    }

    getState(){
        var getstateRef=database.ref("gameState");
        getstateRef.on("value", function(data){
            gameState=data.val();
        })

    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            
            player=new Player();
            var playercountRef=await database.ref("playerCount");
          playercountRef.once("value");
          if(playercountRef.exists){
              playerCount=playercountRef.val();
              player.getCount();
          }
          form=new Form();
            form.display();
        }

        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);

        cars=[car1,car2,car3,car4];
       
    }

    play(){
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers!==undefined){
            background("yellow");
            var index=0;
            var x=200;
            var y;

            for(var plr in allPlayers){
              index=index+1;

              x=x+200;
              y=displayHeight-allPlayers[plr].distance;
              cars[index-1].x=x;
              cars[index-1].y=y;
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
             player.distance=player.distance+10;
             player.update();
        }
        drawSprites();
    }
}

