import { Component, OnInit } from '@angular/core';
import { AnnounceService } from '../announce.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements;
  constructor(service: AnnounceService) { 
    this.announcements = service.getA();
  }

  ngOnInit(): void {
  }

}
