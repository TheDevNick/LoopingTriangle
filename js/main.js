// let theNumber = Number(prompt('Pick A Number'));
// console.log(`your number is the square root of ${theNumber * theNumber}`);

let result = 1;
for (i = 0; i < 10; i++) {
    result = result * 2;
}

console.log(result);

/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

for (i = '#'; i.length < 8; i += '#') {
    console.log(i);
}

/*


*/
