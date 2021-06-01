import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {environment} from '../../environments/environment';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  owner: any = environment.owner;
  ownerData: any;
  private profileLoadSubscription: Subscription | undefined;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.profileLoadSubscription = this.appService.getUserData(`/users/${this.owner}`).subscribe(data => {
      this.ownerData = data;
    });
  }

  ngOnDestroy(): void {
    if (this.profileLoadSubscription) {
      this.profileLoadSubscription.unsubscribe();
    }
  }

}
