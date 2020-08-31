const mongoose = require("mongoose");

/*
 
What is Mongoose Model & Schema?
   A Mongoose model is a wrapper on the Mongoose schema.
   A Mongoose schema defines the structure of the document, default values, validators, etc.,
   whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
  
*/

const ProductSchema = mongoose.Schema({
  prodId: {
    type: String,
    required: true,
  },
  prodName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Product", ProductSchema);
// const Product = (module.exports = mongoose.model("Product", ContactSchema));

/*
 
- - - Terminologies - - -
 
1) Collections:
   ‘Collections’ in Mongo are equivalent to tables in relational databases.
   They can hold multiple JSON documents.
 
2) Documents:
   ‘Documents’ are equivalent to records or rows of data in SQL.
   While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.
 
3) Fields:
   ‘Fields’ or attributes are similar to columns in a SQL table.
 
4) Schema:
   While Mongo is schema-less, SQL defines a schema via the table definition.
   A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.
 
5) Models:
   ‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.
 
*/
