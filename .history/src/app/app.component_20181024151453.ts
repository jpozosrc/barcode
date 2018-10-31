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

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('UserMedia not supported')
    return;
  }

  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(function(stream){
      alert('1');
      video = document.getElementById('video-player') as HTMLVideoElement;
      alert('2');
      video.srcObject = stream;
      alert('3');
      video.onloadedmetadata = function(e) { 
        alert('4');
        video.play();
        alert('5'); 
      };
    })
    .catch(function(err){
      alert('6');
      alert(err);
      console.log(err)
    })
}

function stopVideo() {

  if(video.srcObject) {
    var track = video.srcObject.getTracks()[0];
    track.stop();
  }
  
  video.srcObject = null;
}