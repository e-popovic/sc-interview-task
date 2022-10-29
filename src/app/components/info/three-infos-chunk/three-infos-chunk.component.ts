import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-three-infos-chunk',
  templateUrl: './three-infos-chunk.component.html',
  styleUrls: ['./three-infos-chunk.component.css']
})
export class ThreeInfosChunkComponent implements OnInit {

  constructor() { }
  @Input() myThreeTexts = ['', '', ''];
  ngOnInit(): void {
  }

}
