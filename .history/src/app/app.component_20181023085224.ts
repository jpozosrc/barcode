import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barcode';


  scan() : void {

    Quagga.decodeSingle({
      decoder: {
          readers: ["code_128_reader"] // List of active readers
      },
      locate: true, // try to locate the barcode in the image
      src: '/test/fixtures/code_128/image-001.jpg' // or 'data:image/jpg;base64,' + data
  }, function(result){
      if(result.codeResult) {
          console.log("result", result.codeResult.code);
      } else {
          console.log("not detected");
      }
  });

  }

}

