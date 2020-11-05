export const walkingForm = {
    title: `Walking`,
    description: `Manage your walking`,
    route: `/personal-health/walking/`,
    icon: `walking`,
    fields: [
        {
            id: `walking-date`,
            type: `InputDatetime`,
            label: `Start Date`,
            required: true,
            errorText: `DD/MM/YYYY`
        },
        {
            id: `walking-time`,
            type: `InputTime`,
            label: `Start Time`,
            required: true,
            errorText: `HH:mm`
        },
        {
            id: `walking-duration`,
            type: `InputDuration`,
            label: `Duration`,
            required: true,
        },
        {
            id: `walking-calories`,
            type: `InputString`,
            label: `Calories`,
            required: true,
        },
        {
            id: `walking-elevation`,
            type: `InputString`,
            label: `Elevation`,
            required: true,
        },
        {
            id: `walking-distance`,
            type: `InputString`,
            label: `Distance`,
            required: true,
        },
        {
            id: `walking-pace`,
            type: `InputString`,
            label: `Pace`,
            required: true,
        },
        {
            id: `walking-steps`,
            type: `InputString`,
            label: `Steps`,
            required: true,
        },
        {
            id: `walking-notes`,
            type: `InputString`,
            label: `Add a Note`,
        },
    ]
}
