import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
} from '@material-ui/core/'
import {
  KeyboardTimePicker
} from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
	field: {
		margin: theme.spacing(),
	},
}))

export default function InputTime(props) {
	
	const classes = useStyles()
	const { 
		options,
		// onFormChange,
	} = props
	const {
		id,
		label,
		required,
		helperText,
		autoFocus,
		disabled,
	} = options
	const [selectedDate, handleDateChange] = React.useState()

	return	<div className={clsx( classes.field )}>
				<KeyboardTimePicker 
					fullWidth
					disabled={disabled}
					autoFocus={autoFocus}
					id={id}
					required={required}
					label={label}
					value={selectedDate} 
					onChange={handleDateChange} 
					helperText={helperText}
				/>
			</div>
}
