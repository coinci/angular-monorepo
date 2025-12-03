import { CanActivateFn } from '@angular/router';

export const myGuardGuard: CanActivateFn = (route, state) => {

  // return new RedirectCommand(UrlTree.fromUrl('/moon-lab'));
  if(state.url === '/Labs') {
    return true;
  }

  if(route.paramMap.get('id') === '100') {
    console.log('====> Access to Lab 100 is forbidden by myGuardGuard');
    return false;
  }

   return true;
};
