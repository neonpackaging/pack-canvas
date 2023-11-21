import React from 'react';

import styles from '../styles/sections/Sidebar.module.scss';

function Sidebar() {
  return (
    <section id={styles.sidebar}>
      <div>
        <div className={styles['sidebar-item']}>
          <div>
            <span className="material-symbols-outlined">
              inventory_2
            </span>
          </div>
          Boxes
        </div>
        <div className={styles['sidebar-item']}>
          <div>
            <span className="material-symbols-outlined">
              local_mall
            </span>
          </div>
          Paper Bags
        </div>
        <div className={styles['sidebar-item']}>
          <div>
          <span className="material-symbols-outlined">
            restart_alt
            </span>
          </div>
          Reset
        </div>
      </div>
      {/* <div className={styles['sub-sidebar']}>
        <div className={styles['sub-sidebar--option']}>
          <img src="./products/magnetic-gift-box/white/empty.webp" alt="Product" />
        </div>
      </div> */}
    </section>
  )
}

export default Sidebar;