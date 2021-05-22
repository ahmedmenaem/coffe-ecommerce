
import { model, Schema, Model, Document } from 'mongoose';

export interface IMachine {
  waterLineCompitable: boolean;
  machineType: 'LARGE' | 'SMALL' | 'ESSPRESSO';
  machineModel: 'BASE' | 'PREMIUM' | 'DELUXE';
}

interface IMachineDocument extends IMachine, Document {}

const MachineSchema: Schema = new Schema({

  waterLineCompitable: {
    type: Boolean,
    default: false
  },

  machineType: {
    type: String,
    enum : ['LARGE', 'SMALL', 'ESSPRESSO'],
    required: true
  },

  machineModel: {
    type: String,
    enum : ['BASE', 'PREMIUM', 'DELUXE'],
    required: true
  }
  
});

export const Machine: Model<IMachineDocument> = model('Machine', MachineSchema);