
import { model, Schema, Model, Document } from 'mongoose';

export interface IPod {
  podType: 'LARGE' | 'SMALL' | 'ESSPRESSO';
  cofferFlavour: 'VANILLA' | 'CARAMEL' | 'PSL' | 'MOCHA' | 'HAZELNUT';
  packSize: number;
}

export interface IPodDocument extends IPod, Document {}

const PodSchema: Schema = new Schema({
  podType: {
    type: String,
    enum : ['LARGE', 'SMALL', 'ESSPRESSO'],
    required: true
  },

  coffeFlavour: {
    type: String,
    enum : ['VANILLA', 'CARAMEL', 'PSL', 'MOCHA', 'HAZELNUT'],
    required: true
  },

  packSize: {
    type: Number,
    required: true,
    default: 1
  }
  
});

export const Pod: Model<IPodDocument> = model('Pod', PodSchema);