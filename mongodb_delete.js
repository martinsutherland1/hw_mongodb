// this is the script to delete a object from a MongoDb database
// note: the id and the db name must be altered

db.animals.deleteOne({ _id: ObjectId('608719700d87524a21382fc9') });