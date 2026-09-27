const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mock Database
const cars = [
  {
    id: 1,
    model: "Hyundai Creta SX",
    type: "SUV",
    pricePerDay: 1599,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 5,
    mileage: "17kmpl",
    image: "https://placehold.co/600x400/222/E6B325?text=Creta+SX"
  },
  {
    id: 2,
    model: "Mahindra Scorpio-N",
    type: "SUV",
    pricePerDay: 2499,
    fuel: "Diesel",
    transmission: "Manual",
    seating: 7,
    mileage: "15kmpl",
    image: "https://placehold.co/600x400/222/E6B325?text=Scorpio-N"
  },
  {
    id: 3,
    model: "Kia Sonet",
    type: "Compact SUV",
    pricePerDay: 1299,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 5,
    mileage: "18kmpl",
    image: "https://placehold.co/600x400/222/E6B325?text=Kia+Sonet"
  },
  {
    id: 4,
    model: "Toyota Fortuner",
    type: "Luxury SUV",
    pricePerDay: 4999,
    fuel: "Diesel",
    transmission: "Automatic",
    seating: 7,
    mileage: "10kmpl",
    image: "https://placehold.co/600x400/222/E6B325?text=Fortuner"
  },
  {
    id: 5,
    model: "Maruti Swift",
    type: "Hatchback",
    pricePerDay: 999,
    fuel: "Petrol",
    transmission: "Manual",
    seating: 5,
    mileage: "22kmpl",
    image: "https://placehold.co/600x400/222/E6B325?text=Swift"
  },
  {
    id: 6,
    model: "BMW 5 Series",
    type: "Luxury Sedan",
    pricePerDay: 8999,
    fuel: "Diesel",
    transmission: "Automatic",
    seating: 5,
    mileage: "12kmpl",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    model: "Mercedes-Benz E-Class",
    type: "Luxury Sedan",
    pricePerDay: 9499,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 5,
    mileage: "11kmpl",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    model: "Audi A6",
    type: "Luxury Sedan",
    pricePerDay: 8499,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 5,
    mileage: "13kmpl",
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    model: "Range Rover Velar",
    type: "Luxury SUV",
    pricePerDay: 12999,
    fuel: "Diesel",
    transmission: "Automatic",
    seating: 5,
    mileage: "9kmpl",
    image: "https://images.unsplash.com/photo-1511108690759-00103770337c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    model: "Jaguar F-PACE",
    type: "Luxury SUV",
    pricePerDay: 11499,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 5,
    mileage: "10kmpl",
    image: "https://images.unsplash.com/photo-1566473065146-bf3b43279163?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    model: "Tesla Model 3",
    type: "Electric Sedan",
    pricePerDay: 7999,
    fuel: "Electric",
    transmission: "Automatic",
    seating: 5,
    mileage: "500km/charge",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    model: "Volvo XC90",
    type: "Luxury SUV",
    pricePerDay: 9999,
    fuel: "Hybrid",
    transmission: "Automatic",
    seating: 7,
    mileage: "18kmpl",
    image: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 13,
    model: "Porsche 911",
    type: "Sports Car",
    pricePerDay: 49999,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 2,
    mileage: "8kmpl",
    image: "https://images.unsplash.com/photo-1523305358952-b22a8a7a243d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 14,
    model: "Lamborghini Urus",
    type: "Super SUV",
    pricePerDay: 74999,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 5,
    mileage: "6kmpl",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 15,
    model: "Rolls-Royce Ghost",
    type: "Ultra Luxury",
    pricePerDay: 149999,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 4,
    mileage: "5kmpl",
    image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 16,
    model: "Bentley Continental GT",
    type: "Luxury Coupe",
    pricePerDay: 89999,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 4,
    mileage: "7kmpl",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 17,
    model: "Ferrari F8",
    type: "Supercar",
    pricePerDay: 99999,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 2,
    mileage: "7kmpl",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 18,
    model: "Aston Martin DB11",
    type: "Luxury GT",
    pricePerDay: 64999,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 4,
    mileage: "8kmpl",
    image: "https://images.unsplash.com/photo-1603584173870-7f3099909249?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 19,
    model: "Maserati Ghibli",
    type: "Luxury Sedan",
    pricePerDay: 34999,
    fuel: "Petrol",
    transmission: "Automatic",
    seating: 5,
    mileage: "9kmpl",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 20,
    model: "Lexus LS",
    type: "Luxury Sedan",
    pricePerDay: 29999,
    fuel: "Hybrid",
    transmission: "Automatic",
    seating: 5,
    mileage: "15kmpl",
    image: "https://images.unsplash.com/photo-1621213328198-bc1c2cc83307?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 21,
    model: "Ford Mustang GT",
    type: "Muscle Car",
    pricePerDay: 19999,
    fuel: "Petrol",
    transmission: "Manual",
    seating: 4,
    mileage: "9kmpl",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=800"
  }
];

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
