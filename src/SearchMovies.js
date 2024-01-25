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