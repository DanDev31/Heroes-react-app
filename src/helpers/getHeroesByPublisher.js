import { heroes } from "../data/heroes";

export const getHeroresByPusblisher = ( publisher ) => {

    const validHeroes = ['DC Comics', 'Marvel Comics'];
    if( !validHeroes.includes( publisher )){
        throw new Error (`Sorry, ${ publisher } is not valid publisher!`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher )

}