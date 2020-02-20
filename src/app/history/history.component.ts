import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history = [];
  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.historyService.getHistory()
    .subscribe( res => {
      if (res.data.length > 0) 
        history = res.data;
    })
  }

}
