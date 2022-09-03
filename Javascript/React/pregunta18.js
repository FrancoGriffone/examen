import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {  
    document.title = `Cliqueaste ${count} veces`; 
    });
  return (
    <div>
      <p>Cliqueaste {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquea aquí
      </button>
    </div>
  );
}

/*<div className='button'>
      <Button onClick={() => counter > initial && setCounter(counter - 1)}>
        -
      </Button>
      <p> {counter} </p>
      <Button onClick={() => counter < stock && setCounter(counter + 1)}>
        +
      </Button>
    </div>
      

      <Button onClick={() => onAdd(counter)}>Agregar al carrito</Button>
*/