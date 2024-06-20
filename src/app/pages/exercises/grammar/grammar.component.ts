import { Component } from '@angular/core';
import { exercise1 } from '../../../../assets/mocks/grammar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionControlService } from '../../../services/question-control/question-control.service';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss',
})
export class GrammarComponent {
  grammarExs: any;
  phrases: any;
  idNumber: any;

  exForm: FormGroup;

  payLoad = '';

  private realAnswers: any;

  ngOnInit(): any {
    console.log('HERE IS THE GRAMMAR');

    this.getEx();

    this.exForm = this.createFormGroup(this.idNumber);
  }

  getEx(): void {
    this.grammarExs = exercise1;

    const exText = exercise1.map((el) => el.text);
    console.log(exText);

    const exTextFlat = exText.flat();
    console.log(exTextFlat);

    this.phrases = exTextFlat;

    const exPhrase = exTextFlat.map((el) => el.transformedText);
    console.log(exPhrase);

    const exPrasesText = exText.map((el) => el.map((el) => el.text));
    const exPrasesId = exText.map((el) => el.map((el) => el.id));
    const flatText = exPrasesText.flat();
    const flatId = exPrasesId.flat();
    console.log(flatText);
    console.log(flatId);
    console.log(flatId.length);
    const phrasesToGo = flatText.map((el) => el.split('***'));
    console.log(phrasesToGo);
    console.log(phrasesToGo.length);
    // this.phrases = phrasesToGo
    this.idNumber = flatId;


    //ANSWERS
    const exAnswers = exercise1.map((el) => el.realAnswer.flat())
    console.log(exAnswers);
    const exAnswersFlat = exAnswers.flat()
    console.log(exAnswersFlat)
  }

  createFormGroup(questionsNumber: number[]): FormGroup {
    let group: any = {};
    questionsNumber.forEach((question: number, index: number) => {
      group[question] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  transformText() {}

  onSubmit() {
    // console.log(JSON.stringify(this.exForm.getRawValue()))

    // this.newArray.push()
    console.log('ON SUBMIT');

    this.payLoad = JSON.stringify(this.exForm.getRawValue());
    console.log(this.payLoad);


    const rawAnswer = this.exForm.getRawValue();
    console.log(rawAnswer)
    const formatedAnswers = []

    for (const [key, value] of Object.entries(rawAnswer)) {
      console.log(`${key}, ${value}`)
      formatedAnswers.push({
        id: Number(key), 
        answer: value
      })
    }

    console.log(formatedAnswers)

    // this.checkAnswers(formatedAnswers)
  }

  // checkAnswers(formatedAnswers: any) {
  //   formatedAnswers.map((formatedAnswer: { id: number; answer: string}) => {
  //     let check = this.realAnswers.find((answer: { id: number; }) => answer.id === formatedAnswer.id);
  //     return {
  //       formatedAnswer.answer == check.answer
  //     }
  //   })
  // }
}
