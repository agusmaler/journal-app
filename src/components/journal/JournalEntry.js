
import React from 'react';


export const JournalEntry = () => {


    return (

        <div 
            className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
        >
                
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'
                    }}
                ></div>
            

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Titulo de la entrada
                </p>
                <p className="journal__entry-content">
                    escribir algo,escribir algo,escribir algo,escribir algo,
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span> Agosto </span>
                <h4> 28 </h4>
            </div>

        </div>
    )
}