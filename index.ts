import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import eventRoutes from './src/routes/eventRoutes';

const app = express();
const port = 5000;


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI = 'mongodb+srv://sohamg:soham123@cluster0.gndhwrg.mongodb.net/event-management';

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to mongoDb database'))
  .catch(err => console.log("MongoDB connection error: ",err));
  
app.use('/api', eventRoutes);

app.listen(port, () => {
  console.log(`Event Management Platform is running on http://localhost:${port}`);
});
