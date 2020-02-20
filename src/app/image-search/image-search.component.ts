import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service'
import { from } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  imageSearchForm: FormGroup;
  images = [];
  constructor(
    private imageService: ImageService,
    public fb: FormBuilder,
  ) {
    this.imageSearchForm = this.fb.group({
      querySearch: ['']
    })
  }

  ngOnInit(): void {
  }

  getImage() {
    this.imageService.getImages(this.imageSearchForm.value.querySearch)
      .subscribe((res: any) => {
        this.images = res.images;
      })
  }

  onLike(imageId: string) {
    this.applyLike(imageId);
    this.imageService.like(imageId).subscribe();
  }

  applyLike(imageId) {
    this.images.map(item => item.id === imageId ? item.liked = true : item)
}
}
