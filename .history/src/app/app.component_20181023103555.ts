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

    Quagga.decodeSingle({
        decoder: { readers: ["code_128_reader"] },
        locate: true, 
        src: '../assets/barcode.jpeg' //'data:image/jpg;base64,' + data
    }, function(result) {
          if(result.codeResult) {
            console.log("result", result.codeResult.code);
          } 
          else {
            console.log("not detected");
          }
      });
  }

}

