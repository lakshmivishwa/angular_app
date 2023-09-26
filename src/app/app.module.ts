import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

import { RouteExampleComponent } from './route-example/route-example.component';
import { FilterComponent } from './filter/filter.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FormComponent, RouteExampleComponent, FilterComponent, SearchbarComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
