import { useReducer, useEffect } from 'react'
import './App.css'
import {reducer, initialState} from './state/state'
import Exercise from './Exercise'
import Results from './Results'
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { count, exercises, max } = state;

  const navigate = useNavigate();

  useEffect(() => {
    if (count >= max ) {
      navigate("/results");
    }
  }, [count, max]);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Exercise state={ state } dispatch={ dispatch } />} />
          <Route path="results" element={<Results exercises={ exercises } dispatch={ dispatch } />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


function Layout() {
  return (
    <Outlet />
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}