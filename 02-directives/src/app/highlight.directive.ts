//import { Directive, ElementRef, Renderer } from '@angular/core';
import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]' // ''is for tag selector, ex: <dirHighlight></dirHighlight> | [] is for attribute selector <div dirhighlight>Some text</div>
})
export class HighlightDirective {
    @HostListener('mouseenter') mouseover() {
        this.backgroundColor = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave() {
        this.backgroundColor = this.defaultColor;
    }
    @HostBinding('style.backgroundColor') get setColor() {
        return this.backgroundColor;
    }
    @Input() defaultColor = 'white';
    @Input('highlight') highlightColor = 'green';
    private backgroundColor: string;

  //constructor(private elementRef: ElementRef, private renderer: Renderer) {
  constructor() {
      //this.elementRef.nativeElement.style.backgroundColor = 'green';   bad practice to change element's style directly
      //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  ngOnInit() {
      this.backgroundColor = this.defaultColor;
  }

}
