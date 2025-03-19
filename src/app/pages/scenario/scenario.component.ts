import { Component } from '@angular/core';
import { AiService } from '../../shared/services/ai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scenario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.scss',
})
export class ScenarioComponent {
  scenarioText: string = '';
  aiResponse: string = '';
  constructor(private ai: AiService) {}
  callAi(){
    this.ai.generateAiResponse(this.scenarioText).subscribe({
      next: (response:any) => {
        // this.aiResponse = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
        this.aiResponse = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
        this.scenarioText = '';
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
    })
  }
}
