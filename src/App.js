import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Loader from './Components/Loader';
import { useEffect } from 'react';
import Nav from './Components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { allData } from './Actions';
import axios from "axios"
function App() {
  let dispatch = useDispatch()
  let state = useSelector(state => state.mainReducer)
  useEffect(()=>{
let call = async () => {
  let url = axios.get(`https://dummyjson.com/products?limit=10`).then(res=> dispatch(allData(res.data.products)))
  
 
}
call()

  },[dispatch])
console.log(state)
  return (
    <>
    {/* <Loader/> */}
    <Nav/>


    </>
  );
}

export default App;
