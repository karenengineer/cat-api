import {Component, OnInit} from '@angular/core';

import {CatCategory, CatImage} from '../../../../shared/interfaces/cat';
import {CountEnum} from '../../../../shared/enums/count.enum';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ApiService]
})
export class DashboardComponent implements OnInit {

  public catCategories: CatCategory[] = [];
  public catImages: CatImage[] = [];
  public countEnum = CountEnum;
  public categoryId: number = 0;
  public catImageslimit: number = CountEnum.ten;

  constructor(private readonly apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getCatImagesFromUrl();
    this.getCatImages(5);
  }

  public getCatImagesFromUrl(): void {
    this.apiService.getCatCategories().subscribe(res => {
      this.catCategories = res;
    })
  }

  public getCatImages(id: number, limit: number = CountEnum.ten): void {

    this.apiService.getCatImages(id, limit)
      .subscribe(res => {
        this.catImages = res;
        this.categoryId = id;
        this.catImageslimit = limit;
      })
  }
}
