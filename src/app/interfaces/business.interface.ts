import * as mongoose from 'mongoose';
import { Document } from 'mongoose'

export class Business extends Document {
   business_name: String
   business_code: String
   dti_registered: Boolean
   phone_number: Number
   email_address: String
   address: String
   photo: String
   social_media: []
   website_enabled: Boolean
   online_orders_enabled: Boolean
   payment_methods: [{
      name: String
      details: String
      activated: Boolean
   }]
   reviews: [{
      name: String
      message: String
      date: Date
   }]
   account_id_ref: mongoose.Schema.Types.ObjectId
}
