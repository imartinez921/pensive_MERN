import React from 'react';
import parse from "html-react-parser";
import ExternalLink from '../external_link';
import '../../assets/css/08-dictionary.css'

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
            <span>{errors[0]}</span>
        ))}
    if (definitions === undefined || definitions.length)
        {(display = (
            definitions.map( (def, i) => (
                <li key={`${def.definition}-${i}`}>
                    <span id="part-of-speech">({def.partOfSpeech})</span> <span id='definition-text'>"{parse(def.definition)}" </span>
                    <ExternalLink url={def.sourceUrl}>From {def.sourceName}</ExternalLink>
                    <p/>
                </li>
            ))
        ))}
    let relationshipType = synonyms[0];
    const synMap = synonyms.slice(1);
    if (synonyms === undefined || synonyms.length)
        {(display = (
                synMap.map( (syn, i) => (
                    <button key={`${syn}-${i}`} id="syn-item" onClick={handlePrevQuery} value={syn}>{syn}</button>
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

    return (
        <>
            <div className='search-results'>
                <h3>{relationshipType}</h3>
                {display}
            </div>
            <div className='queries'>
                {displayQueries}
            </div>
            <div className='attribution-footer'>
                <ExternalLink url={wordUrl}>Powered by </ExternalLink>
                <img src="https://www.wordnik.com/img/wordnik-logo-300px.png" alt="WordNik" width='50'/>
            </div>
        </>
    )
}

export default DictionaryWindow;