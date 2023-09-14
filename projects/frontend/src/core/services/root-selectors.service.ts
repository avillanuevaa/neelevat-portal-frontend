import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRootStore } from '../interfaces/root-store.interface';
import { IOrganisationOption } from '../interfaces/organisations.interface';
import { RootStoreService } from './root-store.service';

@Injectable({
  providedIn: 'root'
})
export class RootSelectorsService {

  constructor(
    private rootStore: RootStoreService
  ) { }

  public get organisation$(): Observable<IOrganisationOption> {
    return this.rootStore.rootStore.pipe(
      map((store: IRootStore) => store.organisation),
    );
  }

  public get organisationName$(): Observable<string> {
    return this.rootStore.rootStore.pipe(
      map((store: IRootStore) => store.organisation.name),
    );
  }

  public get organisationLogo$(): Observable<string> {
    return this.rootStore.rootStore.pipe(
      map((store: IRootStore) => store.organisation.logo),
    );
  }

  public get organisationClass$(): Observable<string> {
    return this.rootStore.rootStore.pipe(
      map((store: IRootStore) => store.organisation.class),
    );
  }
}
