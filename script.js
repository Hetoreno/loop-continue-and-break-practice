/*
for (var i = 0; i <= 5; i++){
    console.log(i);
}
*/

//Loop option 1(for)
var john = ['John', 'Smith', 1990, 'designer',false];
for (var i=0; i< john.length; i++){
    console.log(john[i]);
}

////////////////
console.log('');
////////////////


//Loop option 2(while)
var mark = ['Mark', 'Jacob', 1991, 'firefighter',true];
var i =0;
while(i< mark.length){
    console.log(mark[i]);
    i++
}

////////////////
console.log('');
////////////////

// continue and breeak statements
var kelly = ['Kelly', 'Gomez', 1994, 'chef',false];
for (var i=0; i< kelly.length; i++){
    if(typeof kelly[i] !== 'string') continue;
    console.log(kelly[i]);
}

for (var i=0; i< kelly.length; i++){
    if(typeof kelly[i] !== 'string') break;
    console.log(kelly[i]);
}

////////////////
console.log('');
////////////////

//reverse for loop challenge
var kelly = ['Kelly', 'Gomez', 1994, 'chef',false];
for (var i =kelly.length-1; i >= 0; i--){
    console.log(kelly[i]);
}