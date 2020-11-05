import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
	Typography,
} from '@material-ui/core/'
// import {
// 	ViewAttachment,
// } from './'

const useStyles = makeStyles(theme => ({
	field: {
		margin: theme.spacing(2),
	},
}))

export default function Attachments(props) {
	
	const classes = useStyles()
	const {
		attachmentUrls,
	} = props


	return	<div className={clsx( classes.field )}>
				<Typography vairant={`h6`} gutterBottom>
					Attachments
				</Typography>
				
			</div>
}









/*
<pre>
	{ JSON.stringify(attachmentUrls, null, 2) }
</pre>

{ attachmentUrls.map( (item,i) => {
					return <ViewAttachment key={`attachment_${i}`} url={item} />
				})}

				
*/