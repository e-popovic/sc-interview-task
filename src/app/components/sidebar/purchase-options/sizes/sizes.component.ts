import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})
export class SizesComponent implements OnInit {

  constructor() { }

  public sizes = [ ["Large", "Print (2667x4000)", "170.00"],
  ["Small", "Web (1072x1600)", "130.00"]]

  ngOnInit(): void {
  }

}
