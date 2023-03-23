                                            // HOW  FUNCTION WORKS IN JS
// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//      console.log(x);
// }
// function b(){
//     var x=100;
//      console.log(x);
// }

//-------------------------------------------------------------------------------------------------------------------------
                                              //Lecture -3->
                                              // SHORTEST JS PROGRAMM


// var a=10;
//  function  b(){

//     var x=10;
//     console.log(x);// function local space
//  }
//  console.log(a);// global space 
//  //console.log(x);// error it is not global space

//-----------------------------------------------------------------------------------------------------------------
                                                        //lecture 4->

                                                        //UNDEFINED IN JS

    //console.log(a);
//    var a=10;// undefined
//    // console.log(x);//not defined
//    if(a===undefined){
//     console.log("a is undefined");
//    }
//    else{
//     console.log("a is  not undefined");
//    }


//------------------------------------------------------------------------------------------------------
                                          //LECTURE 5->
                                          //SCOPE CHAIN
// function a(){
//     var b=10;
//     console.log(d);//error
//      c();
//     function c(){
//         var d=20;
//          console.log(b);  
//     }
// }
// //var b=10;
// a();
//console.log(b);//error
//console.log(d);//error
// lexical enviornment is local memory along with lexical enviornment of its pairing
// here c() lexicaly inside in a() 

//-------------------------------------------------------------------------------------------------------------


                                    //LECTURE 6->
                                    // WHAT IS TEMPORAL DEAD ZONE?
                                    //LET AND CONST DECALARTION IN HOISTING
                                    // SYNTAX ERROR VS REFEREENCE ERROR VS TYPE ERROR?


//console.log(a);//ReferenceError: Cannot access 'a' before initialization

//console.log(b);//undefined

// let a=10;
// console.log(a);
//  //let a="let not allowed to declare again"; // SyntaxError: Identifier 'a' has already been declared
// var b=100;
// console.log(b);
// var b="hi yash srivastava how are you";
// //console.log(a);//10
// console.log(b);



       // console.log(pi);//ReferenceError: Cannot access 'pi' before initialization

  // const pi=3.1234; // you have to declare const like this otherwise it will show you syntax error


//    const pi;  //SyntaxError: Missing initializer in const declaration
//    pi=3.1234;
   // console.log(pi);
 //   const  pi=3/2;//SyntaxError: Identifier 'pi' has already been declared

// if(a===b)
// {
//     console.log("yash posible");
// }
// else{
//     console.log("not possible");
// }

// const a=10;
// a=100;
// console.log(a); // TypeError: Assignment to constant variable.

//const>> let>>  var --> in tearm of striction


//----------------------------------------------------------------------------------------------------
                                                        //LECTURE 7->

                                                        // BLOCK SCOPE AND SHADOWING IN JS

// {
//   var a=10; // global scope 
//    let b=20; // block scope
//     const c=30;// block scope
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//console.log(a);
// console.log(b); // error-> not accessable
//console.log(c);// error -> not accessable



                                                      /// SHADOWING
// var a=10;//same as inside
// let b=100;//diff scope
// {
//   var a=10; // global scope 
//    let b=20; // block scope
//     const c=30;// block scope
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b); //10 20  30 100
// console.log(a);// 10 20 30 10

//  const c=100;

// function x(){
//     const c=30;
//     console.log(c);
// }
// x();
// console.log(c);
 
//---------------------------------------------------------------------------------------------
                                          // LECTURE 8->
                                          //CLOUSRE

// function x()
// {
//    var a=7;
//    return function y()
//    {
//      console.log(a);
//    }
    
//     //y();
//    // return y;
// }
// // x(function y()
// // {
// //   console.log(a);
// // });
// var z=x();
// console.log(z);
// z();

// function z()
// {
//    var b=900;
//     function x()
//     {
//        var a=7;
//         function y()
//         {
//           console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

//------------------------------------------------------------------------------------------------------

                                              // LECTURE 9->
                                              // SETTIMEOUT +CLOUSRE

//  function x()
//  {
//   // var i=1;
//    for(var i=1;i<=5;i++)
//    {
//     function close(x){
//     setTimeout(function (){
//       console.log(x);
//     },x*1000);
//    }
//    close(i);
//   }
  
//  // console.log("yash sri");
//  }
//  x();

// ---------------------------------------------------------------------------------------------------------------------------------------
                                      //LECTURE 10->
                                      //ANONYMOUS FUNCTION?
                                      // FIRST CLASS FUNCTION?
                                      // FUNCTION STATEMENT VS  FUNCTION EXPRESSION VS FUNCTION DFECLARATION?


// fun statement

// function a(){
//   console.log("a called");
// }




// fun expression
// b();// TypeError: b is not a function
// var b=function(){
//   console.log("b is called");
// }




