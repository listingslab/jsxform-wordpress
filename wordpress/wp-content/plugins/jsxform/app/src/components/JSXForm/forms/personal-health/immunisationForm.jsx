export const immunisationForm = {

    title: `Immunisation`,
    reduxKey: 'Immunization',
    description: `Manage your immunisations and vaccines`,
    route: `/personal-health/immunisations/`,
    icon: `immunisation`,
    dataShape: {
        resourceType: `Immunization`,
        patientId: `String`,
        id: 0,
        vaccine: `String`,
        occurred: `YYYY-MM-DDTHH:mm:ssZ`,
        protectsAgainst: `String`,
        notes: `String`,
        attachmentUrls: [`String`, `String`],  
    },
    fields: [
        {
            id: `vaccine`,
            mapKey: `vaccine`,
            type: `InputString`,
            label: `Vaccine`,
            autoFocus: true,
            required: true,
            // helperText: `What immunisation did you get?`
        },
        {
            id: `protectsAgainst`,
            mapKey: `protectsAgainst`,
            required: true,
            type: `InputString`,
            label: `Protection Against`,
        },
        {
            id: `occurred`,
            mapKey: `occurred`,
            required: true,
            type: `InputDatetime`,
            dateFormat: `dddd Do MMMM YYYY`,
            defaultValue: null,
            label: `Date`,
        },
        {
            id: `notes`,
            mapKey: `notes`,
            type: `InputString`,
            label: `Notes`,
        }
    ]
}