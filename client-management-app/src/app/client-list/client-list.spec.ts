import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './client-list.html',
  styleUrls: ['./client-list.css']
})
export class ClientList implements OnInit {
  clients: any[] = [];
  newClient = { client_name: '', project_name: '', contact_email: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.http.get<any[]>('http://localhost:3000/api/clients')
      .subscribe(data => this.clients = data);
  }

  addClient() {
    this.http.post('http://localhost:3000/api/clients', this.newClient)
      .subscribe(() => {
        this.loadClients();
        this.newClient = { client_name: '', project_name: '', contact_email: '' };
      });
  }
}
