import { Component, OnInit } from '@angular/core';
import { Record } from "../../models/record";
import { RecordService } from "../../services/record.service";
import { CacheService } from "../../services/cache.service";
import {SnackbarService} from "../../services/snackbar.service";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  recordsList: Record[] = [];
  ownRecordsList: Record[] = [];
  username: string;
  jwt: string;
  isLogged: boolean;

  constructor(
    private _cache: CacheService,
    private recordService: RecordService,
    private _snack: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.recordService.getRecords()
      .subscribe(
        records => this.recordsList = records,
        err => console.error(err),
      );
    this._cache.getItem("jwt").subscribe(
      data => {
        if(data) {
          this.isLogged = !!data;
          this.jwt = `${data}`;
          this.ownRecords();
        }
      },
    );
    this._cache.getItem("username").subscribe(
      data => this.username = `${data}`,
    );
  }

  ownRecords() {
    this.recordService.getRecordsByUser(this.username, this.jwt)
      .subscribe(
        records => this.ownRecordsList = records,
        err => console.error(err),
      );
  }

  delete() {
    this.recordService.deleteRecords(this.jwt).subscribe(
      () => {
        this._snack.openSnackBar("Elementos borrados", "OK");
        this.ownRecordsList = [];
      },
      () => this._snack.openSnackBar("Tu sesión ha caducado", "OK"),
    )
  }
  displayedColumns: string[] = [
    'username',
    'punctuation',
    'cards',
    'disposedTime',
    'recordDate',
  ];
}
