import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface UserInterface {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users$: Observable<UserInterface[]> = of([
    {
      id: 1,
      name: 'Vasya',
      description: 'abcde'
    },
    {
      id: 2,
      name: 'Lena',
      description: 'ABCDE'
    }
  ]);

  public getUsers$(): Observable<UserInterface[]> {
    return this.users$;
  }

}
