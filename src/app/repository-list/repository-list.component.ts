import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Subscription} from 'rxjs';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit, OnDestroy {
  repositoryData: any = [];
  owner: any = environment.owner;
  pageNumber: any = 1;
  pageSize: any = environment.pageSize;
  totalPage: any;
  private totalLengthSubscription: Subscription | undefined;
  private initialLoad: Subscription | undefined;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.totalLengthSubscription = this.appService.getRepositoryData(`/orgs/${this.owner}/repos`)
      .subscribe(data => {
        if (data) {
          this.totalPage = data.length;
          this.getRepoData(this.pageNumber);
        }
      });
  }

  getRepoData(pageNumber: number): any {
    const params = {per_page: this.pageSize, page: pageNumber};
    this.initialLoad = this.appService.getRepositoryData(`/orgs/${this.owner}/repos`, params).subscribe(data => {
      this.repositoryData = data;
    });
  }

  onPagination(currentPage: number): any {
    this.pageNumber = currentPage;
    this.getRepoData(this.pageNumber);
  }

  trackByFn(index: number, repoData: any): any {
    return repoData.id;
  }

  ngOnDestroy(): void {
    if (this.initialLoad) {
      this.initialLoad.unsubscribe();
    }
    if (this.totalLengthSubscription) {
      this.totalLengthSubscription.unsubscribe();
    }
  }

}
