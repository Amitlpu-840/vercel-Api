import express from 'express'
const app = express();
const port = 3000;

app.use(express.json());


const data = ["a", "1", "334", "4", "R"];


app.post('/bfhl', (req, res) => {
  try {
   
    const inputArray = req.body.array;
    
    const fullName = 'Amit Giri';
    const dob = "02-05-2002";
    const email = "thisisag840@gmail.com";
    const collegeRollNumber = "12008090";


    const userId = `${fullName.toUpperCase()}_${dob.split('-').join('')}`;
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
