import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { DirectivessComponent } from './directivess/directivess.component';
import { UserDataComponent } from './user-data/user-data.component';
import { AppendPipe } from './pipes/append.pipes';
import { FomsComponent } from './foms/foms.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppendPipe,
    AppComponent,
    SalesPersonListComponent,
    PostComponent,
    PostListComponent,
    DirectivessComponent,
    UserDataComponent,
    FomsComponent,
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'post',component:ReactFormComponent
      },
      {
         path:'post/:id/:title',component:FomsComponent
      },
      {
        path:'directive',component:DirectivessComponent

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
