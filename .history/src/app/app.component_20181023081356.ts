import { Component } from '@angular/core';
import { Quagga } from 'quagga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barcode';


  scan() : void {

    console.log(Quagga)
    Quagga.decodeSingle({
      decoder: {
          readers: ["code_128_reader"] // List of active readers
      },
      locate: true, // try to locate the barcode in the image
      // You can set the path to the image in your server
      // or using it's base64 data URI representation data:image/jpg;base64, + data
      src: 'assets/barcode.png'
  }, function(result){
      if(result.codeResult) {
          console.log("result", result.codeResult.code);
      } else {
          console.log("not detected");
      }
  });

  }

}
