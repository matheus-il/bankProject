import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  account: number;

  constructor(private service: TransferService, private router: Router) {}

  transfer() {
    console.log('Solicitada nova transferência');
    const valueToTransfer = { value: this.value, account: this.account };

    this.service.addTransfer(valueToTransfer).subscribe(
      (result) => {
        this.cleanValueAndAccount();
        this.router.navigateByUrl('extract');
      },
      (error) => console.error(error)
    );
  }

  cleanValueAndAccount() {
    this.value = 0;
    this.account = 0;
  }
}
