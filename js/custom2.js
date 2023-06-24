
/*

    Rest operator:-

   (1) - Jb function definition k andar 3 dot (...) hote h to use rest operator khte h.
   (2) - Rest operator stores multiple arguments.
   (3) - Function calling k time kitne bhi argumnet send kre but agr formal argument me 
         define nhi krna chahte h tb rest operator use krte h.
   (4) - Actual argument (passing parameter in function calling) hm kitne bhi send kr 
          skte h but formal argument me ek hi rest operator (...args) lena hota h.

*/

// 1.   Function definition

 function getMyFullName(...args) {                      //  ...args is called rest operator.
    console.log(args);

 }

 // 2. Function calling

 getMyFullName('Anita',"Dubey",10,20,5.6,["Anu","Kajal"]);