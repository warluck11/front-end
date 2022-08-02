import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseurl from './constanturl';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  constructor(private http:HttpClient) { }


  sendreq(emailClient:any)
  {

      return this.http.post(`${baseurl}/contact-us/new`,emailClient,{responseType:'text'})
  } 

}
