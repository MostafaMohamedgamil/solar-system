import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenarioRoutingModule } from './scenario-routing.module';
import { ScenarioComponent } from './scenario.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ScenarioRoutingModule,ScenarioComponent],
})
export class ScenarioModule {}
