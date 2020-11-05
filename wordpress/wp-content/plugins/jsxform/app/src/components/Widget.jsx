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
import { contactFormExample } from '../exampleForm'

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

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const {
    title,
    description,
    buttonText,
    icon,
  } = contactFormExample

  return <Card className={classes.widget}>
      <CardHeader
        title={title}
        subheader={description}
        avatar={
          <Avatar aria-label={`JSXForm by listingslab`}
            className={classes.avatar}>
            <Icon icon={ icon } color={`primary`} />
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
        
      />
      
      <CardContent>
        <JSXForm form={contactFormExample} />
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
              { buttonText }
            </span>
            <Icon icon={'send'} color={`error`} />
          </Button>

        </div>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
        <CardContent>
          <Typography variant={`h6`}>
            About JSX Form
          </Typography>
          <Typography variant={`body2`}>
            Forms are added as widget in WordPress admin. They get rendered from the following JSON object
          </Typography>
          <pre>
            { JSON.stringify(contactFormExample, null, 2) }
          </pre>

        </CardContent>

      </Collapse>
    </Card>
}
