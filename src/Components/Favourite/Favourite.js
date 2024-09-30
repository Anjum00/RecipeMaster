import React, { useRef } from 'react';
import styles from './Favourite.module.css';

function Favourite() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className={`${styles.Favourite}`}>
      <div className={`${styles.panel}`}>
        <button className={`${styles.scrollButton} ${styles.left}`} onClick={scrollLeft}>
          &lt;
        </button>

        <div className={`${styles.containerWrapper}`} ref={containerRef}>
          <div className={`${styles.container}`} style={{}}>🤎</div>
          <div className={`${styles.container}`} style={{}}>🧡</div>
          <div className={`${styles.container}`} style={{}}>💛</div>
          <div className={`${styles.container}`} style={{}}>💚</div>
          <div className={`${styles.container}`} style={{}}>💙</div>
          <div className={`${styles.container}`} style={{}}>💜</div>
        </div>

        <button className={`${styles.scrollButton} ${styles.right}`} onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Favourite;