// // fun declarartion
// function a(){
//   console.log("aa called");
// }




//anaonymous fun
//  function (){
// }




//named fun expression

// var b=function d(){
// console.log(d);

// }
// a();
// b();
//d();// not in global scoppe


// diff between parameter & argument?
    //  var b= function(param1, param2)// parameter
    //  {
    //   console.log("b is called");
    //  }
    //  b(1,2);// argumemnt



//first class fun
// var b= function(param1)// parameter
//      {
//       console.log(param1);
//      }
//      b(function(){

//      });





///-------------------------------------------------------------------------------------------------
                                                    //LECTURE 10->
                                                    //call back fun?
                                                    //js is a synocrounous and single threaded languge
                                                    //blovckin the main thread
                                                    // power of call abck?
                                                    //deep about event listener
                                                    //clousre demo with event listner
                                                    // scope demo with event listener
                                                    //garbage collection & remove eventlistenr

                                                    

//call back fun?
//js is a synocrounous and single threaded languge
  //blovckin the main thread
  // power of call abck?


// setTimeout(function (){
//   console.log("timer ");
// },5000);
// function x(y)
// {
//   console.log("x is called");
//   y();
// }
// x(function y(){
//   console.log("y is called");
// });


 //EVENT LISTNER

//  document.getElementById("clickme").addEventListener("click",function xyz(){
//       console.log("xyz");
//  })


 //event clousre

// function attacheventlis(){
//   let count=0;//not good way to declare
//   document.getElementById("clickme").addEventListener("click",function xyz(){
//    console.log("xyz",++count);
//  }); 
// }
// attacheventlis();



//garbage collection & remove eventlistenr


//-------------------------------------------------------------------------------------
  //event loop

                                                   //  Functional programming
  //  higher order function

  // function x()// call back function
  // {
  //   console.log("namaste");
  // }
  // function y(x)  // higher order function
  // {
  //     x();
  // }

  // const rad=[3,1,2,4];
  // const cal=function(rad){
  //   const newarr=[];
  //   for(let i=0;i<rad.length;i++)
  //   {
  //     newarr.push(Math.PI* rad[i]*rad[i]);

  //   }
  //   return newarr;
  // };
  // console.log(cal(rad));
  // const calcir=function (rad){
  //   const newarr=[];
  //   for(let i=0;i<rad.length;i++)
  //   {
  //     newarr.push(2*Math.PI*rad[i]);

  //   }
  //   return newarr;
  // };
  // console.log(calcir(rad));

  // const caldia=function (rad){
  //   const newarr=[];
  //   for(let i=0;i<rad.length;i++)
  //   {
  //     newarr.push(2*rad[i]);

  //   }
  //   return newarr;
  // };
  
  // console.log(caldia(rad));

    // const rad=[3,1,2,4];
    // const area=function(rad)
    // {
    //   return Math.PI*rad*rad;
    // }
    // const consfe=function (rad)
    // {
    //   return Math.PI*rad*2;
    // }
    // const diam=function(rad)
    // {
    //   return 2*rad;
    // }
    // const cal=function(rad,logic)
    // {
    //   const output=[];
    //   for(let i=0;i<rad.length;i++)
    //   {
    //       output.push(logic(rad[i]));
    //   }
    //   return output;
    // }
    // console.log(rad.map(area));

    // console.log(cal(rad,area));
    // console.log(cal(rad,consfe));
    // console.log(cal(rad,diam));

    // --------------------------------------------------------------------------------------------



                                                            //higer order function in js

                                                            //map--> transformation
                                                            //filter
                                                            //reduce



// const arr=[5,1,3,2,6];

// function double(x)
// {
//   return x*2;
// }
// function tripal(x)
// {
//   return x*3;
// }
// function binary(x)
// {
//   return x.toString(2);
// }
// const op4=arr.map((x) => x.toString(2));
// const op=arr.map(double);
// const op1=arr.map(tripal);
// const op3=arr.map(binary);
// const op2=arr.map(function binary(x)
// {
//   return x.toString(2);
// });

// console.log(op);
// console.log(op1);
// console.log(op3);
// console.log(op2);
// console.log(op4);


                                                            

//filter -> used to filter

// const arr=[5,1,3,2,6];
// function isodd(x)
// {
//   return x%2!==0;
// }
//   const op=arr.filter(isodd);
//   console.log(op);

//   function iseven(x)
// {
//   return x%2===0;
// }
//   const op1=arr.filter(iseven);
//   console.log(op1);



//reduce->


const arr=[5,1,3,2,6];

// function findsum(arr)
// {
//   let sum=0;
//   for(let i=0;i<arr.length;i++)
//   {
//     sum=sum+arr[i];
//   }
//   return sum;
// }
// console.log(findsum(arr));

// const res=arr.reduce(function(acc,curr)
// {
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(res);
