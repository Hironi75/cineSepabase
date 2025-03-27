import { Component, inject } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { FooterComponent } from '../../footer/footer.component';
import { CarteleraComponent } from '../cartelera/cartelera.component';
import { DescuentoComponent } from '../descuento/descuento.component';

import { AuthStateService } from '../../../data-access/auth-state.service';


@Component({
  selector: 'app-media',
  imports: [HeadComponent,FooterComponent,CarteleraComponent,DescuentoComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  private _authState = inject(AuthStateService);
}
