import { Component,
         OnInit,
        Input,
        OnChanges, 
        SimpleChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,AfterViewChecked, OnDestroy, ViewChild,ElementRef, ContentChild
       } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewChecked,AfterViewInit,OnDestroy{
 @Input('srvElement') element : {type: string , name:string , content:string};
 @Input() name:string;
 @ViewChild('heading') header:ElementRef;
 @ContentChild('contentPragraph') paragraph :ElementRef;
   constructor() {

    console.log('constructor called');
    console.log('changes');
   }


   ngOnChanges(changes : SimpleChanges){

   }

  ngOnInit() {
    console.log('On init called');
    console.log('Text Content' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log('do check called');
  }

  ngAfterContentInit(){
    console.log('ng after content init');
  }
ngAfterContentChecked(){
  console.log('ng after content checked');
}

ngAfterViewInit(){
  console.log('ng after view init');
}
ngAfterViewChecked(){
console.log('ng after view checked');
}

ngOnDestroy(){
  console.log('ng on destroy called')
}


}
