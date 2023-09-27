import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { SearchpageComponent } from './page/searchpage/searchpage.component';
import { MoviedetailsComponent } from './page/moviedetails/moviedetails.component';
import { NotfoundComponent } from './page/notfound/notfound.component';

const routes: Routes = [
{path:'',component:HomepageComponent},
{path:'searchpage',component:SearchpageComponent},
{path:'movie/:id',component:MoviedetailsComponent},
{path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
