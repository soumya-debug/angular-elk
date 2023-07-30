import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private apiUrl = 'http://localhost:5000'; // Logstash url

  constructor(private http: HttpClient) {}

  logMessage(message: string) {
    const logEndpoint = `${this.apiUrl}`;

    const logPayload = {
      message: message,
    };

    // Sending the log message via a POST request
    this.http.post(logEndpoint, logPayload).subscribe(
      (response) => {
        console.log('Log message sent successfully:', response);
      },
      (error) => {
        console.log('Log message:', error);
      }
    );
  }
}
