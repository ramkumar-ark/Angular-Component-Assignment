import { Component } from '@angular/core';

@Component({
  selector: 'success-alert',
  template: `
    <div class="alert alert-success m-3" role="alert">
      This is the Success Message.
    </div>
  `,
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent {}
