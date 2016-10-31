//this is a comment
/*this is a block comment 
anything in between
here is a comment
*/

//this is a string
var myName = "Jon";

//this is an integer
var myAge = 12;

//boolean type
var booleanExample = true;

//unassigned variable
undefined

//aka not a number
NaN

//array

//objects

//function is an execute statement
function(){

}

function nameOfFunction (){
	console.log('hello i am a new function')
}

//invoking a function
nameOfFunction();

//parameter 
function hello (a, b){
	console.log(a + b);
}

hello(10,11);

function creatGreen (name, age){
	if (age < 32){
		console.log('hello' + name);
	}else{
		console.log('hello Mr. ' + name);
		return 'hello Mr. '+ name;
		return 'hello MRS. ' + name; //this doesnt work
	}
}


