import { Injectable  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class  
 MenuVisibilityService {
  private menuVisibilitySource = new BehaviorSubject<boolean>(true);
  menuVisibility$ = this.menuVisibilitySource.asObservable();

  constructor(router: Router) {
    router.events.subscribe(() => {
      const currentUrl = router.url;
      const isLoginPage = currentUrl === '/login';
      const isCadastroPage = currentUrl.includes('/cadastro');
      const isEditPage = currentUrl.includes('/edit-empresa');

      this.menuVisibilitySource.next(!isLoginPage && !isCadastroPage && !isEditPage);
    });
  }
}
