var myAnswer1  = document.querySelector ('#answer1');
var myAnswer2  = document.querySelector ('#answer2');
var myAnswer3  = document.querySelector ('#answer3');
var myAnswer4  = document.querySelector ('#answer4');
var myAnswer5  = document.querySelector ('#answer5');
var myAnswer6  = document.querySelector ('#answer6');
var myAnswer7  = document.querySelector ('#answer7');
var myAnswer8  = document.querySelector ('#answer8');
var myAnswer9  = document.querySelector ('#answer9');
var myAnswer10  = document.querySelector ('#answer10');

var myOut1 = document.querySelector ('#out1')
var myOut2 = document.querySelector ('#out2')
var myOut3 = document.querySelector ('#out3')
var myOut4 = document.querySelector ('#out4')
var myOut5 = document.querySelector ('#out5')
var myOut6 = document.querySelector ('#out6')
var myOut7 = document.querySelector ('#out7')
var myOut8 = document.querySelector ('#out9')
var myOut9 = document.querySelector ('#out9')
var myOut10 = document.querySelector ('#out10')

var My1 = document.querySelector ('#m1')

var myButton = document.querySelector ('#mySubmit')

function myftype(myout, myans)
{
	
	myout.textContent = myans;
}
mySubmit.onclick = function()
{
	myOut2.textContent= myAnswer2.value
	myftype(myOut1, myAnswer1.value)
	myftype(myOut3, myAnswer3.value)
	myftype(myOut4, myAnswer4.value)
	myftype(myOut5, myAnswer5.value)
	myftype(myOut6, myAnswer6.value)
	myftype(myOut7, myAnswer7.value)
	myftype(myOut8, myAnswer8.value)
	myftype(myOut9, myAnswer9.value)
	myftype(myOut10, myAnswer10.value)
}




