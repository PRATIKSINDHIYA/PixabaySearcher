import React, { useEffect, useState } from 'react'
import ImageContext from './imagecontext'

const ImageState = (props) => {
    const apikey = '48187514-953107941c7a53e55110e24cd'
    const [imagedata, setimagedata] = useState([])
    const [query, setQuery] = useState('india')
    useEffect(() => {
        const fetchapi = async () => {
            const api = await fetch(`https://pixabay.com/api/?key=${apikey}&q=${query}&image_type=photo&per_page=100`)
            const data = await api.json()
            setimagedata(data.hits)
        }
        fetchapi()
    },[query])

    const Fetchimagebycategory = async(category) => {
        const api = await fetch(`https://pixabay.com/api/?key=${apikey}&category=${category}&image_type=photo&per_page=100`)
        const data = await api.json()
        setimagedata(data.hits)
      
    };

  return (
    <ImageContext.Provider value={{imagedata,Fetchimagebycategory,setQuery}}>
      {props.children}
    </ImageContext.Provider>
  )
}
export default ImageState
