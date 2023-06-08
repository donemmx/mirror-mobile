import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(0%)' }), animate('900ms', style({ opacity: 1, transform: 'translateY(0%)' }))]
  ),
  transition(':leave',
    [style({ opacity: 1, transform: 'translateX(0%)' }), animate('300ms', style({ opacity: 1, transform: 'translateX(0%)' }))]
  )
]);

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('180ms', animate('800ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('300ms', style({ opacity: 0, transform: 'translateX(-5%)' })),
      { optional: true}
    )
  ])
]);