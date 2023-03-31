// import express from 'express'

// const app = express()
// const PORT = 4000

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `)
// })

// app.get('/', (req, res) => {
//   res.send('Hey this is my API running 🥳')
// })

// app.get('/about', (req, res) => {
//   res.send('This is my about route..... ')
// })
// module.exports = app

import express from 'express'
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.json());

const data = ["a", "1", "334", "4", "R"];
// app.get('/', (req, res) => {
//   res.json(data);
// });

app.get('/Api', (req, res) => {
  try {
   
    const inputArray = req.body.array;

  
    const fullName = req.body.full_name;
    const dob = req.body.dob;
    const email = req.body.email;
    const collegeRollNumber = req.body.college_roll_number;


    const userId = `${fullName.toLowerCase()}_${dob.split('-').join('')}`;

    
    const evenNumbers = inputArray.filter(num => num % 2 === 0);
    const oddNumbers = inputArray.filter(num => num % 2 !== 0);
    const alphabets = inputArray.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

   
    const response = {
      user_id: userId,
      is_success: true,
      email_id: email,
      college_roll_number: collegeRollNumber,
      even_numbers: evenNumbers,
      odd_numbers: oddNumbers,
      alphabets: alphabets
    };

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
