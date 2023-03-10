import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-delete-sender',
  templateUrl: './delete-sender.component.html',
  styleUrls: ['./delete-sender.component.css']
})
export class DeleteSenderComponent implements OnInit {

  constructor(private dbService:DatabaseService) { }
  id = '';
  ngOnInit(): void {
  }

  onDeleteSender(){
    // delete sender
   // let deleteid = this.id;
    this.dbService.deleteSender(this.id).subscribe((data:any)=>{
      // list senders
      console.log(data);
    })
  }

}
