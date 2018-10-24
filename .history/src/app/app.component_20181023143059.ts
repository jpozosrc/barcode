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

  /*
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
  }*/

  /*
  onFileChanged(event) {
    let fileName = event.srcElement.files[0].name;
    this.barCodePath = `assets/${fileName}`;
    document.getElementById('barcode-img').setAttribute('src', this.barCodePath);
  }*/

  init() : void {

    var config = {
      decoder: { readers: ["code_128_reader"] },
      //locate: true,
      inputStream: { 
        name: 'Live', 
        type: 'LiveStream', 
        constraints: { width: 640, height: 480 },
        target: document.querySelector('#video-player')
      },
      
      //locator: { patchSize: "x-large" },
    };

    Quagga.init(config, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();

        Quagga.onDetected(function(result) {
           console.log('detected')
           console.log(result); 
        })
    });

  }

  startVideo() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
      .then(function(stream){
        var video = document.querySelector('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) { video.play(); };
      })
      .catch(function(err){
        console.log(err)
      })
  }

}