import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
    //This component can be reused for any modal the app needs
    private element: any;

    constructor(private el: ElementRef) {
        this.element = el.nativeElement;
    }

    @Output()
    closeModal: EventEmitter<any> = new EventEmitter();
    
    ngOnInit() {
        this.element.addEventListener('click', (el: any) => {
            if (el.target.className === 'modal-container') {
                this.closeModal.emit();
            }
        });
    }
}

