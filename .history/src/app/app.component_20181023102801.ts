import { Component } from '@angular/core';
//import '../assets/quagga.min.js';
declare var Quagga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'barcode';

  scan() : void {
     
    var config = {
        reader: "code_128",
        length: 10
    }

    console.log(Quagga)

    //Quagga.decodeSingle(config, function(result) {
    //  console.log(result);
    //});

  }

}

