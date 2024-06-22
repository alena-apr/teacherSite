export interface IExercise {
  _id?: string;
  type: string;
  title: string;
  difficulty: number;
  realAnswers: IAnswer[] | [];
  text: IText[];
  studentAnswers: IRawAnswer[];
}

export interface IAnswerForDb extends IExercise {
  userId: string;
  exerciseId: string;
}

// export interface IAnswerChecked extends IExercise {
//   userId: string;
//   exerciseId: string;
//   studetnAnswers: IFormattedAnswers[];
  
// }

export interface IAnswer {
  id: number;
  answer: string;
}

export interface IText {
  id: number;
  text: string;
  transformedText: string[];
}

export interface IRawAnswer {
  id: number;
  answer?: string;
  isCorrect?: boolean;

}

// export interface IFormattedAnswers  {
//   // userId: string;
//   // exerciseId: string;
//   // answers: IRawAnswer[]
//   id: number; 
//   answer?: string;
//   isCorrect: boolean;
// }

// export interface IExerciseWStudentAnsw extends IExercise {
//   studentAnswe?: IFormattedAnswers[];
// }




// export interface IExercise {
//   id: string,
//   type: string,
//   difficulty: number;
//   title: string;
//   realAnswer: {
//     id: number;
//     answer: string;
//   }[];
//   text: {
//     id: number;
//     text: string;
//     transformedText: string[];
//   }[];
// }