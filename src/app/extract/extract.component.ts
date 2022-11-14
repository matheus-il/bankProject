import { Component, Input, OnInit } from '@angular/core';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  @Input() transfers: any[];

  constructor(private service: TransferService) {}

  ngOnInit(): void {
    this.service.allTransfers().subscribe((allTransfers) => (this.transfers = allTransfers));
  }
}
