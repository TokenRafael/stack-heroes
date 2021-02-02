import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

constructor(private snackBar: MatSnackBar) { }

private show(msg: string, action: string): void {
  this.snackBar.open(msg, action,
    {
      duration: 3000,
      horizontalPosition: 'left'
    });
}

notify(msg: string): void {
  this.show('ℹ ' + msg, 'Ok');
}

warn(msg: string): void {
  this.show('⚠ ' + msg, 'Understood');
}

success(msg: string): void {
  this.show('🎉 ' + msg, 'Yay!');
}

error(msg: string): void {
  this.show('⛔ ' + msg, 'Oops...');
}

}
