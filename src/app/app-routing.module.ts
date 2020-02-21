import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'search', component: ImageSearchComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
