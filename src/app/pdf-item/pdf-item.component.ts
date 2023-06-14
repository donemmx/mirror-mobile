import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-item',
  templateUrl: './pdf-item.component.html',
  styleUrls: ['./pdf-item.component.css']
})
export class PdfItemComponent {
  @Input() item: any
}
