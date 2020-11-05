export const referralForm = {

    title: `Referral`,
    reduxKey: 'Referral',
    description: `Manage your referrals`,
    route: `/personal-health/referrals/`,
    icon: `referral`,
    dataShape: {
        resourceType: `Referral`,
        patientId: `String`,
        id: 0,
        referredDate: `YYYY-MM-DDTHH:mm:ssZ`,
        expiryDate: `YYYY-MM-DDTHH:mm:ssZ`,
        practitioner: `String`,
        practice: `String`,
        notes: `String`,
        attachmentUrls: [`String`, `String`],  
    },
    fields: [
        {
            id: `practitioner`,
            mapKey: `practitioner`,
            type: `InputString`,
            label: `Practitioner`,
            autoFocus: true,
            required: true,
            // errorText: `Who is this referral for?`
        },
        {
            id: `practice`,
            mapKey: `practice`,
            required: true,
            type: `InputString`,
            // errorText: `Where is this referral for?`,
            label: `Practice`,
        },
        {
            id: `referredDate`,
            mapKey: `referredDate`,
            dateFormat: `dddd Do MMMM YYYY`,
            required: true,
            type: `InputDatetime`,
            defaultValue: null,
            label: `Date Reffered`,
        },
        {
            id: `expiryDate`,
            mapKey: `expiryDate`,
            required: true,
            defaultValue: null,
            type: `InputDatetime`,
            dateFormat: `dddd Do MMMM YYYY`,
            label: `Expiry Date`,
        },
        {
            id: `notes`,
            mapKey: `notes`,
            type: `InputString`,
            label: `Notes`,
            // multiline: true,
        },
    ]
}