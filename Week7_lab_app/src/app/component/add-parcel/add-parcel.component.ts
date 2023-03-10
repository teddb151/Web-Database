import { Component, OnInit } from '@angular/core';
import { DatabaseService }  from 'src/app/database.service';
@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {
  senderName = '';
  address = '';
  weight = '';
  fragile = '';

  constructor(private dbService:DatabaseService) { }

  ngOnInit(): void {
  }

  addParcelToSender(){
    //create and get the sender object then link the data obbject to the parcel id by the same id
    //go through all the different senders like you did in the previous one and loop through them until you get the one you wish for
    //do i create another array to take in the new database or declare get the fucntions to get wehre to get it

   // let rightName = this.findSender(this.senderName);
   console.log("this is working");
    let obj = {
      senderId: this.senderName,
      parcel:{
              address: this.address,
              weight: this.weight,
              fragile: this.fragile
            } 
    }
    //this.onGetParcels();
    console.log(obj);
    this.dbService.addsendtoPar(obj).subscribe((data:any) => {
      console.log(data);
    });
  }

}

