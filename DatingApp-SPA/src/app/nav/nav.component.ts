import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { tokenKey } from '@angular/core/src/view';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private altertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {

    this.authService.login(this.model).subscribe(next => {
      this.altertify.success('logged in successful');
    },
    error => {
      this.altertify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.altertify.message('loggedout successful');
  }
}
