import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { Product } from "../types/ProductTypes";
import styles from "./ProductCard.module.scss";

interface ProductProps {
    product: Product;
}

function ProductCard({ product }: ProductProps) {
    return (
      <div className={styles['product-card']}>
        <Image
          src={product.photo}
          alt={product.name}
          width={250}
          height={250}
          className={styles['product-image']}
        />
        <div className={styles['product-name-and-price']}>
          <h3 className={styles['product-name']}>{product.name}</h3>
          <div className={styles['price-tag']}>R${product.price}</div>
        </div>
        <div className={styles['compare-button-container']}>
        <p className={styles['product-description']}>{product.description}</p>
        <button className={styles['buy-button']}>
          <ShoppingBagIcon className={styles['shopping-bag-icon']} />
          Comprar
        </button>
        </div>
      </div>
    );
  }
  
export default ProductCard;
