const express = require('express');
const app = express();

app.use(express.json());
let students=[
    {
     "RollNo": 19733001,
     "Name": "A ABHISHEK GOUDngit",
     "College": "NGIT",
     "Section": "3-CSE-A"
    },
    {
     "RollNo": 19733003,
     "Name": "AKULA VENKATA SAI SUMEDHngit",
     "College": "NGIT",
     "Section": "3-CSE-A"
    },
    {
     "RollNo": 19733015,
     "Name": "D NEHAngit",
     "College": "NGIT",
     "Section": "3-CSE-A"
    },
    {
     "RollNo": 19733047,
     "Name": "SAICHARAN NEELARENTAngit",
     "College": "NGIT",
     "Section": "3-CSE-A"
    }
];

app.post('/api/students', (req,res) =>{    
    const stdArr = students.filter((s) => {return s.College===req.body.college});   
    if(!stdArr){
        res.status(404).send("No student found with given college name");
    }
    res.send(stdArr);
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Express_demo app listening at http://localhost:${port}`);
});
