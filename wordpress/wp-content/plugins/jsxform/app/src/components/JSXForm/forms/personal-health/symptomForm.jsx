export const symptomForm = {

    title: `Symptoms`,
    reduxKey: 'Observation',
    description: `Manage your symptoms`,
    route: `/personal-health/symptoms/`,
    icon: `symptoms`,
    dataShape: {
        resourceType: `Observation`,
        patientId: `String`,
        id: 0,
        severity: 0,
        issued: `YYYY-MM-DDTHH:mm:ssZ`,
        duration: 0,
        effective: `YYYY-MM-DDTHH:mm:ssZ`,
        effectiveApproximate: false,
        abatement: `YYYY-MM-DDTHH:mm:ssZ`,
        value: `String`,
        note: `String`,
        context: `String`,
        questions: [`String`, `String`],
        attachmentUrls: [`String`, `String`],  
    },
    fields: [
        {
            mapKey: `value`,
            type: `InputString`,
            label: `Symptom`,
            autoFocus: true,
            required: true,
            // errorText: `What are you feeling? eg. Headache`
        },
        {
            label: `Time Occurred`,
            mapKey: `issued`,
            required: true,
            type: `InputDatetime`,
            dateFormat: `dddd Do MMMM YYYY, h:mm a`,
            
        },
        {
            mapKey: `duration`,
            required: true,
            type: `InputDuration`,
            // errorText: `How long did the symptoms persist for?`,
            label: `Duration`,
        },
        {
            mapKey: `context`,
            type: `InputString`,
            // errorText: `What was happening at the time? eg. Bumped head`,
            label: `Context`,
        },
        {
            mapKey: `severity`,
            required: true,
            type: `InputRadio`,
            label: `Severity`,
            options: [
                {
                    label: `Mild`,
                    value: `3`,
                },
                {
                    label: `Moderate`,
                    value: `5`,
                    defaultSelected: true,
                },
                {
                    label: `Severe`,
                    value: `7`,
                },
            ],
        },
        {
            mapKey: `questions`,
            type: `InputString`,
            label: `Questions`,
        },
        {
            mapKey: `notes`,
            type: `InputString`,
            label: `Notes`,
            // multiline: true,
        },
    ]
}