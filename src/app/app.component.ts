import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-table-dest';
  inputFile:any
  error?:string
  data:any=[]
 alldata:any
 ipdata:any;

 datafiles:any
  initialfile?:File
  onFileUploaded(file: any) {
    this.initialfile=file
  }
}
