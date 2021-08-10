class Player{
    constructor(){

    }
    getCount(){
        var playerRef = database.ref('playerCount');
        playerRef.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(name){
        var playerindex= "Player"+playerCount;
        database.ref (playerindex).set({
            name:name
        })
    }
}