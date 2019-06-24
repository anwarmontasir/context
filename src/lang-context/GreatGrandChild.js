import React, { Component } from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './LanguageContext';

export default class GreatGrandChild extends Component {

    /* Static properties are properties of a class, not of an instance of a class. https://medium.com/front-end-weekly/understanding-static-in-javascript-10782149993 */

    static contextType = LanguageContext;

    render() {
        const copy = languageSpecificCopy[this.context.lang] || {};
        return (
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button onClick={() => this.context.setLang('klingon')}>
                    Klingon!{' '}
                    <span role='img' aria-label='klingon'>🖖</span>
                </button>
            </section>
        )
    }
}