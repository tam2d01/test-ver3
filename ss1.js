
// take input from the user
//var a = parseInt(prompt("Enter a lower number( a < b ):"));
//var b = parseInt(prompt("Enter higher number( b> a ) :"));
var a =  parseInt(document.getElementById('btn-number-a').value);
//console.log(a);
var b =  parseInt(document.getElementById('btn-number-b').value);
//console.log(b);
var flag ;

console.log(`The prime numbers between ${a} and ${b} are:`);
//iterate from a to b
function prime(){
    if(a > 0 && b > 0 && a < b && b > a){
            for(var i = a; i <= b; i++){ 
                flag = 0;
// looping through 2 to user input number 
            for(var j = 2 ; j < i; j++){

                if( i % j == 0){
                    flag = 1;
                    break;
                }
            }
// if number greater than 1 and not divisible by other numbers
            if (i > 1 && flag == 0){
                    console.log(i);
            }        
//sum of primes
                var sum= 0; k = 0;
                for (j = 0; j < i.length; j++ )
                    {
                        sum[k] = j;
                        sum +=  j;
                        k++;     
                    } 
                    document.getElementById("btn-show-results").innerHTML=`sum ${ele.value}`       
            }
    }
    else{
        alert('Enter a , b is a positive integer such that a < b ')
    }
}





    









4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
