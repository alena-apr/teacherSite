import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExercise } from '../../../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class GrammarRestService {

  constructor(private http: HttpClient) { }

  getAllGrammar(): Observable<IExercise[]> {
    return this.http.get<IExercise[]>('http://localhost:3000/grammar')
  }
}
