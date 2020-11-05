import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
	// FormControl,
	// FormLabel,
	// Radio,
	// RadioGroup,
	// FormControlLabel,
} from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
	field: {
		margin: theme.spacing(2),
	},
}))

export default function InputReminder(props) {
	
	const classes = useStyles()
	// const { 
	// 	options,
	// } = props.options
	// const {
	// 	id,
	// 	label,
	// 	// required,
	// 	// defaultText,
	// 	// helperText,
	// 	// autoFocus,
	// 	// disabled,
	// } = props.options
	// const [selected, setSelected] = React.useState(`3`)

	const hideNow = true
	if (hideNow) return null


	return	<div className={clsx( classes.field )}>

	THIS IS A REMINDER
	
</div>
}

/*
<pre>
	{ JSON.stringify(props.options, null, 2) }
</pre>
*/