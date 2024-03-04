import MyCards from "./MyCards";

const Grilla = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4">
          <MyCards
            image="https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734_640.jpg"
            name="GASPAR"
            descripcion="Perrito rescatado del incendio de Quilpue ,sus patitas quemadas ya sanaron y nadie lo ha reclamado "
            color="danger"
            raza="MEstizo de cooker"
          />
        </div>
        <div className="col-md-3 mb-4">
          <MyCards
            image="https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_640.jpg"
            name="BUWALA"
            descripcion="Perrito encontrado recien nacido en muy malas condiciones,busca un hogar . "
            color="success"
            raza="Boxer"
          />
        </div>
        <div className="col-md-3 mb-4">
          <MyCards
            image="https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723_640.jpg"
            name="PEKITAS"
            descripcion="Perrita de uso de reproduccion , rescatada por maltrato , se entrega esterilizada "
            color="warning"
            raza="Bulldog "
          />
        </div>
        <div className="col-md-3 mb-4">
          <MyCards
            image="https://cdn.pixabay.com/photo/2021/07/05/14/07/dog-6389277_640.jpg"
            name="SMAIL"
            descripcion="Perrito extremadamente dulce, castrado de caracter dulce. Convive bien con gatos y perros "
            color="primary"
            raza="Corgi mestizo"
          />
        </div>
      </div>
    </div>
  );
};

export default Grilla;