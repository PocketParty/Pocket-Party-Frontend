import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuVisibilityService {
private isMenuVisible = new BehaviorSubject<boolean>(true);
menuVisibility$ = this.isMenuVisible.asObservable();  

 hideMenu() {
   this.isMenuVisible.next(false);
 }

 showMenu() {
   this.isMenuVisible.next(true);
 }
}
