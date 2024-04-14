import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './components/comment/comment.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchComponent,HttpClientModule,CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private apiUrl = environment.apiUrl;
  title = 'prueba_angular';
  constructor() {
    console.log('API URL:', this.apiUrl);
  }
}
