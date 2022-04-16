import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VategoryPageRoutingModule } from './vategory-routing.module';

import { VategoryPage } from './vategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VategoryPageRoutingModule
  ],
  declarations: [VategoryPage]
})
export class VategoryPageModule {}
