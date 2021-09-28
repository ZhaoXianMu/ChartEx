import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';
import Config from 'app/main/components/common/Config'

class prodService extends FuseUtils.EventEmitter {

    getAllProducts = () => {
        
        return new Promise((resolve, reject) => {
            axios.get( "http://192.168.0.7:8070/prods/get", {
                
            })
                .then(response => {
                    console.log( ' service data =', response.data )
                    if ( response.data )
                    {                       
                        console.log( ' service data =', response.data )
                        
                        resolve(response.data);
                    }
                    else
                    {                        
                        reject(response);
                    }
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    };
  
    
}

const instance = new prodService();

export default instance;
