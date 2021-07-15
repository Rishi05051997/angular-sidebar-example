import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuSmall:boolean = true;
  sideBarOpen: boolean = false;
  constructor(private el:ElementRef) { }

 // Your initial click listener on the host element
 @HostListener('click', ['$event'])onClick(event:any) {
   console.log(event)
      event.stopPropagation();
   if (event.target.id == "collapseBtn") {
      document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
      document.body.classList.add('push');
      this.sideBarOpen = true;
   }
   else {
    if (this.sideBarOpen) {
       document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
       document.body.classList.remove('push');
       this.sideBarOpen = false;
    }
   }
 }


  // Click listener on the window object to handle clicks anywhere on
  // the screen.
  @HostListener('window:click', ['$event']) onOutsideClick(event:any){
    if(this.sideBarOpen && !this.el.nativeElement.contains(event.target)){
      this.sideBarOpen=false;
      document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
      document.body.classList.remove('push');
    }
  }

  ngOnInit() {
  }
  toggleSideBar() {
  }
}
