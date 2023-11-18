import React from 'react';
import styles from './Skeleton.module.scss'

const SkeletonLoader = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.image}></div>
      <div className={styles.text}></div>
      <div className={styles.text}></div>
      <div className={styles.text}></div>
      <div className={styles.button}></div>
    </div>
  );
};

export default SkeletonLoader;