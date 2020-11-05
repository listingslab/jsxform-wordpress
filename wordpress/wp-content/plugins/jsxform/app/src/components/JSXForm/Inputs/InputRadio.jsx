import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
	FormControl,
	FormLabel,
	Radio,
	RadioGroup,
	FormControlLabel,
} from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
	field: {
		margin: theme.spacing(2),
	},
	fieldLabel:{
		fontSize: 13,
	},
}))

export default function InputRadio(props) {
	
	const classes = useStyles()
	const {
		onFormChange,
	} = props
	let { 
		options,
	} = props.options
	
	const {
		mapKey,
		label,
		defaultValue,
	} = props.options
	// console.log ('mapKey', mapKey)
	const [selected, setSelected] = React.useState(defaultValue ? defaultValue.toString() : null)

	return	<div className={clsx( classes.field )}>
				<FormControl component={`fieldset`}>
			      <FormLabel component={`legend`} className={clsx( classes.fieldLabel )}>
			      	{label}
			      </FormLabel>
			      <RadioGroup 
			      	aria-label={label} 
			      	id={ mapKey } 
			      	name={ mapKey } 
			      	value={selected} 
			      	onChange={(e) => {
			      		e.preventDefault()
			      		// console.log ('setSelected', e.target.value)
			      		setSelected(e.target.value)
			      		onFormChange()
			      	}}>
			      	{ options.map ((item,i) => {
			      		return	<FormControlLabel
			      					key={`option_${i}`} 
			      					control={<Radio />} 
				      				value={ item.value }
				      				label={ item.label } 
			      				/>
			      	})}
			      </RadioGroup>
			    </FormControl>
			</div>
}

/*
<pre>
	{ JSON.stringify(props.options, null, 2) }
</pre>
*/