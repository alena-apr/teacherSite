import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExercise } from '../../../models/exercise';

@Injectable({
  providedIn: 'root',
})
export class GrammarRestService {
  constructor(private http: HttpClient) {}

  getAllGrammar(): Observable<IExercise[]> {
    return this.http.get<IExercise[]>('http://localhost:3000/grammar/exercises');
  }

  postOneGrammar(data: IExercise): Observable<IExercise> {
    return this.http.post<IExercise>('http://localhost:3000/grammar', data);
  }

  getGrammarById(id: string): Observable<IExercise> {
    return this.http.get<IExercise>(`http://localhost:3000/grammar/${id}`);
  }

  getGrammarByIdWOAnswers(id: string): Observable<IExercise> {
    return this.http.get<IExercise>(
      `http://localhost:3000/grammar/exercise/${id}`
    );
  }
}
