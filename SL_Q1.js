/**
 * @NApiVersion 2.0
 * @NScriptType Suitelet
 */

define(['N/ui/serverWidget', 'N/record', 'N/log' , 'N/redirect'],
    function(serverWidget, record, log , redirect) {
        function onRequest(scriptContext) {
            if(scriptContext.request.method == 'GET') {

                // Question No. 2
                // {
                //     var form = serverWidget.createForm({
                //         title: 'Employee Form'
                //     })

                //     form.addSubmitButton({
                //         label: 'Save'
                //     })

                //     form.addButton({
                //         id: 'custpage_buttonCancel',
                //         label: 'Cancel'
                //     })

                //     // SUBTAB 1.1
                //     var field_group1 = form.addFieldGroup({
                //         id: 'custpage_subtab1_1',
                //         label: 'Primary Information'
                //     })

                //     field_group1.isSingleColumn = true

                //     // INITIALS
                //     form.addField({
                //         id: 'custpage_initials',
                //         label: 'INITIALS',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custpage_subtab1_1'
                //     })

                //     // JOB TITLE
                //     form.addField({
                //         id: 'custpage_jobtitle',
                //         label: 'JOB TITLE',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custpage_subtab1_1'
                //     })

                //     // NAME
                //     var name = form.addField({
                //         id: 'custpage_name',
                //         label: 'NAME',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custpage_subtab1_1'
                //     })
                //     name.isMandatory = true

                //     // IMAGE
                //     form.addField({
                //         id: 'custpage_image',
                //         label: 'IMAGE',
                //         type: serverWidget.FieldType.IMAGE,
                //         container: 'custpage_subtab1_1'
                //     })

                //     // SUBTAB 1.2
                //     var field_group2 = form.addFieldGroup({
                //         id: 'custpage_subtab1_2',
                //         label: 'Email | Phone | Address',
                //     })

                //     field_group2.isSingleColumn = true

                //     // EMAIL
                //     form.addField({
                //         id: 'custpage_email',
                //         label: 'EMAIL',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custpage_subtab1_2'
                //     })
                   
                //     // PHONE
                //     form.addField({
                //         id: 'custpage_phone',
                //         label: 'PHONE',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custpage_subtab1_2'
                //     })     

                //     // ADDRESS
                //     form.addField({
                //         id: 'custpage_address',
                //         label: 'ADDRESS',
                //         type: serverWidget.FieldType.TEXTAREA,
                //         container: 'custpage_subtab1_2'
                //     })

                //     // SUBTAB 2
                //     form.addFieldGroup({
                //         id: 'custpage_subtab2',
                //         label: 'Classification',
                //     })

                //     var subsidary = form.addField({
                //         id: 'custpage_subs',
                //         label: 'SUBSIDARY',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custpage_subtab2'
                //     })

                //     subsidary.addSelectOption({
                //         text: 'BFL',
                //         value: 12 // internal id of that subsidary
                //     })
                    

                //     subsidary.isMandatory = true

                //     form.addField({
                //         id: 'custpage_loca',
                //         label: 'LOCATION',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custpage_subtab2'
                //     })

                //     form.addField({
                //         id: 'custpage_dept',
                //         label: 'DEPARTMENT',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custpage_subtab2'
                //     })

                //     form.addField({
                //         id: 'custpage_supervisor',
                //         label: 'SUPERVISOR',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custpage_subtab2'
                //     })

                //     form.addField({
                //         id: 'custpage_currency',
                //         label: 'CURRENCY',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custpage_subtab2'
                //     })

                //     form.addField({
                //         id: 'custpage_class',
                //         label: 'CLASS',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custpage_subtab2'
                //     })

                // }

                // Question No. 3
                {
                    var form = serverWidget.createForm({
                        title: 'Customer Form'
                    })

                    form.addSubmitButton({
                        label: 'Save'
                    })

                    // CUST NAME
                    var name = form.addField({
                        id: 'custpage_name',
                        label: 'CUSTOMER NAME',
                        type: serverWidget.FieldType.TEXT
                    })
                    name.isMandatory = true

                    // PHONE
                    var phn = form.addField({
                        id: 'custpage_phone',
                        label: 'PHONE',
                        type: serverWidget.FieldType.TEXT
                    })
                    phn.isMandatory = true

                    // EMAIL
                    var email = form.addField({
                        id: 'custpage_email',
                        label: 'EMAIL',
                        type: serverWidget.FieldType.TEXT
                    })
                    email.isMandatory = true

                    // STATUS
                    var status = form.addField({
                        id: 'custpage_status',
                        label: 'CUSTOMER STATUS',
                        type: serverWidget.FieldType.SELECT
                    })
                    status.isMandatory = true
                    status.addSelectOption({
                        text: 'Lost Customer', // CUSTOMER-Lost Customer 
                        value: 16
                    })
                    status.addSelectOption({
                        text: 'Closed Won', //CUSTOMER-Closed Own
                        value: 13
                    })
                    status.addSelectOption({
                        text: 'Renewal', //CUSTOMER-Renewal',
                        value: 15
                    })


                    // SUBSIDIARY
                    var subs = form.addField({
                        id: 'custpage_subs',
                        label: 'CUSTOMER SUBSIDIARY',
                        type: serverWidget.FieldType.SELECT
                    })
                    subs.isMandatory = true
                    subs.addSelectOption({
                        text: 'Canada',
                        value: 7
                    })
                    subs.addSelectOption({
                        text: 'Australia',
                        value: 9
                    })
                    subs.addSelectOption({
                        text: 'United Kingdom',
                        value: 6
                    })

                    //form.clientScriptFileId = 8916 // internal id of client script after uploading in file cabinet
                    
                    form.clientScriptModulePath = 'SuiteScripts/CLI_linkToSL.js'

                }

                scriptContext.response.writePage(form);

            }else{
                // Question No. 2
                // {
                // // getting the name
                // var fieldValueName = scriptContext.request.parameters.custpage_name
                // log.debug('Field value is : ' + fieldValueName)

                // var newRecord = record.create({
                //     type: record.Type.EMPLOYEE,
                //     isDynamic: true
                // })

                // newRecord.setValue({    // setting the name
                //     fieldId: 'firstname', 
                //     value: fieldValueName
                // })

                // // getting subsidary
                // var fv_subsidary = scriptContext.request.parameters.custpage_subs
                // log.debug('Subsidary is ' + fv_subsidary)
                // newRecord.setValue({ 
                //     fieldId: 'subsidiary',
                //     value: fv_subsidary
                // })

                // // getting job title
                // var fv_jobTitle = scriptContext.request.parameters.custpage_jobtitle
                // newRecord.setValue({ 
                //     fieldId: 'title',
                //     value: fv_jobTitle
                // })

                // // getting mail
                // var fv_mail = scriptContext.request.parameters.custpage_email
                // newRecord.setValue({
                //     fieldId: 'email',
                //     value: fv_mail
                // })

                // // getting phone
                // var fv_phone = scriptContext.request.parameters.custpage_phone
                // newRecord.setValue({
                //     fieldId: 'phone',
                //     value: fv_phone
                // })

                // // getting address
                // var fv_address = scriptContext.request.parameters.custpage_address
                // newRecord.setValue({
                //     fieldId: 'defaultaddress',
                //     value: fv_address
                // })  

                // //getting image
                // fv_image = scriptContext.request.parameters.custpage_image
                // newRecord.setValue({
                //     fieldId: 'image',
                //     value: fv_image
                // })

                // var recordId = newRecord.save()

                // scriptContext.response.write('Record created with record id: ' + recordId)
                // }
                
                // Question No. 3
                {
                    var newRecord = record.create({
                        type: record.Type.CUSTOMER,
                        isDynamic: true
                    })

                    var fieldValue_name = scriptContext.request.parameters.custpage_name
                    newRecord.setValue({
                        fieldId: 'companyname',
                        value: fieldValue_name
                    })

                    var fv_phone = scriptContext.request.parameters.custpage_phone
                    newRecord.setValue({
                        fieldId: 'phone',
                        value: fv_phone
                    })

                    var fv_email = scriptContext.request.parameters.custpage_email
                    newRecord.setValue({
                        fieldId: 'email',
                        value: fv_email
                    })

                    var fv_status = scriptContext.request.parameters.custpage_status
                    newRecord.setValue({
                        fieldId: 'entitystatus',
                        value: fv_status
                    })

                    var fv_subs = scriptContext.request.parameters.custpage_subs
                    newRecord.setValue({
                        fieldId: 'subsidiary',
                        value: fv_subs
                    })

                    var recordId = newRecord.save()

                    log.debug('recordId' , recordId)
                
                    // scriptContext.response.write('Record created with record id: ' + recordId)

                    redirect.toSuitelet({
                        scriptId: '825',
                        deploymentId: '1'
                    });

                }
            }
        }
        return {
            onRequest: onRequest
        }
    }
)