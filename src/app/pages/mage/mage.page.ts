import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mage',
  templateUrl: './mage.page.html',
  styleUrls: ['./mage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
