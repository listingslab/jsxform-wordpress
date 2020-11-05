export const sleepingForm = {
    title: `Sleeping`,
    description: `Manage your sleeping`,
    route: `/personal-health/sleeping/`,
    icon: `sleeping`,
    fields: [
        {
            id: `sleeping-start-date`,
            type: `InputDatetime`,
            label: `Start Date`,
            required: true,
            errorText: `DD/MM/YYYY`
        },
        {
            id: `sleeping-start-time`,
            type: `InputTime`,
            label: `Start Time`,
            required: true,
            errorText: `HH:mm`
        },
        {
            id: `sleeping-end-date`,
            type: `InputDatetime`,
            label: `End Date`,
            required: true,
            errorText: `DD/MM/YYYY`
        },
        {
            id: `sleeping-end-time`,
            type: `InputTime`,
            label: `End Time`,
            required: true,
            errorText: `HH:mm`
        },
        {
            id: `sleeping-notes`,
            type: `InputString`,
            label: `Add a Note`,
        },
    ]
}
