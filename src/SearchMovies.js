import React from "react"
import axios from "axios"
import { GlobalContext } from "./GlobalContext"

function SearchMovies(){
    const {
        setViewData,
        searchResult,
        inputSearchResult, 
        setInputSearchResult
    } = React.useContext(GlobalContext)

    const searchMovies = axios.create({
        baseURL: `https://api.themoviedb.org/3/search/movie?query=${inputSearchResult}&page=1&language=es-US`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU3NGI1YTJhMDE5MDFmY2Q1YTA0YjExYWNlZDM3OSIsInN1YiI6IjY0NzY1YzBlMDA1MDhhMDExNmQ0ZTMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EJ93_FGTbMVGugY8apXXcEqx2jYSPexsk6p6C1im25E',
        }
    })

    const viewMovies = async()=>{
        try{
            const {data, status} = await searchMovies.get()

            if(status === 200, 201){
                console.log(data)
                setViewData(data.results)
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div>
            <div>
                <input
                value={inputSearchResult}
                onChange={(event)=>{
                    setInputSearchResult(event.target.value)
                }}
                />
                <button
                onClick={viewMovies}
                >🔍</button>
            </div>

            {searchResult.map((item, index) =>( 
                <div key={index}>
                    <h3>{item.title}</h3>
                        <img
                        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        width={300}
                        height={300}
                        />
                    <p>{item.overview}</p>
                </div>
            ))} 
        </div>
    )
}

export { SearchMovies }



// Api movie db

async function movieDb(){
    const URL = 'https://api.themoviedb.org/3/search/movie?query=avengers&include_adult=true&language=es-US&page=1'
    const res = await fetch(URL, {
        method: 'GET', 
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU3NGI1YTJhMDE5MDFmY2Q1YTA0YjExYWNlZDM3OSIsInN1YiI6IjY0NzY1YzBlMDA1MDhhMDExNmQ0ZTMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EJ93_FGTbMVGugY8apXXcEqx2jYSPexsk6p6C1im25E',
        }
    })
    const data = await res.json()

    if(res.status === 200, 201){
        console.log(data)
    }else{
        console.warn('Hay un error:', res.status)
    }
} // la funcion para buscar peliculas