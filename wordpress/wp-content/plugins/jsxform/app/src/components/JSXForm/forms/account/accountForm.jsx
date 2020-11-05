export const accountForm = {
  title: `Account`,
  description: `Update your account and profile details`,
  path: `/personal-health/account`,
  icon: `account`,
  fields: [
    {
      mapKey: `name`,
      type: `InputString`,
      label: `Name`,
      required: true,
      autoFocus: true,
      // helperText: `What should we call you?`,
    },
    {
      mapKey: `email`,
      type: `InputString`,
      label: `Email`,
      disabled: true,
    },

    {
      mapKey: `dob`,
      type: `InputDatetime`,
      label: `Date of Birth`,
      dateFormat: `Do MMMM YYYY`,
    },
  ],
  dataShape: {
  },
}


