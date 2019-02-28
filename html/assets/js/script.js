// Pedro Henrique Borges Lopes (C0740134) and Flavio Noe dos Santos (C0740832)
function ChallengeOne(initial, until, count) {
    let result =0;
    let list = [];
    let i;
    for(i = initial; i >= until; i-=count){
        list.push(i);
        result+= i;
    }
    console.log(list);
    return result;

}

const result = ChallengeOne(1109, 119, 11);

console.log("Challenge One:", result);