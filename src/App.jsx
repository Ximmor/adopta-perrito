import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/Header.jsx";
import Grilla from "./componentes/Grilla.jsx";
import Footer from "./componentes/Footer.jsx";

function App() {
  return (
    <>
      <Header titulo="ADOPTA UN PERRITO" />
      <br/>
      <Grilla />
      <br/>
      <Footer texto=" Abre tu hogar a un amigo peludo y descubrirás un amor incondicional que nunca se desvanece. Juntos, crearán recuerdos inolvidables y compartirán alegrías que llenarán tu vida de significado.

      No esperes más. Dale a un perrito la oportunidad de ser parte de tu familia y experimenta el amor inigualable que solo un perro puede brindar.Adoptar un perrito no solo cambiará su vida, sino que también transformará la tuya." />
    </>
  );
}

export default App;
