import {
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

export interface Page {
  label: string;
  route: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() pages : Page[];

  currentPage: Page;
  userIcon = faUser;

  constructor() { }

  ngOnInit(): void {
    this.currentPage = this.pages[0];
  }

  onEntryClicked(entry: Page){
    this.currentPage = entry;
  }

  onLoginButtonClicked(){
    console.log("login clicked");
  }
}
