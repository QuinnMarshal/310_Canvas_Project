import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AnnounceService } from '../announce.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})

export class AnnouncementsComponent {
  announcementList: Array<{name: string, message:string}> = [{name:'A1', message:'hi'},
  {name:'A2', message:'hi'}, 
  {name:'A3', message:'hi'}, ]
  
  values = '';
  title:string ='';
  message:string ='';
  announceChange: Array<string> = ['',''];
  add(){
    this.announceChange  = [this.title,this.message]
    this.announcementList.push({name:this.announceChange[0],message:this.announceChange[1]});
  }
  delete(x:number){
    this.announcementList.splice(x,1);
  }
  onKey(event:any){
    this.values += event.target.value+" | ";
  }

}
