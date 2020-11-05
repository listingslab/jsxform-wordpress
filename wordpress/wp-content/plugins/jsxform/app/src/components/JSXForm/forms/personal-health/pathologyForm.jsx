export const pathologyForm = {

    title: `Pathology`,
    reduxKey: 'Pathology',
    description: `Manage your pathology results`,
    route: `/personal-health/pathology/`,
    icon: `pathology`,
    dataShape: {
        resourceType: `Pathology`,
        patientId: `String`,
        id: 0,
        title: `String`,
        notes: `String`,
        observed: `YYYY-MM-DDTHH:mm:ssZ`,
        attachmentUrls: [`String`, `String`],  
    },
    fields: [
        {
            id: `title`,
            mapKey: `title`,
            type: `InputString`,
            label: `Title`,
            autoFocus: true,
            required: true,
            // helperText: `What was the test?`
        },
        {
            id: `observed`,
            mapKey: `observed`,
            required: true,
            type: `InputDatetime`,
            dateFormat: `dddd Do MMMM YYYY`,
            label: `Date`,
            defaultValue: null,
        },
        {
            id: `notes`,
            mapKey: `notes`,
            type: `InputString`,
            label: `Notes`,
            // multiline: true,
        },
    ]
}