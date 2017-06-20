import { Component } from '@angular/core';
import { AutRequest } from './aut.request';

@Component({
   selector: 'app-aut-request-form',
   templateUrl: './aut-form.component.html'
})

export class AutRequestFormComponent {
   model = new AutRequest('', '', 'indl76044.in.oracle.com', 1522, 'fusion', 'fusion', '');

    submitted = false;
    requestData: string;

    onSubmit(data) {
        this.submitted = true;
        this.requestData = JSON.stringify(data, null, 2);
        console.log(this.requestData);
    }
}
