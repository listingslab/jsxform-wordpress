export const hospitalVisitForm = {
    title: `Hospital`,
    reduxKey: 'Hospitalization',
    description: `Manage your hospital visits`,
    route: `/personal-health/hospital/`,
    icon: `hospitalVisit`,
    dataShape: {
        resourceType: `Hospitalization`,
        patientId: `String`,
        id: 0,
        location: `String`,
        reason: `String`,
        notes: `String`,
        start: `YYYY-MM-DDTHH:mm:ssZ`,
        end: `YYYY-MM-DDTHH:mm:ssZ`,
        attachmentUrls: [`String`, `String`],  
    },
    fields: [
        {
            id: `hospital`,
            mapKey: `location`,
            type: `InputString`,
            label: `Hospital`,
            autoFocus: true,
            required: true,
            // helperText: `What hospital did you go to?`
        },
        {
            id: `reason`,
            mapKey: `reason`,
            required: true,
            type: `InputString`,
            // helperText: `Why did you go the hospital?`,
            label: `Reason`,
        },
        {
            id: `start`,
            mapKey: `start`,
            required: true,
            type: `InputDatetime`,
            label: `Admission Date`,
            dateFormat: `dddd Do MMMM YYYY`,
            defaultValue: null,
        },
        {
            id: `end`,
            mapKey: `end`,
            type: `InputDatetime`,
            label: `Discharge Date`,
            dateFormat: `dddd Do MMMM YYYY`,
            defaultValue: null,
        },
        {
            id: `notes`,
            mapKey: `notes`,
            type: `InputString`,
            label: `Notes`,
            // multiline: true,
        }
    ]
}