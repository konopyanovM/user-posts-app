import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInDown = trigger('routeAnimations', [
  transition('* => *', [
    style({
      opacity: 0,
      transform: 'translate3d(0, -2vh, 0)',
    }),
    animate('350ms ease-out', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
  ]),
]);
