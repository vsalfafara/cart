import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
   email_address: String,
   password: String,
   first_name: String,
   last_name: String,
   phone_number: Number,
   role: String,
   date_created: Date,
   activated: Boolean,
   business_id_ref: String
});