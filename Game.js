class Game{
    contructor(){}
    getState(){
        var gameref= database.ref('gameSate');
        gameref.on("value", function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref('/').this.update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player= new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}