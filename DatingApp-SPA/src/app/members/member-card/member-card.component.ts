import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;

  constructor(private authService: AuthService, private userService: UserService,
              private alterfy: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(id: number) {
    // id is recipient id which will get when user clicks on button
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(date => {
      this.alterfy.success('You have like: ' + this.user.knownAs);
    }, error => {
      this.alterfy.error(error);
    });
  }

}
