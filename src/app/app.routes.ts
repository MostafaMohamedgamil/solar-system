import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'scenario', pathMatch: 'full' },
  {
    path: 'scenario',
    loadChildren: () =>
      import('./pages/scenario/scenario.module').then((m) => m.ScenarioModule),
  },
  {
    path: 'optimization',
    loadChildren: () =>
      import('./pages/optimization/optimization.module').then(
        (m) => m.OptimizationModule
      ),
  },
  {
    path: 'simulation',
    loadChildren: () =>
      import('./pages/simulation/simulation.module').then(
        (m) => m.SimulationModule
      ),
  },
];
