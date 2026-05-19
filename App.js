import FlexEjercicio from './componente/FlexEjercicio';
import TodoApp from './componente/AppPrincipal';
import Estilos from './componente/Estilos';

export default function App() {

  const modo = "app principal"; 

  return (
    <>
      {modo === "flex" && <FlexEjercicio />}
      {modo === "app principal" && <TodoApp />}
      {modo === "style" && <Estilos/>}
    </>
  );
}

