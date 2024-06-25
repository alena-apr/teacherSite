import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user/user.service';
import { IUser } from '../../../../models/user';
import { Observable } from 'rxjs';
import { IExercise } from '../../../../models/exercise';
import { AnswerGrammarService } from '../../../../services/answer-grammar/answer-grammar.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.scss',
})
export class StudentItemComponent {

  student: IUser;
  studentAnswers: IExercise[];
  
  constructor(
    private route: ActivatedRoute, 
    private userService: UserService,
    private answerGrammarService: AnswerGrammarService,
  ){}
  
  ngOnInit() {
    const routerIdParam = this.route.snapshot.paramMap.get('id') as string; // for route
    const querryIdParam = this.route.snapshot.queryParamMap.get('id') as string; // for queryParams
    const paramValueId = routerIdParam || querryIdParam;

    if (paramValueId) {
      this.getStudentInfo(paramValueId);
      this.getStudentAnswers(paramValueId);
    }
    
    // if (this.student !== undefined || null ) {
    //     const id = this.student._id as string
    //     this.getStudentAnswers(id)
    //   }


  }

  getStudentInfo(id: string) {
    this.userService.getUserById(id).subscribe((data) => {
      console.log(data);
      this.student = data;
     });
  }

  getStudentAnswers(userId: string) {
    this.answerGrammarService.getAnswerForAdminByUser(userId).subscribe((data) => {
      console.log(data)
      this.studentAnswers = data;
    })
  }
}
