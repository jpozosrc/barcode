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
  barCodePath = '../assets/';

  scan() : void {

      var config = {
        src: this.barCodePath, //'data:image/jpg;base64,' + data
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

  onFileChanged(event) {
    let fileName = event.srcElement.files[0].name;
    this.barCodePath = `assets/${fileName}`;
    document.getElementById('barcode-img').setAttribute('src', this.barCodePath);
  }

  scanFromStream() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
      .then(function(stream){
        var video = document.querySelector('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) { video.play(); };
        this.video = video;
      })
      .catch(function(err){
        console.log(err)
      })
  }


}