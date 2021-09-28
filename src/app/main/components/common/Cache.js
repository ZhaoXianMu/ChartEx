import $        from 'jquery';
import async    from 'async';


class Cache {
    constructor() {
        this.urls = []; //authorized url list
        this.lang = {
            'en': [],
            'sp': [],
        }        
    }
    
    getParameterByName(name) {
        var url = window.location.href;
        console.log("getParameterByName() : window.location.href = ", url)
        name = name.replace(/[\\[\\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    init(cb) {
        console.log("Cache.init()")
        async.parallel([
            (callback) => {                
                async.parallel([
                    (_cb) => {
                        $.get("/server/i18n/site-en.json").then((ret) => {
                            this.lang.en = ret;
                            console.log("en = ", this.lang.en);
                        }, (err) => {
                            _cb(err, null);
                        })
                        $.get("/server/i18n/site-sp.json").then((ret) => {
                            this.lang.sp = ret;
                            console.log("sp = ", this.lang.sp);
                            _cb(null, null);
                        }, (err) => {
                            _cb(err, null);
                        })
                    },
                ], (err, ret) => {
                    err && console.error("System initialize", err, ret)
                    callback(err, ret);
                })
            }
        ], (err, ret) => {
            cb(err, ret);
        })
    }

    initUrl(cb) {
        var token = this.getParameterByName('token')
        
        if ( true ) {
            if(token === null) {
                var user = $.localStorage.get("user")
                console.log("user = ", user)
                if(user === null || user.username === null) {
                    this.launchUrl = window.location.href
                    delete localStorage.token

                    $.localStorage.remove("user");
                    cb(null, null)
                    return
                }
            }
        }
        
        console.log("cache.js -> initUrl() : cache init", $.localStorage.get("user"), localStorage.token, token)
        
    }

    getLang(lang, code) {

        if (!code)
            return "";
        var subCodes = code.split(".");
        var ret = this.lang[lang];

        if (this.lang[lang] === []) {
            console.log("this.lang[lang] === []")
            return code    
        }

        for(var i = 0 ; i < subCodes.length ; i++) {
            var sc = subCodes[i]
            if (ret[sc])
                ret = ret[sc];
            else{
                return code
            }
        }
        return ret;
    }
}

export default (new Cache());