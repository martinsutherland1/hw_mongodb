// this script finds an object bu their id

const id = ObjectId('608719700d87524a21382fc9');
db.animals.findOne({ _id: id });