import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history = ['asdasd', 'asdasd','asdasd', 'asdasd', 'asdasd', 'asdasd'];
  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.historyService.getHistory()
    .subscribe((res: any) => {
      if (res.length > 0) {
        this.history = res;
      }
    })
  }

}
