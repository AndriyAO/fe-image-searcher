import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  images = [];
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.images = [
      {
          "id": "Wn74RUT0vjnoU98Hnt",
          "type": "gif",
          "title": "Sipping Boba Fett GIF",
          "url": "https://media0.giphy.com/media/Wn74RUT0vjnoU98Hnt/giphy.gif?cid=59c5fe808a08c43daff7ed0a87fc7e480d30761633bafd68&rid=giphy.gif",
          "liked": true
      },
      {
          "id": "3o85xGocUH8RYoDKKs",
          "type": "gif",
          "title": "Sipping Kermit The Frog GIF",
          "url": "https://media3.giphy.com/media/3o85xGocUH8RYoDKKs/giphy.gif?cid=59c5fe808a08c43daff7ed0a87fc7e480d30761633bafd68&rid=giphy.gif",
          "liked": false
      },
      {
          "id": "3oKIP8kNuTJJL3zT0I",
          "type": "gif",
          "title": "The Tea GIF by Dreezy",
          "url": "https://media2.giphy.com/media/3oKIP8kNuTJJL3zT0I/giphy.gif?cid=59c5fe808a08c43daff7ed0a87fc7e480d30761633bafd68&rid=giphy.gif",
          "liked": false
      }
  ];
  }

}
