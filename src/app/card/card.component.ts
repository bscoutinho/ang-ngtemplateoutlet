import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.css'],
    templateUrl: './card.component.html',
})
export class CardComponent {
    @Input() conteudo: string;
    @Input() data: Date;
    @Input() titulo: string;

    @ContentChild('tmpHeader') headerCustomizado: TemplateRef<any>;
}