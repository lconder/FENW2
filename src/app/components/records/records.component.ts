import { Component, OnInit } from '@angular/core';
import { Record } from "../../models/record";
import { RecordService } from "../../services/record.service";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  recordsList: Record[] = [];

  constructor(public recordService: RecordService) {}

  ngOnInit(): void {
    this.recordService.getRecords()
      .subscribe(
        records => this.recordsList = records,
        err => console.error(err),
      );
  }

  displayedColumns: string[] = [
    'username',
    'punctuation',
    'cards',
    'disposedTime',
    'recordDate',
  ];
}
