import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {UserInterface} from '../shared/users.service';

@Component({
  selector: 'app-dump',
  templateUrl: './dump.component.html',
  styleUrls: ['./dump.component.less']
})
export class DumpComponent {
  @HostBinding('class.userinterface') public userClass = true;
  @Input() public user: UserInterface;
}
