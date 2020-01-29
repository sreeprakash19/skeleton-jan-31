import { Renderer2 , AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import * as ml5 from 'ml5';


@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.css']
})
export class FamilyMemberComponent implements OnInit, AfterViewInit {

  title = 'facerecog';
  @ViewChild('video', { static: true }) video: ElementRef;
  @ViewChild('myimage', { static: false }) imagefirst: ElementRef;
  @ViewChild('rotimage', { static: false }) imagefirst1: ElementRef;
  @ViewChild('myimagenext', { static: false }) imagesecond: ElementRef;
  @ViewChild('rotimagenext', { static: false }) imagesecond1: ElementRef;
  @ViewChild('myimagechoose', { static: false }) imagechoose: ElementRef;
  public mobileNetFeatureExtractor;
  public featureClassifier;
  public labelresult = 'Wait ...';
 
  @ViewChild('myimage1', { static: false }) imageother1: ElementRef;
  @ViewChild('myimage2', { static: false }) imageother2: ElementRef;
  @ViewChild('myimage3', { static: false }) imageother3: ElementRef;
  @ViewChild('myimage4', { static: false }) imageother4: ElementRef;

  @ViewChild('canvas', { static: false }) public canvas: ElementRef;
  @ViewChild('canvas1', { static: false }) public canvas11: ElementRef;
  @ViewChild('canvas2', { static: false }) public canvas21: ElementRef;
  @ViewChild('canvas3', { static: false }) public canvas31: ElementRef;
  @ViewChild('canvas4', { static: false }) public canvas41: ElementRef;

  canvasElement: any;
  context: any;
  videostreamRef: any;
  videoElement: HTMLVideoElement;
  public captures: Array<any>;
  public videoEl: HTMLVideoElement;
  public canvas1: any;

  public imagePath;
  imgURL: any;
  imgURLnext: any;
  imgURL1: any;
  imgURLnext1: any;
  imgURLchoose: any;
  public message: string;
  public newLabelnext;
  
  thumbnail: any;
  thumbnail1: any;
  thumbnail2: any;

  constructor(private zone: NgZone, private sanitizer: DomSanitizer, private renderer: Renderer2) {
    this.captures = [];


  }
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
  async loadimages() {
 // tslint:disable-next-line: max-line-length
 this.thumbnail = await this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/a-/AAuE7mDcM-XfiG-OgprYqulFoAgKDCAvnWSDiiLqiiXx');
 // tslint:disable-next-line: max-line-length
 this.thumbnail1 = await this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/-vxVFUq1yJ0U/XZQoB5ogLFI/AAAAAAAAADY/SL4-7Obb8XsXPnDIboXRS4VRGC8dAS-LQCEwYBhgL/w140-h140-p/facebook_1569229435636.jpg');

 this.thumbnail2 = await this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/-mHhFtrFqkpg/Xi642uM7knI/AAAAAAAAAkQ/-ZrLcQ_S1HASVSnDt0Ay-SLnlQQTMsunwCEwYBhgL/w140-h139-p/DSC00902.JPG');

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
   
  addImage() {
    this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 320, 240);
    this.featureClassifier.addImage(this.canvas.nativeElement.toDataURL('image/png'), 'manoj');
    // Retrain the network
    this.featureClassifier.train((lossValue) => {
      console.log('Loss is', lossValue);
    });
/*
    // Get a prediction for that image
    this.featureClassifier.classify(this.canvas.nativeElement.toDataURL('image/png'), (_err, result) => {
      console.log(result); // Should output 'dog'
    });
    console.log('newlabel', this.newLabel);
    //this.capture();*/
  }
  async train() {

    console.log('myimage', this.imagefirst.nativeElement);
    console.log('myimagenext', this.imagesecond.nativeElement);
    // console.log('myimagechoose', this.imagechoose.nativeElement);
    console.log( 'class', this.featureClassifier);
    await this.featureClassifier.train(this.whileTraining);

  }
  forward(){}
  rewind(){}
  async capture() {
    const classresult = await this.featureClassifier.classify(this.video.nativeElement);
    this.labelresult = classresult[0].label;
    setTimeout(() => {    // <<<---    using ()=> syntax
      this.capture();
 }, 1000);
  }
  whileTraining(loss) {
    if (loss === null) {
    console.log('Taining Complete');

    } else {
    console.log(loss);
    }
    }

    gotResult(error, result) {
     if (error) {
      console.error(error);
     } else {
      return result[0].label;
      // this.labelresult = result[0].label;
      }
    }
    takepic() {
      this.canvas.nativeElement.style.display = 'block';
      this.canvasElement = this.canvas.nativeElement;
      this.context = this.canvasElement.getContext('2d');

      this.videostreamRef.getTracks().map((val) => {
        this.context.drawImage( this.video.nativeElement, 0, 0, 200, 200);
        // const fullQuality = this.context.toDataURL('image/jpeg', 1.0);
        // val.stop();
      });
    }
    FirstImg(){
      this.FirstImg1().then(_ => {
        //this.imgURLnext1 =  this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/-vxVFUq1yJ0U/XZQoB5ogLFI/AAAAAAAAADY/SL4-7Obb8XsXPnDIboXRS4VRGC8dAS-LQCEwYBhgL/w140-h140-p/facebook_1569229435636.jpg');
        console.log('loaded');
      });
    }

    async FirstImg1() {

      // this.imgURL = 'https://lh3.googleusercontent.com/a-/AAuE7mDcM-XfiG-OgprYqulFoAgKDCAvnWSDiiLqiiXx';
      this.imgURL1 = await this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/a-/AAuE7mDcM-XfiG-OgprYqulFoAgKDCAvnWSDiiLqiiXx');
      // console.log( this.imgURL);
      
  
    }

    TurnImg() {

    }
    secondImg(){
      this.secondImg1().then(some => {
        this.imgURLnext1 =  some;
        console.log('loaded');
      });
    }
    async secondImg1() {
      return await this.sanitizer.bypassSecurityTrustUrl('https://lh3.googleusercontent.com/-vxVFUq1yJ0U/XZQoB5ogLFI/AAAAAAAAADY/SL4-7Obb8XsXPnDIboXRS4VRGC8dAS-LQCEwYBhgL/w140-h140-p/facebook_1569229435636.jpg');
      //console.log(this.imgURLnext1);
    }
    AddCanvas2(){
      this.canvas21.nativeElement.getContext('2d').drawImage( this.imageother2.nativeElement, 0, 0, 320, 240);
    }
    AddCanvas4(){
      this.canvas41.nativeElement.getContext('2d').drawImage( this.imageother4.nativeElement, 0, 0, 191, 256);
    }
}