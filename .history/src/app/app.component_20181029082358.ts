import { Component } from '@angular/core';
declare var Quagga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'barcode';
  
  initScanner() : void {

    var config = {
      decoder: { readers: ["code_128_reader"] },
      locate: true,
      inputStream: { 
        name: 'Live', 
        type: 'LiveStream', 
        target: document.querySelector('#video-player')
      },
      
      locator: { patchSize: "x-large" },
    };

    Quagga.init(config, function(err) {

        startVideo();

        if (err) {
            console.log(err);
            return
        }
        
        Quagga.start();
        console.log("Scanning engine ready.");

        Quagga.onDetected(function(result) {
          //console.log(result) 
          video.pause();
          alert(result.codeResult.code);
          stopVideo();
          Quagga.stop();
        })
    });
  }

  stopScanner() : void {
    stopVideo();
  }

}

var video = null;

function startVideo() {

    //navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    navigator.getUserMedia(
      { audio: false, video: true }, 
      function(stream) { video = document.querySelector('video'); video.srcObject = stream; video.onloadedmetadata = function(e) { video.play(); }; }, 
      function(err) { console.log(err) }
      )

/*
      .then(function(stream){
      video = document.querySelector('video');
      video.srcObject = stream;
      video.onloadedmetadata = function(e) { video.play(); };
    })
    .catch(function(err){
      console.log(err)
    }) */
}

function stopVideo() {

  if(video.srcObject) {
    var track = video.srcObject.getTracks()[0];
    track.stop();
  }
  
  video.srcObject = null;
}