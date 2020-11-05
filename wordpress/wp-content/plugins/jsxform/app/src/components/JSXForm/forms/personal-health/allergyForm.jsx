import moment from 'moment'

export const allergyForm = {
    title: `Allergy Form`,
    reduxKey: `Allergy`,
    description: `Manage your allergies`,
    route: `/personal-health/allergy/`,
    icon: `allergy`,
    fields: [
        {
            label: `Allergen`,
            mapKey: `allergen`,
            type: `InputString`,
            autoFocus: true,
            required: true,
            helper: `Allergen required`,
        },
        {
            label: `Reactions`,
            mapKey: `reactions`,
            type: `InputString`,
            valueType: `array`,
            required: true,
            helper: `Reactions required`,
        },
        {
            label: `Severity`,
            mapKey: `severity`,
            type: `InputRadio`,   
            defaultValue: 3,
            valueType: `number`,  
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
            label: `Date Identified`,
            mapKey: `dateIdentified`,
            defaultValue: moment().toISOString(),
            type: `InputDatetime`,
            dateFormat: `MMMM YYYY`,
        },
    ],
    dataShape: {
        resourceType: `Allergy`,
        patientId: `String`,
        id: 0,
        allergen: `String`,
        reactions: [`String`, `String`],
        severity: 0,
        dateIdentified: `YYYY-MM-DDTHH:mm:ssZ`,
        attachmentUrls: [`String`, `String`],
    },
}