import { Injectable } from '@angular/core';
import { GrammarRestService } from '../rest/grammar/grammar-rest.service';
import { Observable } from 'rxjs';
import { IExercise } from '../../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor(
    private grammarRestService: GrammarRestService
  ) { }

  getAllGrammar(): Observable<IExercise[]> {
    return this.grammarRestService.getAllGrammar()
  }

  getGrammarById(id: string): Observable<IExercise> {
    return this.grammarRestService.getGrammarById(id);
  }

  getGrammarByIdWOAnswers(id: string): Observable<IExercise> {
    return this.grammarRestService.getGrammarByIdWOAnswers(id);
  }
}
