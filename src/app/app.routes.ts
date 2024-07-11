import { Routes } from '@angular/router';
import { ArenaComponent } from './components/arena/arena.component';


export const routes: Routes = [
    {path: '', component: ArenaComponent, pathMatch: 'full'},
];
