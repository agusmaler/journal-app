import React from 'react';

export const NotesAppBar = () => {



    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}

            />

            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}