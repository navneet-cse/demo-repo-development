/*
 HTTP is protocol(so machines can talk to each other) sends request to http servers  for communication between web browser(client) and a website hosrting server(servers)

 does every server address is same ?

 using domain name (like google.com) u can reach to the server that will givce u a response of iur request /
 u can see domain name ip : ping google.com /
 u can make different servers by changing ip address according to the region - [project ke liye]/

 locally(in ur machine) u can change domain name (like google.com) to point to other server (rent a server aws ip address) /

 In same ip address (or a server ) we can run different process(different websites) specified by different port numbers (in domain name port number is already included). /

 Whenever https (s- it means by default it goes to port 443)
 Whenever http (provide port number at end and if we wont't provide any port number then by default 443)

 methods : what repsonse process will give either by default(get : read) or other methods, u can change a method by using postman(software : may return something[HTML] or may return error(json [java script object notation] data - if no handling of that method)).

 We can convert json to html 

 route is always fix but method we can change 
*/

// we use express library to create a http server

const express = require("express");
const app = express();
app.listen(3000) // which port



// localhost is the ip address of our own device. 
// route handlers, if '/' then send ""hello world""
app.get('/', (req, res) => { // for"GET method "
  res.send('Hello World')
})

// one more route handler
app.get('/asd', (req, res) => { 
  res.send('World of Navneet')
})


function sum(n){
  let ans =0;
  for(let i=1;i<=n;i++){
    ans=ans+i;
  }
  return ans;
}

// http://localhost:3000/res?a=10&b=20&n=10

app.get("/res",function(req,res){
  // modified

  const queries =req.query;
  let output="";

  for(const key in queries){
    const value=parseInt(queries[key]);
    const ans =sum(value);
    output += `hi your ans${key} is ${ans} \n`;  
  }
  res.type("text/plain");
  res.send(output);
})