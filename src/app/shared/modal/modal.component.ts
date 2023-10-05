import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
