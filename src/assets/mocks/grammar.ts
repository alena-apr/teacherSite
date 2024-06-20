// export class GrammarDto implements IGrammar {
//     answer: IPhrase[];
//     id: string;
//     type: string;
//     text: IPhrase[];
// }

// const obj = {
//     id: '333',
//     // type: 'input',
//     text: 'sdsds sdfsdfsdfsdfsd **** sdsdsd1',
//     answer: 'asdas',
//     trasformText: ['dsdsd', 'sdsdsd1']
// }

export const exercise1 = [
  {
    id: 'qwerty1234',
    realAnswer: [
      {
        id: 1,
        answer: 'to',
      },
      {
        id: 2,
        answer: 'in',
      },
      {
        id: 3,
        answer: 'in',
      },
      {
        id: 4,
        answer: 'at',
      },
      {
        id: 5,
        answer: 'on',
      },
    ],
    type: 'input',
    title: 'Preps 1',
    difficulty: 1,
    text: [
      {
        id: 1,
        text: 'I like listening *** music.',
        transformedText: ['I like listening ', ' music'],
      },
      {
        id: 2,
        text: 'My birthday is *** May.',
        transformedText: ['My birthday is ', ' May'],
      },
      {
        id: 3,
        text: 'The price of electricity is going up *** October.',
        transformedText: ['The price of electricity is going up ', ' October'],
      },
      {
        id: 4,
        text: '*** weekends, we often go for long walks in the country.',
        transformedText: [
          '',
          ' weekends, we often go for long walks in the country.',
        ],
      },
      {
        id: 5,
        text: 'I’ve been invited to a wedding *** 14 February.',
        transformedText: ['I’ve been invited to a wedding ', ' 14 February'],
      },
    ],
    studentAnswer: [],
  },
  //   {
  //     id: 'qwerty1235',
  //     realAnswer: [
  //       {
  //         id: 1,
  //         answer: 'about',
  //       },
  //       {
  //         id: 2,
  //         answer: 'at',
  //       },
  //     ],
  //     type: 'input',
  //     title: 'Preps 2',
  //     difficulty: 1,
  //     text: [
  //       {
  //         id: 1,
  //         text: 'Do you think INPUT Romans.',
  //       },
  //       {
  //         id: 2,
  //         text: `Let's meet INPUT 6 o'cklock`,
  //       },
  //     ],
  //     studentAnswer: [],
  //   },
];
