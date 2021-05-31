import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: any;
  @Input() pageSize: any = 10;
  @Input() collectionSize: any;
  @Output() pageChangeEmitter = new EventEmitter<any>();

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  onPagination(currentPage: any): any {
  this.pageChangeEmitter.emit(currentPage);
  }
}
