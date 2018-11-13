import { Component, OnInit } from '@angular/core';
declare var Quagga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  startScanner() : void {

    let settings = {
      decoder: { readers: ["code_128_reader", "code_39_reader"] },
      frequency: 3,
      locate: true,
      inputStream: { 
        type: 'LiveStream', 
        target: document.querySelector('#video-player'),
        constraints: { facingMode : "environment" }
      },
      
      locator: { patchSize: "medium", halfSample: true },
      numOfWorkers: 2
    };

    Quagga.init(settings, function(err) {
      
      if (err) {
          console.log(err);
          return;
      }
      
      Quagga.start();

    });

    Quagga.onProcessed(function(result) {
      var drawingCtx = Quagga.canvas.ctx.overlay,
          drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
          if (result.boxes) {
              drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
              result.boxes.filter(function (box) {
                  return box !== result.box;
              }).forEach(function (box) {
                  Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 3});
              });
          }

          if (result.box) {
              Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 3});
          }

          if (result.codeResult && result.codeResult.code) {
              Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 4});
          }
      }
    });

    Quagga.onDetected(function(result) {
        var code = document.getElementById('barcode-result');
        code.innerText = result.codeResult.code;
    });
    
  }

  stopScanner() : void {
    Quagga.stop();
  }

}

