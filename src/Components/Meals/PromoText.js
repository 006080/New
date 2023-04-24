import React from 'react';
import styles from './PromoText.module.css';

const PromoText = (props) => {
  return (
   <section className={styles['promo-text']}>
    <h2>The Best Donuts in Town</h2>
      <p className={['promo-text h2']}>
      A Donut is a round or ring-shaped, deep-fried bakery product, with or without filling. Donuts filled with mostly vegetables or fruit are called beignets.
<br></br>
<br></br>
Dumpling in the narrow sense of the word is a donut without filling with a hole in the middle. The hole is designed so that the donut extracted from the hot oil is strung on a rod, from which the product is then placed in a bag or on a plate for the buyer.
      </p>
   </section>
  )
};

export default PromoText;