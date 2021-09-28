

const storageKey    = 'jq-appLang';

export default () => {

    var language = window.navigator.userLanguage || window.navigator.language;
    var defaultLang = "sp"
    if ( language.includes('en') ){
        defaultLang = "en"
    }
    // console.log( "browser languages ========>", language )

    var currLang = localStorage.getItem(storageKey) || defaultLang;

    // Set initial language
    // console.log( "currrLang ====>", currLang )
    setLanguage(currLang);

    function setLanguage(options) {
        localStorage.setItem( storageKey, options )
    }
}