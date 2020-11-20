import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  url: string = 'http://fenw.etsisi.upm.es:10000';

  constructor(private http: HttpClient) {}

  getRecords() {
    return this.http.get<Record[]>(`${this.url}/records`);
  }

}
