export const appointmentForm = {

    title: `Appointments`,
    reduxKey: `Encounter`,
    description: `Manage your Appointments`,
    route: `/personal-health/appointments/`,
    icon: `appointment`,
    dataShape: {
        resourceType: `Encounter`,
        patientId: `String`,
        id: 0,
        start: `YYYY-MM-DDTHH:mm:ssZ`,
        location: `String`,
        practitioner: `String`,
        notes: `String`,
        attachmentUrls: [`String`, `String`],        
    },
    fields: [
        {
            label: `Practitioner`,
            id: `practitioner`,
            type: `InputString`,
            mapKey: `practitioner`,
            autoFocus: true,
            required: true,
            // helperText: `Who did you see?`
        },
        {
            label: `Practice`,
            id: `practice`,
            mapKey: `location`,
            required: true,
            type: `InputString`,
            // helperText: `Where did you see the doctor?`,
        },
        {
            label: `Date and time`,
            id: `time`,
            mapKey: `start`,
            required: true,
            type: `InputDatetime`,
            defaultValue: null,
            dateFormat: `dddd Do MMMM YYYY, h:mm a`,
        },
        {
            id: `notes`,
            mapKey: `notes`,
            type: `InputString`,
            label: `Notes`,
            // multiline: true,
        },
        {
            id: `reminders`,
            mapKey: `reminders`,
            type: `InputReminder`,
            label: `Reminders`,
        }
    ]
}