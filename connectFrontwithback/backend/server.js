import express from 'express';
const app=express();

// app.get('/',(req,res)=>{
//  res.send('Server is ready');
// });

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Programmer's Diet",
          content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
          id: 2,
          title: "JavaScript Joke",
          content: "Why did the JavaScript developer go broke? Because he kept using 'var' when he should’ve used 'let'."
        },
        {
          id: 3,
          title: "Backend Love",
          content: "I would tell you a joke about APIs, but you wouldn't get the response."
        },
        {
          id: 4,
          title: "Debugging Life",
          content: "Debugging: Being the detective in a crime movie where you are also the murderer."
        },
        {
          id: 5,
          title: "Tech Support",
          content: "Have you tried turning it off and on again?"
        }
      ];
      res.send(jokes)
      
})

const port=process.env.port||3000;

app.listen(port,()=>{
    console.log("Running on port "+port)
})


