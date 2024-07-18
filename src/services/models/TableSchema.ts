import mongoose from "mongoose";
const Schema = mongoose.Schema;
const tableSchema = new Schema({
    name: String,
});

const GetUsers = mongoose.model('ListUsers', tableSchema);
export default GetUsers;