import React, { useContext } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { AppContext } from '../contexts/AppContext.ts';

import styles from '../styles/sections/Canvas.module.scss';

const fileTypes = ["JPG", "PNG", "GIF"];

function Canvas() {
  const appContext = useContext(AppContext);

  const handleChange = (file) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      appContext.setImage(e.target.result);
    }

    reader.readAsDataURL(file);
  }

  return (
    <section id={styles.canvas}>
      <div className={appContext.img ? styles['preview-container'] : ''}>
        {
          appContext.img ? (
            <img className={styles.preview} src={appContext.img} alt="Product" />
          ) : (
            <FileUploader
              name="file"
              classes={styles.dropzone}
              handleChange={handleChange}
              types={fileTypes}
            />
          )
        }
      </div>
    </section>
  )
}

export default Canvas;