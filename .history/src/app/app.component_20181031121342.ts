import { Component } from '@angular/core';
declare var Quagga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  barcode : string = '';
 
  startScanner() : void {

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

        document.getElementById('barcode-result').innerText = 'Code: ' +  result.codeResult.code;
        var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
          if (result.boxes) {
              drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
              result.boxes.filter(function (box) {
                  return box !== result.box;
              }).forEach(function (box) {
                  Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 4});
              });
          }

          if (result.box) {
              Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 4});
          }

          if (result.codeResult && result.codeResult.code) {
              Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 6});
          }
        }

      });

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

  //enumerateDevices();
  //viewSupportedConstraints();

  var constraints = { 
    audio: false,
    video: { facingMode: "environment" }
  };
  
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      video = document.getElementById('video-player') as HTMLVideoElement;
      video.srcObject = stream;
      //video.onloadedmetadata = function(e) { video.play(); };
    })
    .catch(function(err){
      alert(err);
      console.log(err)
    })
   
}

function stopVideo() {
  Quagga.stop();

  if(video.srcObject) {
    var track = video.srcObject.getTracks()[0];
    track.stop();
  }
  
  video.srcObject = null;
  var canvas = document.getElementById('scanner-canvas') as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}