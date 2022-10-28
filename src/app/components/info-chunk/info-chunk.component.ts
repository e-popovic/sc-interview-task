import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-chunk',
  templateUrl: './info-chunk.component.html',
  styleUrls: ['./info-chunk.component.css']
})
export class InfoChunkComponent implements OnInit {

  constructor() { }
  @Input() myTitle = '';
  @Input() myText = '';
  ngOnInit(): void {
  }

}
