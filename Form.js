class Form{
    constructor(){

    }
    display(){
        var title=createElement("h3");
        title.html("CAR RACING GAME");
        title.position(150,10);

        var input= createInput("Name:");
        input.position(150,200);

        var button=createButton("START");
        button.position(250,220);

        var greeting=createElement('h3');

        button.mousePressed(function(){
            input.hide();
            var name= input.value();
            playerCount +=1;
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("Hello! " + name)
            greeting.position(150,100)

        })
    }
}