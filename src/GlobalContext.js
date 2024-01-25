import React from "react";

const GlobalContext = React.createContext()

function ContainerContextMovies({children}){
    const [viewData, setViewData] = React.useState([])
    const [inputSearchResult, setInputSearchResult] = React.useState('')

    const searchResult = viewData.filter(item =>{
        return item.title.toLocaleLowerCase().includes(inputSearchResult.toLocaleLowerCase())
    })

    return(
        <GlobalContext.Provider value={{
            viewData, 
            setViewData,
            searchResult,
            inputSearchResult, 
            setInputSearchResult
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext }
export { ContainerContextMovies }