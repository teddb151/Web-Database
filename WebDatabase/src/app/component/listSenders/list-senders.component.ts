import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-list-senders',
  templateUrl: './list-senders.component.html',
  styleUrls: ['./list-senders.component.css']
})
export class ListSendersComponent implements OnInit {

  sendersdb:any[] = [];
  constructor(private dbService:DatabaseService) { }

  ngOnInit(): void {
    this.getAllSenders();
  }

  
  onGetSender() {
    this.dbService.getSenders().subscribe((data:any) => {
      this.sendersdb = data;
    });
  }

  getAllSenders(){
    this.dbService.getSenders().subscribe((results:any)=>{
      console.log(results);
      this.sendersdb=results;
    });
  }
}
