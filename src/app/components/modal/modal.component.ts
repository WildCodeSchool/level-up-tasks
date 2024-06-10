import { Component, ElementRef, Input } from '@angular/core';
import { ModalService } from '../../service/modal/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
    @Input() id?: string;
    isOpen = false;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
        this.modalService.add(this);
        this.element.addEventListener('click', (el: any) => {
            if (el.target.className === 'modal-container') {
                this.close();
            }
        });
    }

    ngOnDestroy() {
        this.element.remove();
    }

    open() {
        this.element.style.display = 'block';
        this.isOpen = true;
    }

    close() {
        this.element.style.display = 'none';
        this.isOpen = false;
    }
}

