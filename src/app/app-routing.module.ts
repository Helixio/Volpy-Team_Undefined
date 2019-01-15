import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepVibrateComponent }      from './step-vibrate/step-vibrate.component';
import { HomeComponent }      from './home/home.component';
import { CameraBackComponent }      from './camera-back/camera-back.component';
import { CameraFrontComponent }      from './camera-front/camera-front.component';
import { InfoDeviceComponent }      from './info-device/info-device.component';
import { AudioTestComponent } from './audio-test/audio-test.component';
import { FinTestComponent } from './fin-test/fin-test.component';

const routes: Routes = [
  { path: 'vibrate', component: StepVibrateComponent }, 
  { path: 'Home', component: HomeComponent },
  { path: 'audio', component: AudioTestComponent },
  { path: 'finTest', component: FinTestComponent },
  { path: 'infoDevice', component: InfoDeviceComponent }, 
  { path: 'cameraFront', component: CameraFrontComponent }, 
  { path: 'cameraBack', component: CameraBackComponent }, 
  { path: '', redirectTo: '/Home', pathMatch: 'full' },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}