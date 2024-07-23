import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setCountProduct } from '../redux/CountSlice/CountSlice';
import axios from 'axios';

function Cound() {
    const dispatch = useDispatch()
    async function getService () {
        try {
            const res = await axios.get("/api/v1/products/count/")
            dispatch(setCountProduct(res))
        } catch (error) {
            console.log(error)
            
        }

    }
    useEffect(()=>{
        getService()
    },[])

  return null;
}

export default Cound
