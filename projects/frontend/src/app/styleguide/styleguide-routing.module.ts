import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: IconsComponent,
        data: {
          title: 'Icons',
          urls: [{ title: 'Icons', url: '/' }, { title: 'Icons' }],
        },
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleguideRoutingModule { }
