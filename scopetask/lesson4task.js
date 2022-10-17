// Create a function, inside the function add a second function, and again add a third function into the second function.
// Create 3 variables.
// Define 3 the variables in the correct place so that:
// The first variable is accessible inside every function.
// The second variable is accessible inside the second and third function only.
// The third variable is accessible inside the third function only.
// 4. Define a 4th variable inside the 3rd function. This variable should be accessible by every function.
// 5. Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.




function one (){ 
    var var1 = 1
   
    function two (){
        var var2 = 2
      
        function three (){ 
            var var3 = 3
            var4 = 4

            {
                const var5 = 5    
            } 
                        
        }
    }
}





// 6. Create an object which contains a function which console.logs this.something, where something is any name you like.

var obj = {question6: function (item){
            
            console.log(this.item)}}

//  7. Create an object which contains a variable which has the same name as you used above.

var obj2 = {item:"spade"}

 // 8. Use call to send the object at q7 to the function inside q6, forcing the function to use the this you sent it.~

obj.question6(obj2)