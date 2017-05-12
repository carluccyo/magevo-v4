import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <top-navbar></top-navbar>
    
    <h1>
      {{title}}
    </h1>

    <!-- Standard button -->
    <button type="button" class="btn btn-default">Default</button>

    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <button type="button" class="btn btn-primary">Primary</button>

    <!-- Indicates a successful or positive action -->
    <button type="button" class="btn btn-success">Success</button>

    <!-- Contextual button for informational alert messages -->
    <button type="button" class="btn btn-info">Info</button>

    <!-- Indicates caution should be taken with this action -->
    <button type="button" class="btn btn-warning">Warning</button>

    <!-- Indicates a dangerous or potentially negative action -->
    <button type="button" class="btn btn-danger">Danger</button>

    <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
    <button type="button" class="btn btn-link">Link</button>

    <h1>
      {{title}} <i class="fa fa-check"></i>
    </h1>

    <i class="fa fa-camera-retro fa-lg"></i> fa-lg
    <i class="fa fa-camera-retro fa-2x"></i> fa-2x
    <i class="fa fa-camera-retro fa-3x"></i> fa-3x
    <i class="fa fa-camera-retro fa-4x"></i> fa-4x
    <i class="fa fa-camera-retro fa-5x"></i> fa-5x
    
    
    <h1 class="title">Angular Router</h1>

    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>
    
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
}
