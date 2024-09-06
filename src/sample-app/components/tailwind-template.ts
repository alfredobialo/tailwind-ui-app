import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "./button.component";

@Component({
  standalone: true,
  selector: 'tailwind-template-component',
  imports: [
    ButtonComponent
  ],
  template: `
    <div class="flex h-screen items-center justify-center bg-gray-100">
      <div class="h-[95%] w-[97%] md:h-[95%] xl:h-[90%] md:w-[90%] xl:w-[95%]  bg-amber-100 text-[1.1rem]
  text-amber-700 xl:text-pink-700 md:text-green-800 duration-500
   md:rounded-2xl md:bg-green-200  ring-2 ring-amber-600 rounded-xl
   md:ring-4 md:ring-green-700 xl:bg-pink-200  xl:ring-pink-500 xl:ring-4
   md:text-[2rem] xl:text-[2.4rem]">
        <div class="py-4 px-6 md:px-10 md:py-8 h-full">

          <div class="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start  min-h-full">
            <div class="flex items-center gap-x-4">
              <div
                class="size-12 xl:size-[130px] md:size-[90px] bg-amber-800 md:bg-green-800 xl:bg-pink-800 rounded-full text-white flex justify-center items-center">
                JNK
              </div>
              <p>Hello Everyone !!</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  `
})

export class TailwindTemplateComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
