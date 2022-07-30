import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  fileName = '';
  assignments:{name:string,grade:number}[] = [{name:'student1',grade:90},{name:'student2',grade:90}];
  constructor() { 
  }
  onFileSelected(event: any){

  }
  ngOnInit(): void {
  }

}
