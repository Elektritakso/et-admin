// MongoDB collections we need to use for this system
// Translation collection
Translations = new Mongo.Collection("translations");
// Config collection
CommonConfig = new Mongo.Collection("commonconfig");
// Test collection for dev purpose
Test = new Mongo.Collection("test");
// Errors collection
Errors = new Mongo.Collection("erros");
// Cars collection()
Cars = new Mongo.Collection("cars");
// Shift collection
Shifts = new Mongo.Collection("shifts");
// Orders collections
Orders = new Mongo.Collection("orders");
// Routes for orders collection
OrderRoutes = new Mongo.Collection("orderroute");
// client collection
Clients = new Mongo.Collection("clients");
// Client address collection for caching
ClientAddresses = new Mongo.Collection("clientaddresses");
// Client limits collection
Limits = new Mongo.Collection("limits");
// car injuries collection
FleetNotes = new Mongo.Collection("fleetnotes");
// companies collection
Companies = new Mongo.Collection('companies');



console.log("Rendering collections");

