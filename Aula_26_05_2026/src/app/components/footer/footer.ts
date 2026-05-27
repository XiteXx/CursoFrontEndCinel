import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit, OnDestroy {
  localData: string;

  constructor() {
    const agora = DateTime.now();
    this.localData === agora.toLocaleString(DateTime.DATETIME_FULL);
  }
}
