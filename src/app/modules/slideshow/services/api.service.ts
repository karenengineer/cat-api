import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {CatCategory, CatImage} from '../../../../shared/interfaces/cat';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getCatCategories(): Observable<CatCategory[]> {
    return this.http.get<CatCategory[]>(
      'https://api.thecatapi.com/v1/categories');
  }

  public getCatImages(id: number, limit: number): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&category_ids=${id}`);
  }
}
