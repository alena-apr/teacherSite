import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrammarService } from '../../../services/grammar/grammar.service';
import {
  IExercise,
  IFormatedAnswer,
  IRawAnswer,
} from '../../../models/exercise';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grammar-item',
  templateUrl: './grammar-item.component.html',
  styleUrl: './grammar-item.component.scss',
})
export class GrammarItemComponent {
  exercise: IExercise;
  idNumber: number[];

  exerciseForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private grammarService: GrammarService
  ) {}

  ngOnInit() {
    // params
    const routerIdParam = this.route.snapshot.paramMap.get('id') as string; // for route
    const querryIdParam = this.route.snapshot.queryParamMap.get('id') as string; // for queryParams
    const paramValueId = routerIdParam || querryIdParam;

    if (paramValueId) {
      // this.grammarService
      //   .getGrammarByIdWOAnswers(routerIdParam)
      //   .subscribe((data) => {
      //     console.log('OneEx', data);
      //     this.exercise = data;

      //     console.log(this.exercise.text);
      //     this.idNumber = data.text.map((el) => el.id);
      //     // console.log("idN", idN)
      //     this.exerciseForm = this.createFormGroup(this.idNumber);
      // });
      this.getExercise(paramValueId)
    }
  }

  getExercise(id: string) {
    this.grammarService
      .getGrammarByIdWOAnswers(id)
      .subscribe((data) => {
        console.log('OneEx', data);
        this.exercise = data;

        console.log(this.exercise.text);
        this.idNumber = data.text.map((el) => el.id);
        // console.log("idN", idN)
        this.exerciseForm = this.createFormGroup(this.idNumber);
      });
  }

  getAnswers(id: string) {}

  createFormGroup(questionsNumber: number[]): FormGroup {
    let group: any = {};
    questionsNumber.forEach((question: number, index: number) => {
      group[question] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  // checkAnswers(formatedAnswers: IRawAnswer[]) {
  //   console.log('HERE IS THE CHECK ANSWERS');
  //   const checkedAnswers = formatedAnswers.map((formatedAnswer) => {
  //     let check = this.realAnswers.find(
  //       (answer) => answer.id === formatedAnswer.id
  //     );
  //     if (
  //       formatedAnswer.answer?.toLowerCase() !== check?.answer.toLowerCase()
  //     ) {
  //       return { ...formatedAnswer, isCorrect: false };
  //     }
  //     return { ...formatedAnswer, isCorrect: true };
  //   });
  //   return checkedAnswers;
  // }

  onSubmit() {
    const rawAnswer = this.exerciseForm.getRawValue();
    console.log('RAW answer', rawAnswer);
    const formatedAnswers = [];

    for (const [key, value] of Object.entries(rawAnswer)) {
      console.log(`${key}, ${value}`);
      formatedAnswers.push({
        id: Number(key),
        answer: value as string,
      });
    }

    console.log('formatedAnswer', formatedAnswers);

    // const answ: IFormatedAnswer[] = this.checkAnswers(formatedAnswers);
    // console.log('answ', answ);

    // const answObj = {
    //   answ,
    // };
  }
}
