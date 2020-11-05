import React from 'react'
import clsx from 'clsx'
import { 
    useSelector,
} from 'react-redux'
import {
  getSignedUrl,
} from '../../redux/attachments/actions'
import {
  makeStyles,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  viewAttachment: {
    // padding: theme.spacing(),
  },
  thumbnail:{
    width: '100%',
    borderRadius: theme.spacing(3),
  }
}))

export default function ViewAttachment(props) {

	const classes = useStyles()
  const {
    url,
  } = props
  const attachmentsSlice = useSelector(state => state.attachments)
  const {
    attachments,
  } = attachmentsSlice
  let signedUrl = null
  for (const key in attachments) {
    if (key === url){
      signedUrl = attachments[key]
    }
  }
  React.useEffect(() => {
    getSignedUrl(url)
  }, [url])

	return	<div className={clsx(classes.viewAttachment)} >
            { !signedUrl ? <div>loading...</div> : 
                <div className={clsx(classes.none)}>
                  <img 
                     className={clsx(classes.thumbnail)}
                     src={ signedUrl } 
                     alt={`Attachment`} 
                  />
                </div>
            }
          </div>
}









/*
  // let signedUrl = null
  // const attachmentsSlice = useSelector(state => state.attachments)
  // const {
  //   attachments,
  // } = attachmentsSlice

  // const theme = useTheme()
  // const primary = theme.palette.primary.main
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))



<span className={clsx(classes.attachment)}>
             <Skeleton 
               variant={`rect`}
               color={`primary`}
               animation={`wave`}
               height={150}
               width={150}
             />
          </span>
*/