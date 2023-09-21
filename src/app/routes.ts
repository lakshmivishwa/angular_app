import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
// import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'HousingLocationComponent',
      component: HousingLocationComponent,
      title: 'housing location'
    }
  ];
  
  export default routeConfig;