
import auditService from 'app/services/audit/';

export const AUDIT_TRAIL_ERROR = "AUDIT_TRAIL_ERROR ";
export const AUDIT_TRAIL_SUCESS = "AUDIT_TRAIL_SUCESS";
export const AUDIT_TRAIL_BY_ID_ERROR = "AUDIT_TRAIL_BY_ID_ERROR ";
export const AUDIT_TRAIL_BY_ID_SUCESS = "AUDIT_TRAIL_BY_ID_SUCESS";

export function handleAuditTrail()
{    
    return (dispatch) => 
    auditService.auditTrail()    
            .then((ret) => {
                    return dispatch({
                        type: AUDIT_TRAIL_SUCESS,
                        payload: ret.data
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : AUDIT_TRAIL_ERROR,
                    payload: error
                });
            });      
            
}

export function handleAuditTrailById( id )
{    
    return (dispatch) => 
    auditService.auditTrailById( id )    
            .then((ret) => {
                    return dispatch({
                        type: AUDIT_TRAIL_BY_ID_SUCESS,
                        payload: ret.data
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : AUDIT_TRAIL_BY_ID_ERROR,
                    payload: error
                });
            });      
            
}

export function handleCreateAuditTrail( audit )
{    
    return (dispatch) => 
    auditService.createAuditTrail( audit )    
            .then((ret) => {
                    return dispatch({
                        type: AUDIT_TRAIL_SUCESS,
                        payload: ret.data
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : AUDIT_TRAIL_ERROR,
                    payload: error
                });
            });      
            
}

export function handleGetAuditTrailByCompanyId(  )
{    
    return (dispatch) => 
    auditService.getAuditTrailByCompanyId (  )    
            .then((ret) => {
                    return dispatch({
                        type: AUDIT_TRAIL_SUCESS,
                        payload: ret.data
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : AUDIT_TRAIL_ERROR,
                    payload: error
                });
            });      
            
}
