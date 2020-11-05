export const runningForm = {

    title: `Running`,
    description: `Manage your running`,
    route: `/personal-health/running/`,
    icon: `running`,
    fields: [
        {
            id: `running-date`,
            type: `InputDatetime`,
            label: `Start Date`,
            required: true,
            errorText: `DD/MM/YYYY`
        },
        {
            id: `running-time`,
            type: `InputTime`,
            label: `Start Time`,
            required: true,
            errorText: `HH:mm`
        },
        {
            id: `running-duration`,
            type: `InputDuration`,
            label: `Duration`,
            required: true,
        },
        {
            id: `running-calories`,
            type: `InputString`,
            label: `Calories`,
            required: true,
        },
        {
            id: `running-elevation`,
            type: `InputString`,
            label: `Elevation`,
            required: true,
        },
        {
            id: `running-notes`,
            type: `InputString`,
            label: `Add a Note`,
        },
    ]
}