import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-add-sender',
  templateUrl: './add-sender.component.html',
  styleUrls: ['./add-sender.component.css']
})
export class AddSenderComponent implements OnInit {

  senderName = '';
  address = '';
  id = ''
  constructor(private dbService:DatabaseService) { }

  ngOnInit(): void {
  }

  onSaveSender() {
    let obj = { name: this.senderName,  address: this.address, id: this.id};
    this.dbService.createSender(obj).subscribe(result => {
      console.log(result);
    });
  }
}
