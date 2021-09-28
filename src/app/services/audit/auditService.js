import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';
import Config from 'app/main/components/common/Config'

class auditService extends FuseUtils.EventEmitter {

    init()
    {
     
    }
   
    auditTrail = () => {
        let access_token = localStorage.getItem('jwt_access_token') || "";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

        return new Promise((resolve, reject) => {
            axios.get( Config.get_audit_trail, {
                data: {
                    
                }               
            })
                .then(response => {
                    if ( response.data )
                    {                        
                        resolve(response.data);
                    }
                    else
                    {                        
                        reject('Failed.');
                    }
                })
                .catch(error => {
                    reject('Failed.');
                });
        });
    };

    auditTrailById = ( id ) => {
        let access_token = localStorage.getItem('jwt_access_token') || "";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

        return new Promise((resolve, reject) => {
            axios.get( Config.get_audit_trail_by_id + id, {
                
            })
                .then(response => {
                    if ( response.data )
                    {                        
                        resolve(response.data);
                    }
                    else
                    {                        
                        reject('Failed.');
                    }
                })
                .catch(error => {
                    reject('Failed.');
                });
        });
    };
          
    createAuditTrail = ( audit ) => {
        let access_token = localStorage.getItem('jwt_access_token') || "";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

        return new Promise((resolve, reject) => {
            axios.post( Config.create_audit_trail, {
                
                    "companyId": audit.companyId,
                    "userId":   audit.userId,
                    "action":  audit.action,
                    "controller": audit.controller,
                    "actionArguments": audit.actionArguments
               
            })
                .then(response => {
                    if ( response.data )
                    {                        
                        resolve(response.data);
                    }
                    else
                    {                        
                        reject('Failed.');
                    }
                })
                .catch(error => {
                    reject('Failed.');
                });
        });
    };
  
    getAuditTrailByCompanyId = ( ) => {
        let access_token = localStorage.getItem('jwt_access_token') || "";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

        return new Promise((resolve, reject) => {
            axios.get( Config.get_audit_trail_by_companyId, {
               
            })
                .then(response => {
                    if ( response.data )
                    {                        
                        resolve(response.data);
                    }
                    else
                    {                        
                        reject('Failed.');
                    }
                })
                .catch(error => {
                    reject('Failed.');
                });
        });
    };


}

const instance = new auditService();

export default instance;
