import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import './DogDetails.css'

const DogDetails = ({dogs}) => {
    const { name } = useParams()
    const dog = dogs.filter(dog => (dog.name.toLowerCase() === name))[0]
    return ( !dog ? <Navigate to='/dogs' /> :
             (<div className='DogDetails' >
                <h1>{dog.name}</h1>

                <img src={dog.src} alt={dog.name} width="500px" />
                <div className='DogDetails-details'>
                    <ul>
                        <li>Age: {dog.age}</li>
                        <li>Facts: 
                            <ul>
                                {dog.facts.map(fact=> (<li key={fact} >{fact}</li>))}
                            </ul>
                        </li>
                    </ul>
                </div>
                
             </div> )
    )   
}

export default DogDetails