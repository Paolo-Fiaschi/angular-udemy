import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './feauters/contact/contact.component';
import { GalleryComponent } from './feauters/gallery/gallery.component';
import { PageNotFoundComponent } from './feauters/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';
import { UsersComponent } from './feauters/users/users.component';
import { UserDetailComponent } from './feauters/user-detail/user-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
