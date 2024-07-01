import { Component, ElementRef, ViewChild } from '@angular/core';
import { IUser } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { AnswerGrammarService } from '../../../services/answer-grammar/answer-grammar.service';
import { IAnswerForDb } from '../../../models/exercise';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.scss',
})
export class ShelfComponent {
  student: IUser;
  statistics: any;
  data: any;
  options: any;

  // testData = {
  //           labels: ['A','B','C'],
  //           datasets: [
  //               {
  //                   data: [300, 50, 100],
  //                   backgroundColor: [
  //                       "#FF6384",
  //                       "#36A2EB",
  //                       "#FFCE56"
  //                   ],
  //                   hoverBackgroundColor: [
  //                       "#FF6384",
  //                       "#36A2EB",
  //                       "#FFCE56"
  //                   ]
  //               }
  //           ]
  //       };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private answerGrammarService: AnswerGrammarService
  ) {}

  // @ViewChild('canvas', {static: true}) myCanvas: ElementRef;

  ngOnInit() {
    const user = this.userService.getUser();
    this.student = user;
    const userId = user._id;

    if (userId !== undefined) {
      this.getStudentAnswers(userId);
    }

    // const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    // const context = canvas.getContext('2d');
    // if (context) {
    //   this.#drowPie(context)
    // }
  }
  // #drowPie(context: CanvasRenderingContext2D) {
  //   context.beginPath()
  //   context.arc(100, 100, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 90)
  //   context.fill()
  //   }

  getStudentAnswers(userId: string) {
    this.answerGrammarService
      .getAnswerForAdminByUser(userId)
      .subscribe((data) => {
        if (Array.isArray(data)) {
          const exerciseIdSet = this.makeExercisesIdSet(data);
          const exersisesById = this.getExercisesById(data, exerciseIdSet);
          const statistics = exersisesById.map((exersiseByIdArray) => {
            return this.getStatistics(exersiseByIdArray);
          });
          this.statistics = statistics;
          console.log('STATISTICS', statistics);
        }
      });
  }

  makeExercisesIdSet(allUserAnswers: IAnswerForDb[]) {
    const exerciseIdSet = new Set<string>();
    allUserAnswers.forEach((el) => exerciseIdSet.add(el.exerciseId));
    return exerciseIdSet;
  }

  getExercisesById(allExercises: IAnswerForDb[], idSet: Set<string>) {
    const idArray = Array.from(idSet);
    const exercisesById = idArray.map((el) => {
      const exer = allExercises.filter(
        (exercise) => exercise.exerciseId === el
      );
      return exer;
    });
    return exercisesById;
  }

  getStatistics(exersiseByIdArray: IAnswerForDb[]) {
    const tries = exersiseByIdArray.length;
    const lastEx = exersiseByIdArray[exersiseByIdArray.length - 1];
    const checkedAnswers = lastEx.studentAnswers.map((el) => el.isCorrect);
    const trues = checkedAnswers.filter((el) => el === true);
    const percentPerPoint = 100 / checkedAnswers.length;
    const percentOfCorrectAnswers = trues.length * percentPerPoint;
    const percentOfWrongAnswers = 100 - percentOfCorrectAnswers;
    const falses = checkedAnswers.filter((el) => el === false);

    // const questionsNumber = lastEx.studentAnswers.length;
    const truesNumber = trues.length;
    const falsesNumber = falses.length;
    const statisticsInfo = {
      tries,
      lastEx,
      percentPerPoint,
      percentOfCorrectAnswers,
      percentOfWrongAnswers,

      data: {
        labels: ['Nice!', 'Boo...'],
        datasets: [
          {
            data: [truesNumber, falsesNumber],
            backgroundColor: ['green', 'red'],
            hoverBackgroundColor: ['aqua', 'brown'],
          },
        ],
      },

      options: {
        responsive: true,
        pligins: {
          legend: {
            labels: {
              color: 'black',
            },
          },
        },
      },
    };
    return statisticsInfo;
  }
}
