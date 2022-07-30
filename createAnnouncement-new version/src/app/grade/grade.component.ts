import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  students:{name:string,grade:number}[] = [{name:'student1',grade:90},{name:'student2',grade:90}];
  grade: {name:string, item: string, grade:number}[]=[{name:'student1',item:'assignment1',grade:87}];
  
  constructor() { }
  ngOnInit(): void {
  }
}
