import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  public title = '';
  public post = '';

  discussionList: Array<{name: string, message:string}> = [{name:'A1', message:'hi'},]
  discussionChange: Array<string> = ['',''];
  add(){
    this.discussionChange  = [this.title,this.post]
    this.discussionList.push({name:this.discussionChange[0],message:this.discussionChange[1]});
  }
  delete(x:number){
    this.discussionList.splice(x,1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
