import moment from 'moment'

export const allergyForm = {
    title: `Contact Form Example`,
    description: `This is an example of JSX Form`,
    icon: `api`,
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
}