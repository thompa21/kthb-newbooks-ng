import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NewBooksComponent } from '../newbooks/newbooks.component';

const routes: Routes = [
    {
        path: 'newbooks',
        component: NewBooksComponent
    },
    {
        path: '**',
        component: NewBooksComponent
    }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class RoutingModule { }
