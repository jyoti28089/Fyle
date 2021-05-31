import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  repositoryData: any;
  owner: any = 'Sunbird-Ed';
  pageNumber: any = 1;
  pageSize: any = 10;
  totalPage: any;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getRepositoryData(`/orgs/${this.owner}/repos`).subscribe(data => {
      if (data) {
        this.totalPage = data.length;
        this.getRepoData(this.pageNumber);
      }
    });
    // this.getRepoData(this.pageNumber);

    // this.appService.getTopics(`/repos/${this.owner}/SunbirdEd-portal/topics`).subscribe(data => {
    //   console.log(data);
    // });
  }

  getRepoData(pageNumber: number): any {
    const params = {per_page: this.pageSize, page: pageNumber};
    this.appService.getRepositoryData(`/orgs/${this.owner}/repos`, params).subscribe(data => {
      this.repositoryData = data;
    });
  }

  onPagination(currentPage: number): any {
    this.pageNumber = currentPage;
    this.getRepoData(this.pageNumber);
  }

}
