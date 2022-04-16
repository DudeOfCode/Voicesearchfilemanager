import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VategoryPage } from './vategory.page';

const routes: Routes = [
  {
    path: '',
    component: VategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VategoryPageRoutingModule {}
