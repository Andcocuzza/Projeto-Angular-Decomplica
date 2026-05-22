import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-courses',

  standalone: true,

  imports: [],

  templateUrl: './courses.html',

  styleUrls: ['./courses.scss'],
})

export class Courses {}



// Rotas do componente
export const routes: Routes = [
  {
    path: '',
    component: Courses
  }
];