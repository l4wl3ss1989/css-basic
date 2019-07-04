import React from 'react';

import styles from './App.module.scss';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <section id={styles.Product__Overview}>
            <h1>Get the freedom you deserve.</h1>
        </section>
        <h1>Work some motivation required ...</h1>
        <p>Work some motivation required ...</p>
      </main>
    </div>
  );
}

export default App;
