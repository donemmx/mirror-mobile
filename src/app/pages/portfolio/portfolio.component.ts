import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  mycard = [
    {
      img: '/assets/portfolio/achievement.png',
      title: "My Glories",
      text: 'Take a moment to celebrate the hard work and dedication that you have shown throughout your learning journey'
   },
    {
      img: '/assets/portfolio/completed.png',
      title: "My Ashes",
      text: 'Your commitment to learning and improving your skills will serve you well in your future endeavors. Well done!'
   },
    {
      img: '/assets/portfolio/ongoing.png',
      title: "My Communities",
      text: 'Keep pushing through the challenges and soak up all the knowledge and experience this course has to offer.'
   },
    {
      img: '/assets/portfolio/assesment.png',
      title: "My Work in Progress",
      text: 'Take a moment to celebrate the hard work and dedication that you have shown throughout your learning journey'
   },
    {
      img: '/assets/portfolio/singMysong.webp',
      title: "Singing my song",
      text: 'Take a moment to celebrate the hard work and dedication that you have shown throughout your learning journey'
   },
  
  ]
}
