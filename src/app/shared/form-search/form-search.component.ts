import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
