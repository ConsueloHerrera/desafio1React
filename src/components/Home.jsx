import CardPizza from "./CardPizza";
import Header from "./Header";

function Home() {
  return (
    <>
    <Header></Header>
      <div className="container mt-4 container-header">
        <div className="row">
          <div className="col-md-4">
            <CardPizza
              name="Pizza Napolitana"
              price={5950}
              ingredients="Mozarella, tomates, jamón, orégano"
              img='/src/assets/img/napolitana.png'
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Pizza Española"
              price={6950}
              ingredients="Mozarella, gorgonzola, parmesano, provolone"
              img='/src/assets/img/española.png'
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Pizza Pepperoni"
              price={6950}
              ingredients="Mozarella, pepperoni, orégano"
              img='/src/assets/img/pepperoni.png'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
