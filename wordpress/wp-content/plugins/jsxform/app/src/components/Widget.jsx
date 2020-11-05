import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
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

import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  widget: {
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

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return <Card className={classes.widget}>
      <CardHeader
        avatar={
          <Avatar 
            aria-label={`JSXForm`}
            className={classes.avatar}
          >
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
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={`JSXForm`}
        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        submit
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        
        <CardContent>
          <Typography variant={`h6`}>About JSX Form</Typography>
          <Typography variant={`body1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae varius ipsum. Phasellus ac orci sit amet nibh ultricies feugiat. Maecenas semper nisl leo, sit amet consequat urna fermentum in. Quisque sit amet dapibus est, a bibendum ex. Donec pellentesque purus nec massa suscipit, nec sollicitudin diam ornare.
          </Typography>
        </CardContent>

      </Collapse>
    </Card>
}
