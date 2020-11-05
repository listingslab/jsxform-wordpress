import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import {
  InputDatetime,
  InputTime,
  InputString,
  InputAttachment,
  InputRadio,
  InputReminder,
  InputDuration,
} from './'

const useStyles = makeStyles(theme => ({
    jsxform:{
    },
}))

export default function JSXForm(props) {

  const classes = useStyles()
  const { 
    form,
    onFormChange,
  } = props
  const {
  	fields,
  } = form
  if (!fields) return null

  return  <form id={`jsxform`} >
            <MuiPickersUtilsProvider utils={MomentUtils}>
            <div className={clsx(classes.jsxform)}>
        			<Grid container>
        				{ fields.map ((item,i) => {
        					const {
                    type,
        					} = item
                  let field = null
                  switch (type) {
                    case `InputTime`:
                        field = <InputTime 
                                  options={item} 
                                  onFormChange={ onFormChange }
                                />
                            break
                    case `InputRadio`:
                        field = <InputRadio 
                                  options={item} 
                                  onFormChange={ onFormChange }
                                />
                            break                            
                    case `InputDatetime`:
                        field = <InputDatetime 
                                  options={item} 
                                  onFormChange={ onFormChange } 
                                />
                            break
                    case `InputString`:
                        field = <InputString 
                                  options={item} 
                                  onFormChange={ onFormChange } 
                                />
                            break
                    case `InputReminder`:
                        field = <InputReminder 
                                  options={item} 
                                  onFormChange={ onFormChange }
                                />
                            break
                    case `InputAttachment`:
                        field = <InputAttachment 
                        
                                  options={item} 
                                  onFormChange={ onFormChange }
                                />
                            break
                    case `InputDuration`:
                        field = <InputDuration 
                                  options={item} 
                                  onFormChange={ onFormChange }
                                />
                            break
                    default: {
                      // field = null
                      field = <div>ERROR MISSING COMPONENT! {type}</div>  
                    }
                  }
        					return 	<Grid item xs={12} key={`field_${i}`}>
        								    { field }
        							    </Grid>
        				})}
        			</Grid>  			
            </div> 
          </MuiPickersUtilsProvider>
        </form>
}
