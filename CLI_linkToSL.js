/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define([], 
    function() {
    
        function pageInit(scriptContext) { //8916 Internal Id
            alert('pageInit triggered')
        }
        return{
            pageInit: pageInit
        }
    }
)