import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SimulationRoutingModule, SimulationComponent],
})
export class SimulationModule {}
