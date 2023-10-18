import joker from "give-me-a-joke";

export function dadjoke(){
    return new Promise((function(resolve,reject){
        joker.getRandomDadJoke(resolve);
    }))
}