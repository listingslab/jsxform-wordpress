export const contactFormExample = {
    title: `Contact Form Example`,
    description: `Simple & easy to use`,
    postURL: `/wp-content/plugins/jsxform/process/index.php`,
    buttonText: `Get in touch`,
    icon: `contact`,
    fields: [
        {
            label: `Your subject`,
            helperText: `What do you want to talk about?`,
            type: `InputString`,
            autoFocus: true,
            required: true,
            prompt: `Please specify a subject`,
        },
        {
            label: `Your comment`,
            helperText: `Say it, say it.`,
            type: `InputString`,
            multiline: true,
        },
    ],
}