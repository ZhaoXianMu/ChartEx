import $ from "jquery";

class Config {
    constructor() {
        this.config = {}
        this.configReady = false;
        
        this.get_all_products = "http://192.168.0.7:8070/prods/get";
        
        this.TOKEN = ""
    }

    init(cb) {

        $.get("/server/config.json").then((ret)=>{

            console.log("config.json = ", ret )
            this.config = ret;
            this.get_all_products = ret.get_all_docs;
            this.configReady = true;
            cb(null, true)
        }, (err)=>{
            cb(err, false)
        })
    }
}

export default (new Config());