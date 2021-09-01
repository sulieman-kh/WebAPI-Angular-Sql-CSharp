import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:62319/api";

  constructor(private http:HttpClient) { }

  getCounList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/country');
  }

  addCountry(val:any){
    return this.http.post(this.APIUrl+'/Country', val)
  }

  updateCountry(val:any){
    return this.http.put(this.APIUrl+'/Country', val)
  }

  deleteCountry(val:any){
    return this.http.delete(this.APIUrl+'/Country/'+val)
  }


  getInvList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/invited');
  }

  addInvited(val:any){
    return this.http.post(this.APIUrl+'/Invited', val)
  }

  updateInvited(val:any){
    return this.http.put(this.APIUrl+'/Invited', val)
  }

  deleteInvited(val:any){
    return this.http.delete(this.APIUrl+'/Invited/'+val)
  }

  getAllCountriesNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Invited/GetAllCountriesNames');
  }
}
