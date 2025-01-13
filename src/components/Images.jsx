import React, { useContext } from 'react'
import ImageContext from '../context/ImageContext';

const Images = () => {
    const { imagedata } = useContext(ImageContext)
    const { Fetchimagebycategory, setQuery } = useContext(ImageContext);

    console.log(imagedata)

    return (
        <>
            <div className='seconds'>
                <div className="header">
                    <div className='seconddiv'>
                        <div className="logo">
                            <img className='logoimg' src="/public/logocopy.svg" alt="" />
                        </div>
                        <div className="butn">
                            <button className='btn'>Login</button>
                        </div>
                    </div>
                </div>

                <div className="secondary">
                    <h1 className='h1'>Stunning free stock photos for download</h1>
                    <div className="butn1">
                        <button onClick={() => Fetchimagebycategory("nature")} className='btn1' >Nature</button>
                        <button onClick={() => Fetchimagebycategory("fashion")} className='btn1' >Fashion</button>
                        <button onClick={() => Fetchimagebycategory("music")} className='btn1' >Music</button>
                        <button onClick={() => Fetchimagebycategory("feelings")} className='btn1'>Feelings</button>
                        <button onClick={() => Fetchimagebycategory("education")} className='btn1'>Education</button>
                        <button onClick={() => Fetchimagebycategory("buildings")} className='btn1' >Buildings</button>
                    </div>
                    <div className="searchbar2">
                        <div className="searching">
                            <img src="/public/searchcopy.svg" alt="" />
                        </div>
                        <div className="newinput">
                            <input onChange={(e) => setQuery(e.target.value)} className='input2' type="text" name="" id="" placeholder='Search for photos' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='main'>
                {imagedata.map((image) => (
                    <div key={image.id}>
                        <div className='item'>
                            <img src={image.largeImageURL} alt="error" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Images;
