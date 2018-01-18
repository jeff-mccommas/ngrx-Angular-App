import { Component, OnInit } from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {Store} from '@ngrx/store';
import {ApplicationState} from '../store/application-state';
import {AlluserData} from '../../../shared/model/to/alluser-data';
import {LoadUserThreadsAction} from '../store/actions';


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadsService: ThreadsService,
  private store:Store<ApplicationState> ) {
    store.subscribe(

  }



  ngOnInit() {

        this.threadsService.loadUserThreads()
          .subscribe(AlluserData=> this.store.dispatch(
            new LoadUserThreadsAction(AlluserData)
            )
          );

  }

}
