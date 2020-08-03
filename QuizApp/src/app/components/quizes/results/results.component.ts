import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  quiz: [];
  constructor(private router: Router, public quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.correctAnswerCount++;
  }
  onSubmit() {
    var userAnswers = JSON.parse(localStorage.getItem('user_answers'));
    this.quizService.submitScore(userAnswers).subscribe((data: any) => {
      console.log(data);
    });
  }
}
