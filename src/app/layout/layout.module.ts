import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { YoungAdultHomeComponent } from './youngAdult/young-adult-home/young-adult-home.component';
import { AdultHomeComponent } from './adult/adult-home/adult-home.component';
import { ChildrenHomeComponent } from './children/children-home/children-home.component';

@NgModule({
  declarations: [
    YoungAdultHomeComponent,
    AdultHomeComponent,
    ChildrenHomeComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
