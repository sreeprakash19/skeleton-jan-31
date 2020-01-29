import { Renderer2 , AfterViewInit, Component, ElementRef, NgZone, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import * as ml5 from 'ml5';
@Component({
  selector: 'app-feature-start',
  templateUrl: './feature-start.component.html',
  styleUrls: ['./feature-start.component.css']
})
  export class FeatureStartComponent implements OnInit {


  constructor(private zone: NgZone, private sanitizer: DomSanitizer, private renderer: Renderer2) { }
  thumbnail: any;
  thumbnail1: any;
  thumbnail2: any;
  public mobileNetFeatureExtractor;
  video;
  public featureClassifier;
  canvasElement: any;
  context: any;
  videostreamRef: any;
  videoElement: HTMLVideoElement;
  public captures: Array<any>;
  public videoEl: HTMLVideoElement;
  public canvas1: any;

  rewind(){}
  foeward(){}
  ngAfterViewInit() {
    console.log(webkitURL);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.videostreamRef = stream;
      //  this.video.nativeElement.play();
      });
    }

  }

 ngOnInit(): void {
    this.mobileNetFeatureExtractor = ml5.featureExtractor('MobileNet', () => {
      this.featureClassifier = this.mobileNetFeatureExtractor.classification(this.video.nativeElement, () => {
        console.log('Classifer Ready');
      });
    });
    this.loadimages().then(_ => {
      console.log('loaded');
    });
   }
 async loadimages() {
 
 this.thumbnail = await this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/a-/AAuE7mDcM-XfiG-OgprYqulFoAgKDCAvnWSDiiLqiiXx');
 
 this.thumbnail1 = await this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/-vxVFUq1yJ0U/XZQoB5ogLFI/AAAAAAAAADY/SL4-7Obb8XsXPnDIboXRS4VRGC8dAS-LQCEwYBhgL/w140-h140-p/facebook_1569229435636.jpg');

 this.thumbnail2 = await this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/-mHhFtrFqkpg/Xi642uM7knI/AAAAAAAAAkQ/-ZrLcQ_S1HASVSnDt0Ay-SLnlQQTMsunwCEwYBhgL/w140-h139-p/DSC00902.JPG');

  }

}
