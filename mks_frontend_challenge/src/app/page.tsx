
"use client";

import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import axios from 'axios'
import { Product } from './types/ProductTypes'
import styles from './page.module.scss'


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);


  return (
    <main>
      <Header />
      <section className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
