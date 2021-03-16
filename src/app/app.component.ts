import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapa-efas';

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
    this.swUpdate.available.subscribe(event => {
      let snackBarRef = this.snackBar.open('Esta disponible una nueva actualización', 'Actualizar');
      snackBarRef.onAction().subscribe(() => {
        window.location.reload()
      })
    })
  }

  ngAfterViewInit(): void {
    SplashScreen.hide({
      fadeOutDuration: 500
    });
  }

}
