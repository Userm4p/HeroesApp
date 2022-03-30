import {heroes} from '../data/heroes';

export const getHeroesByName = (name = '') => {

    console.log('1')

    if(name.length === 0){
        return []
    }

    name = name.toLowerCase();

    return heroes.filter( heroes => heroes.superhero.toLocaleLowerCase().includes(name));

}