import React from 'react';
import parse from "html-react-parser";

const DefinitionWindow = (props) => {
    console.log('THESE ARE PROPS', props);
    console.log('THESE ARE ERRORS', props.errors);

    let display;
    (props.errors.length !== 0) ?
        (display = (
            props.errors.map( (err, i) => (
                <li key={`${err}-${i}`}>
                    <span>{err}</span>
                </li>
            ))
        ))
        :
        (display = (
            props.definitions.map( (def, i) => (
                <li key={`${def.definition}-${i}`}>
                    <p/>
                    ({def.partOfSpeech}) {parse(def.definition)}, from, <a href=`${def.sourceUrl}``>{}
                    <p/>
                </li>
            ))
        ))
    
    return (
        <div>
            <div>
                <ul>
                Here is a list
                {display}
                </ul>
            </div>
        </div>
    )
}

export default DefinitionWindow;