import mongoose from "mongoose";

const weatherAlertSchema = new mongoose.Schema({
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  alertType: {
    type: String,
    enum: ['heatwave', 'rainfall', 'storm', 'flood', 'cyclone', 'dust_storm', 'fog'],
    required: true
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'extreme'],
    required: true
  },
  weatherData: {
    temperature: Number,
    humidity: Number,
    rainfall: Number,
    windSpeed: Number,
    condition: String
  },
  recommendations: {
    immediate: [String],
    shortTerm: [String],
    inventory: [String],
    marketing: [String],
    operations: [String]
  },
  isRead: {
    type: Boolean,
    default: false
  },
  sentAt: {
    type: Date,
    default: Date.now
  },
  validUntil: {
    type: Date
  }
}, {
  timestamps: true,
  collection: 'alert'
});

const Alert = mongoose.model('Alert', weatherAlertSchema);
export default Alert;