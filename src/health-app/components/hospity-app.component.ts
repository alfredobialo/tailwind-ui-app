import { Component } from '@angular/core';
import { TailwindTemplateComponent } from "../../sample-app/components/tailwind-template";
import { ButtonComponent } from '../../sample-app/components/button.component';

@Component({
  selector: 'hy-hospity-app',
  standalone: true,
  imports: [TailwindTemplateComponent, ButtonComponent],
  template: `
    <div class="h-screen bg-slate-200 rounded-sm shadow-sm">
      <tailwind-template-component />
      <button custom>New Button</button>
    </div>
  `,
  styles: ``
})
export class HospityAppComponent {

}
