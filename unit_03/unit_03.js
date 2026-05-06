// Task 1

function f1(){
   let val = +document.querySelector(".i-1").value;
   let result = (val == 4);
   document.querySelector('.out-1').textContent = result;
}

document.querySelector('.b-1').onclick = f1;


// Task 2


function f2(){
  let a = 10;
  let b = 40;
  let result = (a > b)? a : b;
  document.querySelector('.out-2').textContent = result;
}

document.querySelector('.b-2').onclick = f2;


// Task 3

function f3(){
  let a = +document.querySelector('.i-31').value;
  let b = +document.querySelector('.i-32').value;
  let result = (a > b)? a : b;
  document.querySelector('.out-3').textContent = result;
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 


function f4() {
  let birthYear = +document.querySelector('.i-4').value;
  let currentYear= new Date().getFullYear();
  let result = (currentYear - birthYear >= 18)? 1 : 0;
  document.querySelector('.out-4').textContent = result;
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 

function f5(){
   
}


document.querySelector('.b-5').onclick = f5;


// Task 6.

function f6(){
   

}

document.querySelector('.b-6').onclick = f6;

// Task 7.

function f7(){
   
}

document.querySelector('.b-7').onclick = f7;

// Task 8.


function f8() {
  
}

document.querySelector('.b-8').onclick = f8;

// Task 9

function f9(){
   

}

document.querySelector('.b-9').onclick = f9;

// Task 10

function f10(){
   

}

document.querySelector('.b-10').onclick = f10;

// Task 11

function f11(){
   

}

document.querySelector('.s-110').onchange = f11;


 
 
 

// Task 12

//let i120 = document.querySelector('.i-120');
//let out_12 = document.querySelector('.out-12');

//function f12(){
//   let v = i120.value;
//   out_12.innerHTML = (typeof v);

//}

//document.querySelector('.b-12').onclick = f12;

// Task 13


function f13() {
   
}

document.querySelector('.b-13').onclick = f13;



// Task 14


function f14() {
   
}

document.querySelector('.b-14').onclick = f14;

// Task     15


function f15() {
  let a = document.querySelector('.s-151').value;
  let b = document.querySelector('.s-152').value;
  let oper = document.querySelector('.s-153').value;
}

document.querySelector('.b-15').onclick = f15;


