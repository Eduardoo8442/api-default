import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;
const tableSchema = new Schema({
    name: String,
});

const getUsers = mongoose.model('ListUsers', tableSchema);
export default getUsers;