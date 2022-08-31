import React from 'react';

const DefinitionWindow = (props) => {
    console.log(props)
    return (
        <div>
            DefinitionWindow
            <div>
                <ol>
                    {/* {props.definitions.map( (def, i) => (
                        <li key={`${def.attributionUrl}-i`}>{def.attributionUrl}</li>
                    ))} */}
                </ol>
            </div>
        </div>
    )
}

export default DefinitionWindow;