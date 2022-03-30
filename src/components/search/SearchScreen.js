import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard} from '../hero/HeroCard';
import queryString from 'query-string'
import { useMemo } from "react";

export const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const {q = ''} = queryString.parse(location.search);

    const [Values, handleInputChange] = useForm({
      searchText: q,
    });



    const {searchText} = Values;

    const heroesFilted = useMemo(() =>  getHeroesByName(q), [q]);
   
    

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }



    return (
      <>
          <h1>Search screen</h1>
          <hr/>
          <div className="row">
            <div className="col-5">
              <h4>Search</h4>
              <hr/>
            
              <form onSubmit={ handleSearch}>
                <input
                  type="text"
                  placeholder="Look for a hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-outline-primary mt-3"
                  type="submit">
                    Search
                  </button>
              </form>

            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr/>
                {
                (q==='') 
                  ? <div className="alert alert-info"> Look for a hero </div> :
                  (heroesFilted.length === 0) && <div className="alert alert-danger"> not found {q}</div>
                }
                {
                  heroesFilted.map(hero => (
                    <HeroCard 
                      key = {hero.id}
                      {...hero} 
                    />
                  ))
                }

            </div>
          </div>
      </>
    )
  }
  