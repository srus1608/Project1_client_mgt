import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.html',
  styleUrls: ['./client-list.css']
})
export class ClientList {
  clients = [
    { id: 1, name: 'Anna Architect', project: 'Urban Homes' },
    { id: 2, name: 'John Doe', project: 'Skyline Tower' }
  ];
}
