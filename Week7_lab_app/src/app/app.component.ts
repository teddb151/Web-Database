import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./database.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  fragileDb:any[] = [];
  senderName = ''
  address = '';
  weight = 0;
  fragile = '';
  sender = ''
  sectionId = 1;
  id = ''

  constructor(private dbService: DatabaseService){}

  ngOnInit(): void {
   // this.getAllSenders();
  //  this.onGetParcels();
    //this.getParcelsByFrag();
  //  this.getAllFragile();
    
  }
  getParcelsByFrag() {
    this.dbService.addFragile().subscribe((data:any)=>{
      this.fragileDb = data;
    })
  }
  // getAllFragile(){
  //   let tempDB = [];
  //   this.dbService.getParcels().subscribe((data:any) => {
  //     tempDB = data;
  //   });
  //   for(let i = 0; i< this.parcels.length; i++){
  //     if(this.parcels[i].fragile = "true"){
  //       this.fragileDb[i].add(this.parcels[i]);
  //     }
  //   }
  // }


  



  // changeSectionId(id:number){
  //   this.sectionId=id;
  // }


// findSender(sendID:string){
//   for(let i = 0; i< this.sendersdb.length; i++){
//     if(this.sendersdb[i]._id = sendID){
//       return this.sendersdb[i];
//     }
//   }
// }
}
