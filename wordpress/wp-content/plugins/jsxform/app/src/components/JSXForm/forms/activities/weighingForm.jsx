export const weighingForm = {
    title: `Weighing`,
    description: `Manage your weighing`,
    route: `/personal-health/weighing/`,
    icon: `weighing`,
    fields: [
        {
            id: `weighing-date`,
            type: `InputDatetime`,
            label: `Start Date`,
            required: true,
            errorText: `DD/MM/YYYY`
        },
        {
            id: `weighing-time`,
            type: `InputTime`,
            label: `Start Time`,
            required: true,
            errorText: `HH:mm`
        },
        {
            id: `weighing-amount`,
            type: `InputString`,
            label: `Amount of Weight`,
            required: true,
        },
        {
            id: `weighing-notes`,
            type: `InputString`,
            label: `Add a Note`,
        },
    ]
}