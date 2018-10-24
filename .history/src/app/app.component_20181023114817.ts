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
        src: '../assets/barcode1.jpg', //'data:image/jpg;base64,' + data
        decoder: { readers: ["code_128_reader"] },
        locate: true,
        locator: { patchSize: "x-large" },
      };

      Quagga.decodeSingle(config, function(result) {
      
          if(result.codeResult) {
            alert("The code is " + result.codeResult.code);
            console.log("result", result.codeResult.code);
          } 
          else {
            console.log("not detected");
          }
      });
  }

}