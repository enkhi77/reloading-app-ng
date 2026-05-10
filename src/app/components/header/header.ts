import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatFabButton, MatToolbar, MatToolbarRow, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
