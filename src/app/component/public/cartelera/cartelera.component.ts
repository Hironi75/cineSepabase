import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthStateService } from '../../../data-access/auth-state.service';
import { NotesService } from '../../../data/data-access/data-access.service';
import { Pelicula } from '../../../interface/Pelicula';

@Component({
  selector: 'app-cartelera',
  imports: [RouterLink],
  templateUrl: './cartelera.component.html',
  styleUrl: './cartelera.component.css'
})
export class CarteleraComponent implements AfterViewInit {

  _noteService= inject(NotesService);

  ngAfterViewInit() {
    this._noteService.getAllNotes();

  }

}
