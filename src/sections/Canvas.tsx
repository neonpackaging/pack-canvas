import React, { useContext } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { AppContext } from '../contexts/AppContext.ts';

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
    <section className="canvas">
      
    </section>
  )
}

export default Canvas;