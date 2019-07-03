import React from 'react';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <main>
        <section>
            <h1>Get the freedom you deserve.</h1>
        </section>
        <section className={styles.Section}>
            <h1>Choose your plan</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
