import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss'],
})
export class Auth {}

export const routes: Routes = [
  {
    path: '',
    component: Auth,
  },
];
