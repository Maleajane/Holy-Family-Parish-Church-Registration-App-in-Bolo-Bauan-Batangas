import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MftsPageRoutingModule } from './mfts-routing.module';

import { MftsPage } from './mfts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MftsPageRoutingModule
  ],
  declarations: [MftsPage]
})
export class MftsPageModule {}
