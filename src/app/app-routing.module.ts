import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ImageSearchComponent } from './image-search/image-search.component';


const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'search', component: ImageSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
