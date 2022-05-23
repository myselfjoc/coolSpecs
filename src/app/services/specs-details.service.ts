import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class SpecsDetailsService {

  constructor(private http: HttpClient) {}

   products(){
    return this.http.get("http://localhost:3000/specs")
   }
}
