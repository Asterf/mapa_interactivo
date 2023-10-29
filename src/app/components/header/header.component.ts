import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  exportAs: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() clickEvent = new EventEmitter<void>();

  ngOnInit() {
   
    };

    emitClickEvent() {
      this.clickEvent.emit();
    }

}



    

