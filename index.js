import React from 'react';

const nametable = (props) => {
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                {props.map((name) => <tr>{name}</tr>)}
            </table>
        </>
    )
}


export default nametable;