import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferList: any[];
  private url = 'http://localhost:3000/transfers/';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  addTransfer(transfer: Transfer) {
    this.addDate(transfer);

    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  allTransfers() {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  private addDate(transfer: Transfer) {
    transfer.date = new Date();
  }
}
