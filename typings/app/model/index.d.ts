// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTable from '../../../app/model/table';

declare module 'egg' {
  interface IModel {
    Table: ReturnType<typeof ExportTable>;
  }
}
