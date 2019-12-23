var vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?");

var groupSize = prompt("How many are in your group?");

var destination = '';

var tsuggetion = '';

if(vacationType == 'musical'){
    destination = 'New Orleans';
}else if(vacationType == 'tropical'){
    destination = 'a Beach Vacation in Mexico';
}else{
    destination = 'go Whitewater Rafting in the Grand Canyon';
}

if(groupSize < 3){
    tsuggetion = 'First Class';
}else if(groupSize > 2 && groupSize < 6){
    tsuggetion = 'Helicopter';
}else{
    tsuggetion = 'Charter Flight';
}

var result = 'Since you’re a group of ' + groupSize + ' going on a ' + vacationType + ' vacation, you should take a ' + tsuggetion + ' to ' + destination;

alert(result);
console.log(result);