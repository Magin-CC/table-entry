import { Application } from 'egg';

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TableSchema = new Schema({
    year: { type: Number },
    month: { type: Number },
    day: { type: Number },
    pzhs: { type: String },
    dfkm: { type: String },
    zy: { type: String },
    yes: { type: Boolean },
    srje: { type: Number },
    fcje: { type: Number },
    jcje: { type: Number },
  });

  return mongoose.model('Table', TableSchema);
};
