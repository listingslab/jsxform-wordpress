import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Avatar,
  Button,
  Collapse,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { JSXForm } from '../components'

const useStyles = makeStyles((theme) => ({
  widget: {
    marginBottom: theme.spacing(2),
    maxWidth: 400,
  },
  cardActions:{
    width: '100%',
    textAlign: 'right',
    padding: theme.spacing(),
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
            color={`secondary`}
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
        <div className={clsx(classes.cardActions)}>
        
          <Button
            variant={`contained`}
            color={`primary`}
            onClick={(e) => {
              e.preventDefault()
              console.log ('submit')
            }}>
            <span className={clsx(classes.btnTxt)}>
              Send
            </span>
            <Icon icon={'send'} color={`error`} />
          </Button>

        </div>
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
