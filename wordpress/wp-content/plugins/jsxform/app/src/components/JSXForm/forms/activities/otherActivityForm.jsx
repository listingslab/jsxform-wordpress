export const otherActivityForm = {

    title: `Other Activity`,
    description: `Manage your other activities`,
    route: `/personal-health/other-activity/`,
    icon: `otherActivity`,
    fields: [
        {
            id: `other-activity-date`,
            type: `InputDatetime`,
            label: `Start Date`,
            required: true,
            errorText: `DD/MM/YYYY`
        },
        {
            id: `other-activity-time`,
            type: `InputTime`,
            label: `Start Time`,
            required: true,
            errorText: `HH:mm`
        },
        {
            id: `other-activity-duration`,
            type: `InputDuration`,
            label: `Duration`,
            required: true,
        },
        {
            id: `other-activity-calories`,
            type: `InputString`,
            label: `Calories`,
            required: true,
        },
        {
            id: `other-activity-notes`,
            type: `InputString`,
            label: `Add a Note`,
        },
    ]
}