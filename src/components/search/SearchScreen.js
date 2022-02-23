import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../helpers/getHeroesByName'
import { HeroCard } from '../hero/HeroCard';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { useMemo } from 'react';


export const SearchScreen = () => {


const navigate = useNavigate(); 
const location = useLocation();

const { q = '' } = queryString.parse(location.search)


const [ formValues, handleInputChange ] = useForm({
  searchText: q,
});

const { searchText } = formValues;


const filteredHeroes = useMemo(() => getHeroesByName(q), [ q ]);

const handleSearch = ( e ) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  }
    
    return (
      <div>
        <h1>Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Search for some hero...</h4>
            <hr />

            <form onSubmit={ handleSearch }>
              <input 
                type="text" 
                placeholder="Type here to search"
                className="form-control"
                name="searchText"
                value={ searchText }
                autoComplete="off"
                onChange={ handleInputChange }
              />

              <button
                className="btn btn-outline-primary mt-2 btn-block"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {
              (q === '') ? 
                <div className='alert alert-info'>Search for a hero </div>
              : (filteredHeroes.length === 0) && <div className='alert alert-danger'>No results for: { q } </div>
            }

            {
              filteredHeroes.map( hero => (
                <HeroCard 
                    key={ hero.id } 
                    { ...hero }
                />
              ) )
            }

          </div>
        </div>
      </div>
    )
    
  };