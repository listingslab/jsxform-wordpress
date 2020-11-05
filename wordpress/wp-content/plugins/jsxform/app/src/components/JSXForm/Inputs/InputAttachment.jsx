import React from 'react'
import clsx from 'clsx'
import {
	useTheme,
	useMediaQuery,
	makeStyles,
	ButtonBase,
	Typography,
} from '@material-ui/core/'
import { 
	Icon,
} from '../../../theme'
import { DropzoneDialog } from 'material-ui-dropzone'

const gradient = {
	bottom: `#f3f6ff`,
	top: `#f3f6ff`,
	icon: `rgba(98,32,186, 1)`,
}

const useStyles = makeStyles(theme => ({
	field: {
		margin: theme.spacing(2),
	},

	ctaBtn:{
		borderRadius: theme.spacing(3),
		textAlign: 'left',
		width: '100%',
		height: 75,
		display: 'relative',
	},
	plusIcon:{
		position: 'absolute',
		left: theme.spacing(2),
		bottom: theme.spacing(1.75),
		height: 32,
		width: 32,
	},
	icon: {
		position: 'absolute',
		left: '%50',
		top: theme.spacing(2),
		height: 50,
		width: 50,
	},
	white: {
		color: theme.palette.primary.main,
	},
	labelText: {
		position: 'absolute',
		left: theme.spacing(3),
		top: theme.spacing(2.5),
	},
	action:{
		marginBottom: -8,
	},
	  previewChip: {
    minWidth: 160,
    maxWidth: 210
  },
}))

export default function InputAttachment(props) {
	
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)
	const theme = useTheme()
  	const primary = theme.palette.primary.main
  	const showtitle = !useMediaQuery(theme.breakpoints.up('md'))

  	const hide = true
  	if (hide) return null

	return	<div className={clsx( classes.field )}>


				<ButtonBase 
					className={clsx(classes.ctaBtn)}
					style={{ background: 'linear-gradient(' + gradient.top + ' 0%, ' + gradient.bottom + ' 100%)' }}
					onClick={(e) => {
						e.preventDefault()
						setOpen(true)
					}}>
					<div className={clsx(classes.icon)}>
						<Icon autoSize icon={`documents`} color={ primary } />
					</div>				
					{ showtitle ? null : <div className={ classes.labelText }>
						<Typography className={clsx(classes.white, classes.action)}>
							{ `Attach` }
						</Typography>
						<Typography className={clsx(classes.white )}>
							{`Documents`}
						</Typography>
					</div> }
				</ButtonBase>

				<DropzoneDialog
					open={open}
					maxFileSize={5000000}
					dropzoneText={`Choose files`}
					showPreviews={false}
					showPreviewsInDropzone={true}
					previewGridProps={{container: { direction: 'column' }}}
				    showFileNamesInPreview={false}
				    cancelButtonText={"Cancel"}
				    submitButtonText={"Attach"}
				    showAlerts={[`error`]}
				    onClose={(files) => {
				    	console.log('Files:', files)
				    	setOpen(false)}
				    }
				    onSave={(files) => {
				      console.log('Files:', files)
				      setOpen(false)
				    }}
				    
				  />
			</div>
}

