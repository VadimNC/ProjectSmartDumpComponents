import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserInterface, UsersService} from '../shared/users.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.less']
})
export class SmartComponent implements OnInit {
  public users$: Observable<UserInterface[]>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users$ = this.usersService.getUsers$();
  }


}
