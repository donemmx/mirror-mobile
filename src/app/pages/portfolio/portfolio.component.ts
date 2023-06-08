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
    title: "Achievements",
    text: 'Take a moment to celebrate the hard work and dedication that you have shown throughout your learning journey'
 },
  {
    img: '/assets/portfolio/completed.png',
    title: "Completed Courses",
    text: 'Your commitment to learning and improving your skills will serve you well in your future endeavors. Well done!'
 },
  {
    img: '/assets/portfolio/ongoing.png',
    title: "On-going Courses",
    text: 'Keep pushing through the challenges and soak up all the knowledge and experience this course has to offer.'
 },
  {
    img: '/assets/portfolio/assesment.png',
    title: "My Assessment",
    text: 'Take a moment to celebrate the hard work and dedication that you have shown throughout your learning journey'
 },
  {
    img: '/assets/portfolio/assesment.png',
    title: "Sing my song",
    text: 'Take a moment to celebrate the hard work and dedication that you have shown throughout your learning journey'
 },

]
}
