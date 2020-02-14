import React from 'react'
import { languages } from "../data";

const Languages = () => {
    return (
        <>
        <h2 className='languages-title'>Languages & Frameworks</h2>
        <div className='languages-container'>
                    
            {languages.map(language => {
                return (
                    <div className='language-card'>
                        <div className='language-logo'>{language.logo}</div>
                        <h4>{language.name}</h4>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Languages