import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AlluserData} from '../../../shared/model/to/alluser-data';
import {Http} from '@angular/http';
import {map} from 'rxjs/operator/map';

@Injectable()
export class ThreadsService {

  constructor(private http:Http) { }
  loadUserThreads(): Observable<AlluserData>{
    return this.http.get('/api/threads')
    .map(res=>res.json());

  }

}
