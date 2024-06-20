import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroup(questions: any) {
        const group: any = {};

        questions.forEach((question: any) => {
            group[question.key] = question.required
                ? new FormControl(
                      question.value || '',
                      Validators.required
                  )
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }

  constructor() { }
}
