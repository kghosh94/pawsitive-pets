import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model'; // Assuming have a Product model defined
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProductService {

private jsonUrl = 'assets/all-products.json'; // Path to the JSON file

constructor(private http: HttpClient) {}

getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id)));
    }

  }