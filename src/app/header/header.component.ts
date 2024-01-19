import { Component, OnInit } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";

import { CommonModule } from "@angular/common";



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    styleUrls: ['./header.component.css'],
    imports: [
        MatToolbarModule,
        MatDividerModule,
        CommonModule
    ],
})
export class HeaderComponent {

}