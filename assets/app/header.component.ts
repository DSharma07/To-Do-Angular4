import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth/auth.service";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills" style="display: inline-block">
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['/messages']">ToDo-List</a></li>
                </ul>
                <button class="btn btn-danger" (click)="onLogout()" style="float: right;" *ngIf="isLoggedIn()">Logout</button>
            </nav>
        </header>
    `
})
export class HeaderComponent {
    constructor(private authService: AuthService, private router: Router) {}
    
        isLoggedIn() {
            return this.authService.isLoggedIn();
        }

        onLogout() {
            this.authService.logout();
            this.router.navigate(['/auth', 'signin']);
        }
}