import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
	TextField,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	field: {
		margin: theme.spacing(2),
	},
}))

export default function InputString(props) {
	
	const classes = useStyles()
	const variant = `standard`
	const { 
		options,
		onFormChange,
	} = props
		
	const {
		mapKey,
		label,
		required,
		defaultValue,
		helperText,
		autoFocus,
		disabled,
		multiline,
	} = options

	return	<div className={clsx( classes.field )}>
				<TextField 
					id={ mapKey }
					autoFocus={ autoFocus }
					required={ required }
					multiline={ multiline ? true : false }
					rows={ 3 }
					fullWidth
					disabled={ disabled }
					variant={ variant }
					label={ label }
					defaultValue={ defaultValue }
					helperText={ helperText }
					onChange={ onFormChange }
				/>
			</div>
}
