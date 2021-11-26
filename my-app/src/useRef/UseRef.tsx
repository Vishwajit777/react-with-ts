import React, { useRef } from 'react'

export const UseRef = () => {
    const inputEl = useRef<HTMLInputElement>(null!)
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
      <div className="pb-3">
      <input ref={inputEl} type="text" />
      </div>
      
       <div>
       <button className="btn btn-outline-primary" onClick={onButtonClick}>Focus the input</button>
       </div>
        
      </>
    );
}
