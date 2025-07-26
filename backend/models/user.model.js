import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  name: {
    type: String,
    required: true,
    max: 30,
    trim: true
  },
  phone: {
    type: String,
    unique: true,
    match: /^[6-9]\d{9}$/
  },

  businessInfo: {
    type: {
      type: String,
      enum: ['grocery', 'electronics', 'clothing', 'pharmacy', 'hardware', 'restaurant', 'other'],
      required: true
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large'],
      required: true
    },
    targetCustomers: {
      type: String,
      enum: ['general', 'families', 'professionals', 'students', 'seniors'],
      default: 'general'
    }
  },

  preferences: {
    alertFrequency: {
      type: String,
      enum: ['immediate', 'daily', 'weekly'],
      default: 'daily'
    },
    planningPeriod: {
      type: Number,
      enum: [3, 7, 14],
      default: 7
    },
    notificationChannels: {
      email: {type: Boolean, default: true},
      sms: {type: Boolean, default: true},
      whatsapp: {type: Boolean, default: true}
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true,
  collection: 'user'
});

const User = mongoose.model("User", userSchema);
export default User;