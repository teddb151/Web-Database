import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {  headers: new HttpHeaders({ "Content-Type": "application/json" }),};
const URL_BACKEND = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  
  getSenders() {
    return this.http.get("/sender");
  }
  getParcels() {
    return this.http.get("/parcel");
  }
  getSender(id: string) {
    let url = "/sender/" + id;
    return this.http.get(url);
  }
  createSender(data:any) {
    return this.http.post("/sender", data, httpOptions);
  }
  updateSender(id:any, data:any) {
    let url = "/sender/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteSender(id:string) {
    let url = "/deleteSender/" + id;
    return this.http.delete(url, httpOptions);
  }
  addsendtoPar(data:object){
    console.log("In DBService");
    let url = "/addSenderToParcel";
    return this.http.put(url, data, httpOptions);
  }

  addFragile(){
    let url = "/parcelFrag";
    return this.http.get(url)
  }
}
