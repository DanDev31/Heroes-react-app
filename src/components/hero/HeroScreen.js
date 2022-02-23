import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";

import { getHeroById } from "../../helpers/getHeroesById";

export const HeroScreen = () => {

  const { heroId } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);

  const handleReturn = () => {
    navigate(-1)
  }

  if( !hero ){
    
     return <Navigate to='/' />

  }


  const {
    id,
    superhero,
    alter_ego,
    first_appearance,
    publisher,
    characters,

  } = hero; 

  const imagePath = `/assets/hero-images/${ id }.jpg`;


  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img 
        src={ imagePath } 
        alt={ superhero } 
        className="img-thumbnail"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{ superhero }</h3>
        <ul className="list-group list-gropu-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>{ alter_ego }
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>{ publisher }
          </li>
          <li className="list-group-item">
            <b>First Appeareance: </b>{ first_appearance }
          </li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{ characters }</p>

        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
          Return
        </button>
      </div>
    </div>
  );
};
