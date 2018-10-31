import { Component, OnInit } from '@angular/core';
declare var Quagga: any;
var barcodeResult = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {

  title = 'barcode';
  selectedDevice : string = '';

  ngOnInit() {
  }
  
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
          video.pause();
          barcodeResult = result.codeResult.code;
          document.getElementById('barcode-result').nodeValue = barcodeResult;
          alert(barcodeResult);
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

  //enumerateDevices();
  //viewSupportedConstraints();

  var constraints = { 
    audio: false,
    video: { facingMode: "user" }
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

  if(video.srcObject) {
    var track = video.srcObject.getTracks()[0];
    track.stop();
  }
  
  video.srcObject = null;
}

/* Debugging helper functions */

function enumerateDevices() {
  navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {

      devices.forEach(function(device) {
        let deviceList = document.getElementById("device-list");
        let elem = document.createElement("option");
        elem.innerHTML = '<option value="' + device.deviceId + '">' + device.deviceId + '</option>';
        deviceList.appendChild(elem);
        
      });
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    });
}

function viewSupportedConstraints() {
  let constraintList = document.getElementById("constraintlist");
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  
  for (let constraint in supportedConstraints) {
    if (supportedConstraints.hasOwnProperty(constraint)) {
      let elem = document.createElement("li");
      
      elem.innerHTML = "<code>" + constraint + "</code>";
      constraintList.appendChild(elem);
    }
  }
}