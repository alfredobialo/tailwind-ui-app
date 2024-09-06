import {Component, OnInit} from '@angular/core';

@Component({
  host: {
    class : `py-2 px-4 ring-2 ring-blue-200 rounded
  hover:bg-blue-300
  hover:shadow-md
  hover:translate-y-1
  hover:border-blue-400 duration-300 transition-all
  hover:bg-gradient-to-tr hover:from-blue-300 hover:to-yellow-100
  hover:ring-blue-400
  md:hover:bg-gradient-to-bl md:hover:from-teal-300 md:hover:to-pink-200
  md:ring-teal-500  md:hover:ring-pink-400`
  },
  standalone:true,
  selector: 'button[custom]',
  template: `
    <ng-content />
  `
})

export class ButtonComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
