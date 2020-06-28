import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html'
})
export class QueryComponent implements OnInit {
  @Input() query;
  @Input('data') data;
  @Output() updateData = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void { }
  updated() {
    this.updateData.emit(this.query)
  }
}
