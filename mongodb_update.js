// this si the command to update a mongoDB entry
// note: the id and the db name must be altered

db.animals.updateOne( // MODIFIED
    { _id: ObjectId('608719700d87524a21382fc9') },
    { $set: { name: "Pip" } }
  );