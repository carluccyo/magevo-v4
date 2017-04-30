import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    encapsulation: ViewEncapsulation.None,
    styles: ['./dashboard.scss'],
    template: `
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-12">
                    <chart></chart>
                </div>
            </div>

        </div>
    `
})
export class DashboardComponent {
    constructor() {}
}
