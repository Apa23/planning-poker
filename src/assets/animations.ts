import { trigger, transition, style, animate } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({ transform: 'scale(0)' }),
  animate('0.2s ease-in', style({ transform: 'scale(1)' })),
]);
const leaveTransition = transition(':leave', [
  style({ transform: 'scale(1)' }),
  animate('0.2s ease-out', style({ transform: 'scale(0)' })),
]);
const fadeInTransition = transition(':enter', [
  style({ opacity: '0' }),
  animate('0.1s ease-in', style({ opacity: '1' })),
]);
const fadeOutTransition = transition(':leave', [
  style({ opacity: '1' }),
  animate('0.1s ease-out', style({ opacity: '0' })),
]);
const zoomIn = trigger('zoomIn', [enterTransition]);
const zoomOut = trigger('zoomOut', [leaveTransition]);
const fadeIn = trigger('fadeIn', [fadeInTransition]);
const fadeOut = trigger('fadeOut', [fadeOutTransition]);

export { zoomIn, zoomOut, fadeIn, fadeOut };
