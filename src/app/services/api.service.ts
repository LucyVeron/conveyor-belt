import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../interfaces/item";

const url = 'assets/menu.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getMenu(): Observable<Item[]> {
    return this.http.get<Item[]>(url);
  }
}
