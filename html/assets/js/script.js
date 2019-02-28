// Pedro Henrique Borges Lopes (C0740134) and Flavio Noe dos Santos (C0740832)
//Challenge One

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

//Challenge Two

function ChallengeTwo() {

    var initial = prompt("Please enter the start Number");
    var final = prompt("Please enter the final Number");
    var step = prompt("Please enter the step down Number");

    console.log("Challenge TWO:", ChallengeOne(parseInt(initial), parseInt(final), parseInt(step)));
}


//Challenge Three

var messages = ["Test1", "Test2", "Test3","Test4","Test5"];

function ChallengeThree() {
    var rand = Math.floor(Math.random() * 5) + 1;
    alert(messages[rand]);
}