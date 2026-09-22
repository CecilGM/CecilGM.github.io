import { useState } from 'react';

function Carrusel({ imagenes }) {
  const [indiceActual, setIndiceActual] = useState(0);

  const irAnterior = () => {
    setIndiceActual((prev) => 
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  const irSiguiente = () => {
    setIndiceActual((prev) => 
      prev === imagenes.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="carrusel">
      <button onClick={irAnterior} className="carrusel-boton carrusel-boton-izq">
        ‹
      </button>

      <img 
        src={imagenes[indiceActual]} 
        alt={`Imagen ${indiceActual + 1} de ${imagenes.length}`}
        className="carrusel-imagen"
      />

      <button onClick={irSiguiente} className="carrusel-boton carrusel-boton-der">
        ›
      </button>

      <div className="carrusel-indicadores">
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={`carrusel-punto ${i === indiceActual ? 'activo' : ''}`}
            onClick={() => setIndiceActual(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carrusel;