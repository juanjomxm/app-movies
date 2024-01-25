import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SearchMovies } from "./SearchMovies";

function App() {
  return (
    <React.Fragment>
      <h1>Movies</h1>
      <SearchMovies/>
    </React.Fragment>
  );
}

export { App }
