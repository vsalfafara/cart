import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
   business_name: String,
   business_code: String,
   dti_registered: Boolean,
   phone_number: Number,
   email_address: String,
   address: String,
   photo: String,
   social_media: Array,
   website_enabled: Boolean,
   online_orders_enabled: Boolean,
   payment_methods: [{
      name: String,
      details: String,
      activated: Boolean
   }],
   reviews: [{
      name: String,
      message: String,
      date: Date
   }],
   account_id_ref: mongoose.Schema.Types.ObjectId
});