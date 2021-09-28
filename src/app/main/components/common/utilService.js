
import Cache from "./Cache"

import $ from 'jquery'

import moment from 'moment'

class UtilService {
   
    static getLanguage() {
        var lang = 'sp'
        var currLang = localStorage.getItem('jq-appLang')

        if ( currLang === 'en')
            lang = 'en';

        return lang;
    }

    static getLangByCode(code) {
        return Cache.getLang(this.getLanguage(), String(code)) || String(code);
    }

    static initLanguage() {
        $("[data-localize]").localize('server/i18n/site', { language: this.getLanguage() });
    }

    static getObjectValueByStringPath (o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, '');           // strip a leading dot
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    }

    static getDateTime(dateTimeStr) {
        if (dateTimeStr && dateTimeStr !== '' && dateTimeStr !== '0001-01-01T00:00:00Z')
            return moment.unix(new Date(dateTimeStr).getTime() / 1000).format("YYYY-MM-DD HH:mm:ss");
        return '-'
    }
}

export default UtilService;