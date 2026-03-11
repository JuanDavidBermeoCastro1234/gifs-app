import { useRef, useState } from "react";
import type { Gif } from "../interface/gif-interface";
import { getGiftByQuery } from "../actions/get-gifs-query.actions";



export const useGifs = () => {
    //usestate que actualiza la busquedas que se van haciendo a la api
    const [previusTerms, setPreviusTerms] = useState<string[]>([]);
    //usestate que actualiza lo que muestra los gifs
    const [gifs, setGifs] = useState<Gif[]>([])
    //elementos que no se van a re renderizar junto con el componente
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        const gif = await getGiftByQuery(term);
        setGifs(gif)

    };


    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previusTerms.includes(query)) return;

        setPreviusTerms([query, ...previusTerms.splice(0, 8)])

        const gif = await getGiftByQuery(query);
        setGifs(gif)

        gifsCache.current[query] = gif
    }

    return {
        //values
        gifs,
        previusTerms,
        //action
        handleTermClicked,
        handleSearch,
    }
}
