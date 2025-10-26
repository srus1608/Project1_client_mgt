import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './meeting-list.html',
  styleUrls: ['./meeting-list.css']
})
export class MeetingList implements OnInit {
  meetings: any[] = [];
  clients: any[] = [];
  newMeeting = { client_id: '', meeting_date: '', topic: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadClients();
    this.loadMeetings();
  }

  loadClients() {
    this.http.get<any[]>('http://localhost:3000/api/clients')
      .subscribe(data => this.clients = data);
  }

  loadMeetings() {
    this.http.get<any[]>('http://localhost:3000/api/meetings')
      .subscribe(data => this.meetings = data);
  }

  addMeeting() {
    if (!this.newMeeting.client_id || !this.newMeeting.meeting_date || !this.newMeeting.topic) {
      alert('Please fill all fields');
      return;
    }

    this.http.post('http://localhost:3000/api/meetings', this.newMeeting)
      .subscribe(() => {
        this.loadMeetings();
        this.newMeeting = { client_id: '', meeting_date: '', topic: '' };
      });
  }
}
