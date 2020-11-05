export const profileForm = {
  title: `Profile`,
  description: `Manage profile `,
  path: `/personal-health/account/profiles`,
  icon: `profile`,
  fields: [
    {
      id: `profile-name`,
      type: `InputString`,
      label: `Name`,
      required: true,
      fullWidth: true,
      helperText: `What should we call this profile?`,
    },
    {
      id: `profile-dob`,
      type: `InputDatetime`,
      label: `Date of Birth`,
      helperText: `What should we call this profile?`
    },
    {
      id: `profile-relationship`,
      type: `InputString`,
      label: `Relationship`,
      helperText: `What should we call this profile?`
    },
    {
      id: `profile-gender`,
      type: `InputString`,
      label: `Gender`,
      helperText: `What should we call this profile??`
    },
  ],
}


