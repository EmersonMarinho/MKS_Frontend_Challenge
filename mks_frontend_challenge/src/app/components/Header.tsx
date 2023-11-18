import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import styles from './Header.module.scss'; // Ensure you have a CSS module for styling

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MKS <span className={styles.sistemas}>Sistemas</span></h1>
      <div className={styles.cartContainer}>
        <ShoppingCartIcon className={styles.cartIcon} />
        <span className={styles.cartCount}>0</span>
      </div>
    </header>
  );
};

export default Header;
