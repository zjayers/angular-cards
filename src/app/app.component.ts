import { Component } from '@angular/core';
import { CardDetail } from './card-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Array<CardDetail> = [
    {
      title: 'Neat Tree',
      username: 'nature',
      content: 'I saw this neat tree today!',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainLover',
      content: 'Here is a picture of a snowy mountain!',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Mountain Biking',
      username: 'bike-boy',
      content: 'I did some biking today!',
      imageUrl: 'assets/biking.jpeg',
    },
    {
      title: 'Mountain Biking',
      username: 'bike-boy',
      content: 'I did some biking today!',
      imageUrl: 'assets/biking.jpeg',
    },
    {
      title: 'Neat Tree',
      username: 'nature',
      content: 'I saw this neat tree today!',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainLover',
      content: 'Here is a picture of a snowy mountain!',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Mountain Biking',
      username: 'bike-boy',
      content: 'I did some biking today!',
      imageUrl: 'assets/biking.jpeg',
    },
    {
      title: 'Mountain Biking',
      username: 'bike-boy',
      content: 'I did some biking today!',
      imageUrl: 'assets/biking.jpeg',
    },
  ];
}
