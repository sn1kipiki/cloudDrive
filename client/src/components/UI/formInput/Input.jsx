import React from 'react'

function Input({value, onChangeHandler, text, iconImg, type}) {
  
  return (
    <div className='auth-form__field'>
    <input type={type} value={value}  onChange={(e)=> onChangeHandler(e.target.value)} className='auth-form__input' required/>
    <label className='auth-form__text'>{text}</label>
    <img className='auth-form__icon' src={iconImg} alt="email icon" />
</div>
  )
}

export default Input