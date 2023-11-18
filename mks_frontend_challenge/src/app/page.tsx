
"use client";

import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import axios from 'axios'
import { Product } from './types/ProductTypes'
import styles from './page.module.scss'
import SkeletonLoader from './components/SkeletonLoader'


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC');
        setTimeout(() => {
          setProducts(response.data.products);
          setLoading(false);
        }, 1200);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  return (
    <main>
      <Header />
      <section className={styles.productsGrid}>
        {loading ? (
          Array.from({ length: 8 }, (_, index) => <SkeletonLoader key={index} />)
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </section>
    </main>
  )
}
