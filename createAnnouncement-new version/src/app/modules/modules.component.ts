import { HttpClient, HttpParams} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { text } from 'express';
import {saveAs} from 'file-saver';
@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent {
  files: string[]= ['file1','file2']
  constructor(private http: HttpClient) {}
  download(){
    this.http.get('file:///Users/kevin/Weblearning/test.txt',{responseType: 'arraybuffer'}).subscribe(
      pdf => {
        const blob = new Blob([pdf], {type: 'application/text'});
        const fileName= 'd.txt';
        saveAs(blob, fileName);
        alert('downloaded');
      }, err => {
        alert('error');
      }
    )
  }
  upload(){
    
  }
}
