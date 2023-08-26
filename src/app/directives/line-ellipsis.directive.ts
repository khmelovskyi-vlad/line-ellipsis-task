import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLineEllipsis]'
})
export class LineEllipsisDirective {
  //can be set in a directive if needed in the future
  appLineEllipsis = 2;
  htmlElement : HTMLElement;
  overflowStyle = 'hidden';
  display = '-webkit-box';
  webkitBoxOrient = 'vertical';
  overflowWrap = 'break-word';
  
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el.nativeElement;
  }

  ngOnInit() {
    const webkitLineClamp = this.appLineEllipsis.toString();

    this.htmlElement.style.overflow = this.overflowStyle;
    this.htmlElement.style.display = this.display;
    this.htmlElement.style.webkitBoxOrient = this.webkitBoxOrient;
    this.htmlElement.style.webkitLineClamp = webkitLineClamp;
    //uncomment if need to wrap long words
    // this.htmlElement.style.overflowWrap = this.overflowWrap;
  }

}
