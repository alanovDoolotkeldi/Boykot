import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 5173;

app.use(cors({
  origin: "http://localhost:5173" // замените на ваш фронтенд-порт, если нужно
}));

app.get('/api/v1/products', async (req, res) => {
  try {
    const response = await axios.get('http://159.223.230.188/api/v1/products/');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from remote server:', error);
    res.status(500).send('Error fetching data from remote server');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
