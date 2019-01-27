import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {ApolloModule, Apollo } from "apollo-angular";
import {HttpLinkModule, HttpLink} from "apollo-angular-link-http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {CourseService} from "src/app/course.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:4000/graphql'}),
      cache: new InMemoryCache()
    })
  }
}
