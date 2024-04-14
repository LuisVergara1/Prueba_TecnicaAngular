import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../Services/Search/search.service';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common'; 
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule,MatCheckboxModule,FormsModule,CommonModule,MatInputModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private apiUrl = environment.apiUrl;
  perPage: number = 10; // Por defecto, se muestran 10 resultados por página
  paginaActual: number = 1;
  events: any[] = [];
  showTable = false;
  showpagination =false;
  searchId: string = '';
  datos: any[] =[];

  
  
  selectedFilters: { [key: string]: boolean } = {};
  filters: string[] = ['mb', 'mb_lg', 'md', 'mh', 'ml', 'mw', 'mwr', 'mww'];

  constructor(private searchService: SearchService) {
    this.filters.forEach(filter => this.selectedFilters[filter] = false);
  }

  buscar(): void {
    const selectedFilters = this.filters.filter(filter => this.selectedFilters[filter]);
    let url = `${this.apiUrl}/features?page=${this.paginaActual}&per_page=${this.perPage}`;
    selectedFilters.forEach(filter => {
      url += `&mag_type[]=${filter}`;
    });

    this.searchService.buscar(url).subscribe(
      response => {
        this.showTable = true;
        this.showpagination =true;
        this.events = response.data;
        console.log(response); // Aquí puedes manejar la respuesta de la API
      },
      error => {
        console.error('Error al buscar:', error);
      }
    );
  }
  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.buscar();
    }
  }

  paginaSiguiente(): void {
    this.paginaActual++;
    this.buscar();
  }

  nuevaBusqueda():void
  {
this.paginaActual=1;
this.buscar();
  }

  busquedaID(): void {
    let url = `${this.apiUrl}/features/${this.searchId}`;

    if (this.searchId.trim()) {
      console.log('Buscando por ID:', this.searchId);

      this.searchService.buscar_id(url).subscribe(
        response => {
          this.showTable = true;
          if (Array.isArray(response.data)) {
            this.events = response.data;
            this.searchId = '';
          } else {
            this.events = [response.data];
            this.searchId = ''; // Convertir el objeto en un array de un elemento
          }
          console.log(this.events); // Aquí puedes manejar la respuesta de la API
        },
        error => {
          console.error('Error al buscar:', error);
        }
      );
  }
  }
}