import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  text = 'Project Button';
  constructor() { }

  onChangeText() {
    this.name = 'Welcome to Ionic Project!';
  }
  ngOnInit() {}

}
