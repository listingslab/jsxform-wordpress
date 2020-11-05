export const cyclingForm = {

    title: `Cycling`,
    description: `Manage your cycling`,
    route: `/personal-health/cycling/`,
    icon: `cycling`,
    fields: [
        {
            id: `cycling-date`,
            type: `InputDatetime`,
            label: `Start Date`,
            required: true,
            errorText: `DD/MM/YYYY`
        },
        {
            id: `cycling-time`,
            type: `InputTime`,
            label: `Start Time`,
            required: true,
            errorText: `HH:mm`
        },
        {
            id: `cycling-duration`,
            type: `InputDuration`,
            label: `Duration`,
            required: true,
        },
        {
            id: `cycling-calories`,
            type: `InputString`,
            label: `Calories`,
            required: true,
        },
        {
            id: `cycling-distance`,
            type: `InputString`,
            label: `Distance`,
            required: true,
        },
        {
            id: `cycling-pace`,
            type: `InputString`,
            label: `Pace`,
            required: true,
        },
        {
            id: `cycling-elevation`,
            type: `InputString`,
            label: `Elevation`,
            required: true,
        },
        {
            id: `cycling-notes`,
            type: `InputString`,
            label: `Add a Note`,
        },
    ]
}