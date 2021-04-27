// this is how you create a db, collection and document

use zoo; // db
db.dropDatabase();

db.animals.insertMany([ // collection
  {
    name: "Janet",
    type: "Polar Bear"
  },
  {
    name: "Norman",
    type: "Penguin",
    age: 5
  }
]);

// abobe are docments (objects)