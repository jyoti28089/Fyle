import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppService} from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoryComponent,
    PaginationComponent,
    RepositoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
