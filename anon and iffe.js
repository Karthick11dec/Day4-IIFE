1.odd numbers:

var arr=[1,2,3,4,5,10,11,13,15];
var sum=[];

1.1--->Anonymous function:

var odd=function (arr)//anonymous function start
 {
    arr.forEach((elem)=>
     {
    if(elem%2!==0)
    {
      sum.push(elem);
    }
     });console.log(sum);
 } 
 odd(arr);//anonymous function close

1.2--->IIFE function:

(function(arr)//IIFE function start[syntax:(function(arr){console.log(arr);})(arr);]
{
   arr.forEach((arr)=>{
   if(arr%2!==0)
   {
       sum.push(arr);
   }
   });
   console.log(sum);
    
})(arr);//IIFE function close
=========================================================

2.Reduce :

var arr=[10,20,30,40,50];
var sum=[];

2.1--->//Anonymous function:

 var odd=function (arr)//anonymous function start
 {
 
   var sum= arr.reduce((acc,cv)=>
     {
    return acc+cv;
    }); console.log(sum);
};
 odd(arr);//anonymous function close

2.2--->//IIFE function:

(function(arr)//IIFE function start[syntax:(function(arr){console.log(arr);})(arr);]
{
  var sum= arr.reduce((acc,cv)=>
     {
    return acc+cv;
    }); console.log(sum);
    
})(arr);//IIFE function close
===========================================================
3.Median program:

var num1=[20,30,40];
var num2=[60,70,80,90];
var num3=num1.concat(num2);

//3.1--->//anonymous function:

var odd=function (arr)//anonymous function start
 {
  if(arr.length%2!==0)//odd
         {
          
          var num4=Math.floor(num3.length/2);
          console.log(num3[num4]);     
         }
  else//even
  {
  var num5=(num3.length)/2;
  var num6=(num3[num5-1]+num3[num5-1+1])/2;
  console.log(num6);
  }
};
 odd(num3);//anonymous function close

 //3.2--->IIFE function:

(function(arr)//IIFE function start[syntax:(function(arr){console.log(arr);})(arr);]
{
  if(arr.length%2!==0)//odd
         {
          
          var num4=Math.floor(num3.length/2);
          console.log(num3[num4]);     
         }
  else//even
  {
   var num5=(num3.length)/2;
   var num6=(num3[num5-1]+num3[num5-1+1])/2;
   console.log(num6);
  }
    
})(num3);//IIFE function close

========================================================
4.prime numbers:

4.1--->anonymous function:

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]

 var odd=function(arr)
 {
 var prime = arr.filter((number) => {
    
  for (var i = 2; i <= Math.sqrt(number); i++)
  {
    if (number % i === 0)
    {
    return false;
    }
  }
  return true;
});
console.log(prime);
}
odd(numArray);

4.2--->IIFE function:

(function(arr)
{
  var prime = arr.filter((number) => {
    
  for (var i = 2; i <= Math.sqrt(number); i++)
  {
    if (number % i === 0)
    {
    return false;
    }
  }
  return true;
  });
  console.log(prime);
  
})(numArray);
===========================================================
5.Duplicates:

var newarray = ["karthick","janaa","mani","karthick","kings "];
var dups = [];

5.1--->Anonymous function:

var duplicate=function(obj){

    var arr = obj.filter(function(elem) {
      
      if (dups.indexOf(elem) == -1)//entered value is not present in the array it return -1
      {
        dups.push(elem);
        return true;
      }
        return false;
      });
    console.log(arr);
    
    };
    duplicate(newarray);

5.2--->IIFE function:

(function(obj){
    
    var arr = obj.filter(function(elem) 
    {
     if (dups.indexOf(elem) == -1)//entered value is not present in the array it return -1
     {
       dups.push(elem);
       return true;
     }
       return false;
     });
   console.log(arr);
       
   })(newarray);
===========================================================
6.Convert all the strings to title caps in a string array :

var newArray=["karthick","janaa","mani"];
var temp=[];

6.1--->Anonymous function:

var result=function(obj){

    var num=obj.forEach((elem)=>{
        
        var sliced=elem.slice(0,1);
        var up=sliced.toUpperCase();
        var sliced1=elem.slice(1,elem.length);
    
        temp.push(up.concat(sliced1));
        
    })
    console.log(temp);
    
    }
    result(newArray);

6.2--->IIFE function:

(function(obj){
    
    var num=obj.forEach((elem)=>{
    
    var sliced=elem.slice(0,1);
    var up=sliced.toUpperCase();
    var sliced1=elem.slice(1,elem.length);

    temp.push(up.concat(sliced1));
    
})
console.log(temp);

})(newArray);
===========================================================
7.Palindrome:

var arr=["madam","janaa","mam","mani","abba"];
var temp=[];

7.1---->Anonymous function:

var anonymous =function(obj){
    
    var foreach=obj.forEach(name=>{
    
    var name1=name.slice(0,(Math.ceil(name.length/2)));
    var name2=name.slice((Math.floor(name.length/2)),name.length);
    var name3=name2.split("").reverse().join().replace(/,/g,"");
    
    if(name1==name3)
    
      return temp.push(name);
    else
        return temp;
    
    });
    console.log(temp);
    
    };
    anonymous(arr);

7.2--->IIFE function:

(function(obj){
    
    (function(obj){
    
        var foreach=obj.forEach(name=>{
        var name1=name.slice(0,(Math.ceil(name.length/2)));
        var name2=name.slice((Math.floor(name.length/2)),name.length);
        var name3=name2.split("").reverse().join().replace(/,/g,"");
        
        if(name1==name3)
        
          return temp.push(name);
        else
          return temp;
        
        });
        console.log(temp);
        
        })(arr);
    =======================================================
8.Rotate an array by k times and return the rotated array:

var arr=[1,2,3,4,5];
var rotation=102;//k times

8.1--->Anonymous function:

var anonymous=function(arr){
var rotate=rotation%arr.length;
var result=arr.slice(0,rotate);
var result2=arr.slice(rotate,arr.length);
console.log(result2.concat(result));
};
anonymous(arr);

8.2--->IIFE function:

(function(arr){
var rotate=rotation%arr.length;
var result=arr.slice(0,rotate);
var result2=arr.slice(rotate,arr.length);
console.log(result2.concat(result));
})
(arr);

===========================================================
    
