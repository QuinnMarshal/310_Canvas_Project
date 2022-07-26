import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnounceService {

  constructor() { }
  getA(){
    return ["A1","A2","A3"];
  }
}
