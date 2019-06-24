import React from 'react';

/* find preferred language of user */
const LanguageContext = React.createContext({
    lang: window.navigator.language,
    setLang: () => {
        
    }
});

export default LanguageContext;