import React from 'react';
import parse from "html-react-parser";
import ExternalLink from '../external_link';


const DictionaryWindow = (props) => {    
    const { errors,
        definitions,
        synonyms,
        queries,
        wordUrl,
        handlePrevQuery,
    } = props;

    console.log('THESE ARE PROPS', props);
    console.log('THESE ARE ERRORS', errors);

    let display;
    if (errors === undefined || errors.length !== 0)
        {(display = (
            errors.map( (err, i) => (
                <li key={`${err}-${i}`}>
                    <span>{err}</span>
                </li>
            ))
        ))}
    if (definitions === undefined || definitions.length)
        {(display = (
            definitions.map( (def, i) => (
                <li key={`${def.definition}-${i}`}>
                    <p/>
                    <span id="part-of-speech">({def.partOfSpeech})</span> <span id='definition-text'>"{parse(def.definition)}" </span>
                    <ExternalLink url={def.sourceUrl}>From {def.sourceName}</ExternalLink>
                    <p/>
                </li>
            ))
        ))}
    if (synonyms === undefined || synonyms.length)
        {(display = (
            synonyms.map( (syn, i) => (
                <li key={`${syn}-${i}`}>
                    <p/>
                    <span id="synonym">{syn}</span>
                    <p/>
                </li>
            ))
        ))}
    
    let displayQueries;
    if (queries === undefined || queries.length !== 0)
        {
            (displayQueries = (
            queries.map( (query, i) => (
                <button key={`${query}-${i}`} id="query-item" onClick={handlePrevQuery} value={query}>
                   {query}
                </button>
            ))
        ))}

    const query = 'bluebird'
    return (
        <div>
            <ol>
                {display}
            </ol>
            <div>
                {displayQueries}
                <button onClick={handlePrevQuery} value={query}>yellow</button>
            </div>
            <ExternalLink url={wordUrl}>Powered by </ExternalLink>
            <img src="https://www.wordnik.com/img/wordnik-logo-300px.png" alt="WordNik" width='50'/>
        </div>
    )
}

export default DictionaryWindow;