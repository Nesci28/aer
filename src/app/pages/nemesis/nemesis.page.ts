import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nemesis',
  templateUrl: './nemesis.page.html',
  styleUrls: ['./nemesis.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NemesisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
