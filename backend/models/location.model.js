import mongoose from "mongoose"; 

const locationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  locationName: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  coordinates: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  businessDetails: {
    branchName: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    localBusinessType: {
      type: String,
      enum: ['grocery', 'electronics', 'clothing', 'pharmacy', 'hardware', 'restaurant', 'other']
    },
    localBusinessSize: {
      type: String,
      enum: ['small', 'medium', 'large']
    }
  },
   weatherPreferences: {
    alertThresholds: {
      temperature: {
        min: { type: Number, default: 10 },
        max: { type: Number, default: 40 }
      },
      rainfall: {
        type: Number,
        default: 50 // mm
      },
      windSpeed: {
        type: Number,
        default: 25 // km/h
      }
    },
    monitoredEvents: [{
      type: String,
      enum: ['heatwave', 'rainfall', 'storm', 'flood', 'cyclone', 'dust_storm', 'fog']
    }]
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isPrimary: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  collection: 'locations'
});

const Location = mongoose.model('Location', locationSchema);
export default Location;