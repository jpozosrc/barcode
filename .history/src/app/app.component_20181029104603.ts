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

  enumerateDevices();
  //viewSupportedConstraints();

  
  navigator.mediaDevices.getUserMedia({ video: { deviceId: 'camera2 1, facing front' } })
    .then(function(stream) {
      video = document.getElementById('video-player') as HTMLVideoElement;
      video.srcObject = stream;
      video.onloadedmetadata = function(e) { video.play(); };
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

        let deviceList = document.getElementById("devices");
        let elem = document.createElement("li");
        elem.innerHTML = "<code>" + device.kind + ': ' + device.label + ' ' + device.deviceId + "</code>";
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