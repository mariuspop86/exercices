import { useReducer, useEffect } from 'react'
import './App.css'
import {reducer, initialState} from './state/state'
import Exercise from './components/Exercise'
import Results from './components/Results'
import Layout from './components/Layout'
import NoMatch from './components/NoMatch'
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { count, max } = state;

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
          <Route path="results" element={<Results state={ state } dispatch={ dispatch } />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App