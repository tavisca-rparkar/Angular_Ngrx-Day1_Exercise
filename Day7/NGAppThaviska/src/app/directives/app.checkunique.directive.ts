import {Directive, ElementRef, Renderer2, Input, HostListener} from '@angular/core';
import { HttpService } from '../services/app.htttp.service';

@Directive({
    selector: '[productId]'
})

export class UniqueCheckDirective {
    constructor(private ele: ElementRef, private renderer: Renderer2, private httpService:HttpService){
    }

    @Input('productId') productId: number;

    private checkUnique(productId: number): void {
        this.httpService.getByProductId(productId).subscribe((data) => {
            console.log('Data '+ data);
            this.renderer.setStyle(this.ele.nativeElement,
                'backgroundColor',
                'red');    
        }, (error) => {
            console.log('Error'+ error);
            this.renderer.setStyle(this.ele.nativeElement,
                'backgroundColor',
                'transparent');   
        })
     }

@HostListener('blur')
   onblur(): void {
     this.checkUnique(this.productId);
   }
}



