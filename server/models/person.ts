import * as mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const Person = mongoose.model('Person', personSchema);

export default Person;