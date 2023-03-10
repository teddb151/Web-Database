import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {
   date = new Date();
   data = '';
   curTime:any;
   
   constructor(private dbService:DatabaseService) {this.data = formatDate(this.date, 'dd-MM-yyyy', 'en-AU',);
   setInterval(() => {
    this.curTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()}, 1);
}
   
  ngOnInit(): void {
    
  }

}
