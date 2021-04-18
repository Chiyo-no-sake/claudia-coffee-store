import {
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

export interface Page {
  label: string;
  route: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() pages : Page[];
  currentPage: Page;

  constructor() { }

  ngOnInit(): void {
    this.currentPage = this.pages[0];
  }

  onEntryClicked(entry: Page){
    this.currentPage = entry;
  }
}
