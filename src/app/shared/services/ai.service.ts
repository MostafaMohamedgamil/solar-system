import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AiService {
  constructor(private http: HttpClient) {}

  generateAiResponse(text: string) {
    const url = 'http://54.38.191.180:8000/api/generate-ai-response';
    return this.http.post(url, { text });
  }
}
