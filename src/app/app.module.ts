import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Replace with the correct path
import { AboutComponent } from './about/about.component'; // Replace with the correct path
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: 'path1', component: HomeComponent }, // Replace with your actual component
  { path: 'reactiv-form', component: FormComponent }, // Replace with your actual component
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
