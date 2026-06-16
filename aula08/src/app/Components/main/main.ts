import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  date: string = '';

  private interval: any;

  ngOnInit(): void {
    this.updateTime();

    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  updateTime() {
  const now = new Date();

  this.hours = this.pad(now.getHours());
  this.minutes = this.pad(now.getMinutes());
  this.seconds = this.pad(now.getSeconds());

  this.date = now.toLocaleDateString('pt-PT', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  this.cdr.detectChanges(); // 👈 força refresh
}

  pad(value: number) {
    return value.toString().padStart(2, '0');
  }
}