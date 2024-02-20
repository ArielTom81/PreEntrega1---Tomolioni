import '../../ItemCount/ItemCount.css'

function Button ( { children, handleClick, ...props} ) {
  return (
    <button className='boton' onClick={handleClick} {...props}>
        {children}
    </button>
  );
}

export default Button