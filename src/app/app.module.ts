import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { WebCamModule } from 'ack-angular-webcam';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StepVibrateComponent } from './step-vibrate/step-vibrate.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './home/home.component';
import { CameraFrontComponent } from './camera-front/camera-front.component';
import { CameraBackComponent } from './camera-back/camera-back.component';
import { InfoDeviceComponent } from './info-device/info-device.component';
import { AudioTestComponent } from './audio-test/audio-test.component';
import { FinTestComponent } from './fin-test/fin-test.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StepVibrateComponent,
    HomeComponent,
    CameraFrontComponent,
    CameraBackComponent,
    InfoDeviceComponent,
    AudioTestComponent,
    FinTestComponent
  ],
  imports: [
    BrowserModule,
    WebCamModule,
    NgxSpinnerModule,
    HttpModule,
    DeviceDetectorModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
