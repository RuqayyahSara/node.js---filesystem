// Reading a file synchronously
var fs = require("fs"); 

var read = fs.readFileSync("readfile.txt", "utf8");
console.log(read);  

// Reading a file asynchronously
var fs = require("fs");

var write = function(error,data){
  if(error){
  return console.error(error);
  }
    console.log(data);
}

fs.readFile("readfile.txt", "utf8", write);

console.log("Yeah.It is asynchronous"); 


// Writing a file synchronously

var fs = require("fs");
 fs.writeFileSync("writeFile.txt", read); 


 // Writing a file asynchronously
  var fs = require("fs");

  fs.writeFile("writeAsync.txt", "writing a file asynchronously" ,function(err){
   if(err){ 
     throw err;
  }
  });
  console.log("Yep.It is asynchronous");
 

 






