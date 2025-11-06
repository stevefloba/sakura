import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { HowToOrder } from './how-to-order/how-to-order';
import { OurMenu } from './our-menu/our-menu';


@Component({
  selector: 'app-main-content',
  imports: [
    LandingPageComponent,
    MainContent,
    HowToOrder,
    OurMenu
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {

}
