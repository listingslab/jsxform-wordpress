import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
	Typography,
	Slider,
} from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
	sliderWrap:{
		// border: '1px solid red',
		// maxWidth: '95%',
		marginLeft: theme.spacing(2),
	},
	slider: {
		
	},
	margin: {
		height: theme.spacing(3),
	},
	field: {
		margin: theme.spacing(),
	},
}))

const marks = [
  {
    value: 10,
    label: 'minutes',
  },
  {
    value: 60,
    label: 'hours',
  },
  {
    value: 95,
    label: 'All the time',
  },
]

function valuetext(value) {
  return `${value}°C`;
}

export default function InputSlider(props) {
	
	const classes = useStyles()
	const {
		options,
		onFormChange,
	} = props
	const {
		mapKey,
		label,
	} = options

	return	<div className={clsx( classes.field )}>

				<Typography className={clsx( classes.sliderWrap )}
					id={`input-duration-label`} gutterBottom>
		        	{label}
		      	</Typography>
		      	
		      	<div className={clsx( classes.sliderWrap )}>
			      <Slider
			      	name={ mapKey }
			      	color={`secondary`}
			      	className={clsx( classes.slider )}
					defaultValue={5}
					getAriaValueText={ valuetext }
					aria-labelledby={`input-duration-label`}
					valueLabelDisplay={`auto`}
					marks={ marks }
					onChange={(e) => {
						onFormChange()
					}}
			      />
				</div>
			</div>
}
