import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
} from '@material-ui/core/'
import {
  DatePicker,
} from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
	field: {
		margin: theme.spacing(2),
	},
}))

export default function InputDatetime(props) {
	
	const classes = useStyles()
	const { 
		options,
		onFormChange,
	} = props
	const {
		mapKey,
		disabled,
		autoFocus,
		defaultValue,
		label,
		required,
		dateFormat,
	} = options

	const [selectedDate, handleDateChange] = React.useState(defaultValue)

	return	<div className={clsx( classes.field )}>
				<DatePicker
					autoOk
					fullWidth
					// animateYearScrolling
					// 
					// variant={`static`}
					views={[`month`, `year` ]}
					openTo={`month`}
					format={ dateFormat }
					disabled={ disabled }
					autoFocus={ autoFocus }
					name={ mapKey}
					required={ required }
					label={ label }
					value={selectedDate}
					onChange={(value) => {
						handleDateChange(value.format(dateFormat))
						// onFormChange()
					}}
					onAccept={() => {
						setTimeout(() => {
							onFormChange()
						}, 1000)
					}}
				/>
			</div>
}
