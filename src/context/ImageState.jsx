import React, { useEffect, useState } from 'react'
import ImageContext from './ImageContext'

const ImageState = (props) => {
    const apikey = '48187514-953107941c7a53e55110e24cd'
    const [imagedata, setimagedata] = useState([])
    const [loading, setloading] = useState(false)
    const [query, setQuery] = useState('india')

    useEffect(() => {
        setloading(true)
        const fetchapi = async () => {
            const api = await fetch(`https://pixabay.com/api/?key=${apikey}&q=${query}&image_type=photo&per_page=100`)
            const data = await api.json()
            setimagedata(data.hits)
            setloading(false)
        }
        fetchapi()
        setloading(false)
    },[query])

    const Fetchimagebycategory = async(category) => {
      setloading(true)
        const api = await fetch(`https://pixabay.com/api/?key=${apikey}&category=${category}&image_type=photo&per_page=100`)
        const data = await api.json()
        setimagedata(data.hits)  
        setloading(false)

    };
  return (
    <ImageContext.Provider value={{imagedata,Fetchimagebycategory,setQuery}}>
      {props.children}
    </ImageContext.Provider>
  )
}
export default ImageState
