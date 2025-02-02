 let age = 45;
 if(age >=18){
     console.log("eligible to drive");
 }
 else{
     console.log("not eligible to drive");
 }
 let n = 5;
 if(n%2==0){
     console.log("the give number is even");
 }
 else{
     console.log("the give no is odd ");
 }
 
//  let num =8;
//  if(num%2==0 && num%3==0){
//      console.log(num, ' is divisible by 2 and 3.')
//  }
//  else{
//      console.log("the number is not divisible by 2 and 3.")
//  }
  let num =8;
  if(num%2==0 && num%3==0){
     console.log(num, ' is divisible by 2 and 3.')
 }
 else{
     console.log("the number is not divisible by 2 and 3.")
 }
let score=prompt("enter your score between 0 to 100");
let grade;
if(score>=90 && score<=100){
    grade = "A";
}
else if(score>=70 && score <90){
    grade = "B";
}
else if(score>=60 && score <70){
    grade = "C";
}
else if(score>=50 && score <60){
    grade = "D";
}
else if(score>=0 && score <50){
    grade = "F";
}
console.log("according to your score, your grade was:", grade);

