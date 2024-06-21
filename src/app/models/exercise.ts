export interface IExercise {
  _id?: string;
  type: string;
  title: string;
  difficulty: number;
  realAnswer: IAnswer[];
  text: IText[];
  studentAnswer: IFormatedAnswer[];
}

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

}

export interface IFormatedAnswer {
  id: number; 
  answer?: string;
  isCorrect: boolean;
}

export interface IExerciseWStudentAnsw extends IExercise {
  studentAnswe?: IFormatedAnswer[];
}




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