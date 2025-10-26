import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { Navbar } from './navbar/navbar';
import { ClientList } from './client-list/client-list';
import { MeetingList } from './meeting-list/meeting-list';

// ✅ Define routes here
const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientList },
  { path: 'meetings', component: MeetingList }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}

// ✅ Bootstrap the app with routing
bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
