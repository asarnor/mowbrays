import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignatureComponent implements OnInit, OnDestroy {
  @ViewChild(SignaturePad, { static: false })
  public signaturePad: SignaturePad;

  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 700,
    canvasHeight: 300,
  };

  constructor() {}

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  clearButton() {
    this.signaturePad.clear();
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    } else {
      // no geolocation access
    }
  }

  private displayLocationInfo(position: any) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(`longitude: ${lng} | latitude: ${lat}`);
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}
