import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

import { AuthStateService } from '../../service/auth-state';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {

  user$: Observable<User | null>;
  isLoading = true;
  currentYear = new Date().getFullYear();

  constructor(private authStateService: AuthStateService) {
    this.user$ = this.authStateService.getUser();
  }

  ngOnInit(): void {
    this.user$.subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  getInitials(user: User | null): string {
    if (!user) {
      return '?';
    }

    if (user.displayName) {
      const names = user.displayName.trim().split(' ');

      return names
        .map(name => name.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }

    return user.email
      ? user.email.charAt(0).toUpperCase()
      : '?';
  }

}