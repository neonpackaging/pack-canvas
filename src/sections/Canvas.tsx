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

  const handleClick = () => {
    document.querySelector('.uploader > input[type=file]').click();
  }

  return (
    <section className="canvas">
      <div className="preview" style={{ backgroundColor: appContext.backgroundColor }}>
        <div className="product" style={{ backgroundImage: 'url(./products/paperbag-min.png)' }}>
        <div
          onClick={handleClick}
          style={{
            backgroundImage: appContext.image ? 'url(' + appContext.image + ')'
              : 'url(./upload-your-image.png)'
          }}
          className={appContext.image ? 'custom-brand' : 'custom-brand clickable'}
          alt="Product view"
        />
        </div>
      </div>
      <FileUploader id="uploader" classes="uploader" handleChange={handleChange} />
    </section>
  )
}

export default Canvas;