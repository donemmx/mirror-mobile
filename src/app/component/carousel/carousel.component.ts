import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carousel = [
    {
      title: 'Pathway to Wholeness',
      text: 'The Identity Educational Spiritual and Social Plan (IESSP) is a mentorship and discipleship program designed to empower people to discover their true identities, excel in their education and career, deepen their spirituality, and strengthen their social support network. At The Mirror, our calling is to walk with you on your journey to healing and thriving. We will offer guidance, support, and encouragement along your path. We want to help you discover your unique inner song.',
      img: '/assets/images/img-1.png'
    },
    {
      title: 'Sharing Your Song',
      text: "In a story attributed to Alan Cohen, “They’re Singing Your Song,'' pregnant women in an African tribe go out into the wilderness before their child is born to pray and meditate with a few friends.  Together in prayer, they listen for the baby’s unique inner song, and learn to sing it by heart. They return to the tribe, and everyone learns the baby’s song. They sing it at the child’s birth, at their wedding, and, ultimately, at their death. They even sing it when that person makes a mistake or goes astray.",
      img: '/assets/images/img-2.png'

    },
    {
      title: 'No Shaming',
      text: 'They know that the reason people go astray is because they’ve forgotten their true identity: beloved. When the community sings their song to remind them of who they really are, that person can return to the path of healing and wholeness. Alan Cohen was right, you best serve others by reminding them of their song. Judgment, punishment, and power plays don’t correct; they only drive human beings further from their joy and aggravate pain and self-defeating behavior. When someone is in distress or conflict, help them remember who they really are, and they’ll have no need to hurt others.',
      img: '/assets/images/img-3.png'

    },
    {
      title: 'The Curriculum',
      text: 'The essence of this curriculum is to help you sing your song, and for the people around you to learn it, too. Each component of the program – Identity, Educational, Spiritual, and Social – is designed to help you and the people around you discover your inner song. Each component has 12 modules. Each module explores topics that will help you cultivate your self-awareness, unearth your unique gifts, and set actionable goals to help you reach your potential. For many people, walking down this path brings up both joys and sorrows. Compassionate mentors will be there to support you every step of the way. We believe that when we deeply know God, one another, and ourselves, we can find healing and wholeness. Are you ready to start your journey toward healing and wholeness?',
      img: '/assets/images/img-4.png'

    },
    {
      title: 'The Stages of Mastery',
      text: 'Each module has three levels of mastery. When you’ve accomplished each level of mastery in a module, you can move on to the next module in that path. In the Beginners Level, you will develop self-knowledge and awareness of what you’re doing and why you’re doing it. You will learn how to take ownership of your whole self: your strengths and weaknesses. At the Advanced Level, you will act on the self-knowledge you developed in the Beginners Level and cultivate wisdom. You will learn how to face your fears and insecurities, and develop new, healthy habits and behaviors. Finally at the Proficiency Level, you will maintain and strengthen your new habits and behaviors through persistence, self-discipline, and accountability from mentors, peers, and loved ones.',
      img: '/assets/images/img-5.png'
    },
    {
      title: 'Identity',
      text: 'Our world sends so many mixed, conflicting messages about who we are and who we should be. It’s no wonder people often feel confused, alone, and disconnected from themselves, God, and the people around them.As you walk down the Identity Path, you will grow in self-awareness, connect with your unique story, and learn how to tell your story with others. Above all, you will explore your identity in God. You will learn about who He created you to be, who you truly are: beloved of Christ..',
      img: '/assets/images/img-6.png'
    },
  ]
}
