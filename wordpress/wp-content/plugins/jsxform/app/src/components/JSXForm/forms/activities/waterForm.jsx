export const waterForm = {
    title: `Water`,
    description: `Manage your water`,
    route: `/personal-health/water/`,
    icon: `water`,
    fields: [
        {
            id: `water-date`,
            type: `InputDatetime`,
            label: `Start Date`,
            required: true,
            errorText: `DD/MM/YYYY`
        },
        {
            id: `water-time`,
            type: `InputTime`,
            label: `Start Time`,
            required: true,
            errorText: `HH:mm`
        },
        {
            id: `water-amount`,
            type: `InputString`,
            label: `Amount of Water`,
            required: true,
        },
        {
            id: `water-notes`,
            type: `InputString`,
            label: `Add a Note`,
        },
    ]
}
