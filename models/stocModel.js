import mongoose from 'mongoose';

const stocSchema = new mongoose.Schema(
  {
    codINV: { type: Number },
    codPROD: { type: Number },
    numeProdus: { type: String },
    categorieProdus: { type: String },
    localizareProdus: { type: String },
    adresaProdus: { type: String },
    responsabilProdus1: { type: String },
    responsabilProdus2: { type: String },
    responsabilProdus3: { type: String },
    responsabilProdus4: { type: String },
    stocINIT: { type: Number },
    stocCUR: { type: Number },
    dataIntroducereProdus: { type: String },
    urmatorulServiceProdus: { type: String },
    user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user3: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user4: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Stoc = mongoose.model('Stoc', stocSchema);
export default Stoc;
