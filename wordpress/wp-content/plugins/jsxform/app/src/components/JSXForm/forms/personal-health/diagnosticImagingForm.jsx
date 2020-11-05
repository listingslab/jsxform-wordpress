export const diagnosticImagingForm = {

    title: `Diagnostic Imaging`,
    reduxKey: 'DiagnosticImaging',
    description: `Manage your diagnostic imaging results`,
    route: `/personal-health/diagnostic-imaging/`,
    icon: `diagnosticImaging`,
    dataShape: {
        resourceType: `DiagnosticImaging`,
        patientId: `String`,
        id: 0,
        type: `String`,
        observed: `YYYY-MM-DDTHH:mm:ssZ`,
        notes: `String`,
        attachmentUrls: [`String`, `String`],        
    },
    fields: [
    
        {
            label: `Imaging Type`,
            id: `type`,
            mapKey: `type`,
            type: `InputString`,
            // helperText: `What type of imaging?`,
            autoFocus: true,
            required: true,
        },
        {
            label: `Date`,
            id: `time`,
            mapKey: `observed`,
            type: `InputDatetime`,
            dateFormat: `dddd Do MMMM YYYY`,
            defaultValue: null,
            required: true,
        },
        {
            label: `Notes`,
            id: `notes`,
            mapKey: `notes`,
            type: `InputString`,
            // multiline: true,
        }
    ]
}