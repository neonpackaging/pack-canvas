import React from 'react';

import styles from '../styles/components/Dropdown.module.scss';

function Dropdown({ items }) {
  const handleSelect = (sku) => {
    console.log(sku);
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.ddbutton}>Dropdown</button>
      <div className={styles.mainlist}>
        {
          items.map((i) => (
            <div className={styles.mainlist_item} key={i.name}>
              {i.name}
                {
                  i.sublist ? (
                    <div className={styles.sublist}>
                      {i.sublist.map((s) => (
                          <div onClick={() => handleSelect(s.sku)} className={styles.sublist_item} key={s.sku}>{s.color}</div>
                        )
                      )}
                    </div>
                  ) : null
                }
            </div>   
          ))
        }
      </div>
    </div>
  )
}

export default Dropdown;