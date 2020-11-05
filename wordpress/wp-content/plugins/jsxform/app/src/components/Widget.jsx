import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import {
  Button,
  Card,
} from '@material-ui/core/'

import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import svg from '../theme/svg/forms.svg'

import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  widget: {
    marginBottom: theme.spacing(2),
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  btnTxt:{
    color: 'white',
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: `white`,
  },
}))

export default function Widget() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const title = `JSXForm`
  const tagline = `Something different innit?`

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return <Card className={classes.widget}>
      <CardHeader
        avatar={
          <Avatar aria-label={`JSXForm by listingslab`}
            className={classes.avatar}>
            <Icon icon={`api`} color={`primary`} />
          </Avatar>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={`About JSXForm`}>
            <Icon icon={'sortdown'} color={`primary`} />
          </IconButton>
        }
        title={title}
        subheader={tagline}
      />
      
      <CardContent>
        <Typography variant={`body2`}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <Button
          variant={`contained`}
          color={`primary`}
          onClick={(e) => {
            e.preventDefault()
            console.log ('submit')
          }}
        >
        <Icon icon={'send'} color={`error`} />
        <span className={clsx(classes.btnTxt)}>
          Send
        </span>
        </Button>
        
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
        <CardContent>
          <Typography variant={`h6`}>About JSX Form</Typography>
          <Typography variant={`body2`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae varius ipsum. Phasellus ac orci sit amet nibh ultricies feugiat. Maecenas semper nisl leo, sit amet consequat urna fermentum in. Quisque sit amet dapibus est, a bibendum ex. Donec pellentesque purus nec massa suscipit, nec sollicitudin diam ornare.
          </Typography>
        </CardContent>

      </Collapse>
    </Card>
}


/*
<CardMedia
          className={classes.media}
          image={svg}
          title={title}
        />
*/