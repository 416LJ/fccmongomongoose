require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// initialize the mongooseDb handler.
const { Schema } = mongoose;
// define the Model and in initialize the schema
const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});
// instantiate a new model from the schema
const Person = mongoose.model("Person", personSchema);



// create and save a person function below.
const createAndSavePerson = (done) => {

  const Michael = new Person({name: "Michael", age: "23", favoriteFoods: ["pizza", "veggies"]});
  Michael.save(function(err, data){
    if(err) return console.error(err);
    done(null, data);
  })
  
};

// create and save an array of people function below.
const arrayOfPeople = [
  {name: "Kawhi", age: "2", favoriteFoods: ["wings", "fries"]},
  {name: "Bron", age: "6", favoriteFoods: ["ice cream", "chocolate"]},
  {name: "Kobe", age: "24", favoriteFoods: ["rice", "chicken"]}
]
// the function
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err,people) {
    if (err) return console.log(err);
    done(null, people);
  })
  
};


// query a person in the database.
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  })
};



const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
