import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-keywords-chunk',
  templateUrl: './keywords-chunk.component.html',
  styleUrls: ['./keywords-chunk.component.css']
})
export class KeywordsChunkComponent implements OnInit {

  constructor() { }
  @Input() myTitle = '';
  @Input() myKeywords = [''];
  ngOnInit(): void {
  }

}
