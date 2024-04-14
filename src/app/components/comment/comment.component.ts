import { Component, ViewChild, ElementRef ,OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../Services/comment/comment.service';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule,CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  commentText: string = '';
  featureId: string  = '' ;
  comentarios: { id: number, earthquake_id: number, body: string }[] = [];
  comments: { id: number, earthquake_id: number, body: string }[] = [];
  comentarioEditado :any[] = [];
  commentId:string = "";
  commentBody : string ="";

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  constructor(private commentService: CommentService) {}

  crearNuevoComentario(idFeature: string, comentario: string) {
    if (!this.featureId || isNaN(+this.featureId) || +this.featureId <= 0) {
      console.log('Por favor, introduce un ID de feature válido y mayor que cero.');
      return;
    }
    this.commentService.crearComentario(idFeature, comentario).subscribe(
      response => {
        console.log('Comentario creado:', response);
        this.commentText=" ";
        this.featureId = " " ;
        this.obtenerComentarios();
        // Lógica adicional después de crear el comentario, si es necesario
      },
      error => {
        console.error('Error al crear el comentario:', error);
      }
    );
  }
  validarNumero(event: KeyboardEvent) {
    const pattern = /^[0-9]*$/; // Expresión regular para aceptar solo números
    const inputChar = String.fromCharCode(event.charCode); // Carácter ingresado
    
    if (!pattern.test(inputChar)) {
      // Si el carácter no es un número, evita la acción por defecto
      event.preventDefault();
    }
  }
    obtenerComentarios(): void {
    this.commentService.getComentarios().subscribe(
      (response: any) => {
        if (response && response.comments && response.comments.length >= 0) {
          this.comentarios = response.comments;
        } else {
          console.error('Error: la respuesta no contiene comentarios válidos');
        }
      },
      (error) => {
        console.error('Error al obtener los comentarios:', error);
      }
    );
  }

  
  eliminarComentario(id: number): void {
    this.commentService.deleteComentarios(id).subscribe(
      (response) => {
        // Manejo de la respuesta si es necesario
        console.log('Comentario eliminado:', response);
        // Por ejemplo, si quieres actualizar la lista de comentarios después de eliminar uno
        this.obtenerComentarios();
      },
      (error) => {
        console.error('Error al eliminar el comentario:', error);
        // Manejo del error, por ejemplo mostrar un mensaje al usuario
      }
    );
  }

  modificarComentario(commentId: string, nuevoTexto: string): void {
    this.commentService.updateComentario(commentId, nuevoTexto).subscribe(
      (response) => {
        console.log('Comentario editado correctamente:', response);
        // Actualizar la lista de comentarios después de editar
        this.obtenerComentarios();
        // Limpiar el comentario editado
        this.commentId = " ";
        this.commentBody = " ";
      },
      (error) => {
        console.error('Error al editar el comentario:', error);
        // Manejo del error, por ejemplo mostrar un mensaje al usuario
      }
    );
  }
  
  

  
  }



