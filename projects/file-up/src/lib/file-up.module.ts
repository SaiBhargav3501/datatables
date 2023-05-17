import { NgModule } from '@angular/core';
import { FileUpComponent } from './file-up.component';
import { TableComComponent } from './table-com/table-com.component';

import {HttpClientModule} from "@angular/common/http"
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FileUpComponent,
    TableComComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    DataTablesModule

  ],
  exports: [
    FileUpComponent
  ]
})
export class FileUpModule { }
