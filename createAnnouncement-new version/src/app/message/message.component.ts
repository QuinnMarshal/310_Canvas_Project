import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  title: string='';
  content: string='';
  sendTo:string=''; 
  messageChange = ['','','']
  messageList: Array<{name: string, message:string, sendTo:string}> = [{name:'A1', message:'hi',sendTo:'kevin'} ]
  constructor() { }
  add(){
    this.messageChange  = [this.title,this.content,this.sendTo]
    this.messageList.push({name:this.messageChange[0],message:this.messageChange[1],sendTo:this.sendTo});
  }
  delete(x:number){
    this.messageList.splice(x,1);
  }
  ngOnInit(): void {
  }

}
