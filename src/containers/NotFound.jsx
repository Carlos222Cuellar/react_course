import React from 'react';

const NotFound = () => (
//para que no se rompa nuetsra app si le queremos pasar mas de una etiquita lo vamos a encerrar entre las etiquietas React.fragment o es lo mismo solo hacerlo asi <> </>
  <>
    <h1>No encontrado</h1>
    <h2>Regresar al home</h2>
  </>
);

export default NotFound;
