import React from 'react'
import {Link } from 'react-router-dom'
import './DogList.css'

const DogList = ({dogs}) => {

    return (
        <div className='DogList'>
            <h1>Dogs</h1>
            <h2>Here is our dogs list. Clcik on a dog to get more info.</h2>
                <div className='DogList-list'>
                    {dogs.map(dog=> (
                        <div className='DogList-dog' key={dog.name}> 
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                                <h3>{dog.name}</h3>
                                {<img src={dog.src} alt={dog.name} width="200px"/>}
                            </Link>
                        </div>))}
                </div>
        </div>
    )
}

export default DogList