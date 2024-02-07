import React, { useContext } from 'react';
import { CirclePicker  } from 'react-color';
import { AppContext } from '../contexts/AppContext.ts';

function Sidebar() {
  const appContext = useContext(AppContext);

  const handleChangeBackground = (color) => {
    appContext.setBackgroundColor(color.hex);
  }

  const handleRemoveImage = () => {
    appContext.setImage('');
  }

  const handleRemoveBackground = () => {
    appContext.setBackgroundColor('transparent');
  }

  const handleResetAll = () => {
    if (window.confirm('Are you sure you want to reset?')) {
      appContext.setImage('');
      appContext.setBackgroundColor('transparent');
    }
  }

  return (
    <section className="sidebar">
      <div className="content-block">
        <div className="content-title">Background color:</div>
        <div>
          <CirclePicker onChange={handleChangeBackground}  />
        </div>
      </div>
      <div className="content-block">
        <button type="button" onClick={handleRemoveImage}>Remove image</button>
      </div>
      <div className="content-block">
        <button type="button" onClick={handleRemoveBackground}>Remove background color</button>
      </div>
      <div className="content-block">
        <button type="button" onClick={handleResetAll}>Reset all</button>
      </div>
    </section>
  )
}

export default Sidebar;