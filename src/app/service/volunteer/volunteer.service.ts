import { Injectable } from '@angular/core';
import { GenericService } from '../common/generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService extends GenericService{

  constructor(
    http: HttpClient,
  ) {
    super(http);
    this.apiUrl +- '/volunteer';
   }
}
