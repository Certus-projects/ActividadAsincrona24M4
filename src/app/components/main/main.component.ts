import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  nombre: string = '';
  deporte: string = '';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name: this.nombre, deporte: this.deporte}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deporte = result;
      console.log(this.deporte);
    });
  }
}
