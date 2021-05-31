import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  owner: any = 'Sunbird-Ed';
  ownerData: any;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getUserData(`/users/${this.owner}`).subscribe(data => {
      this.ownerData = data;
    });
  }

}
