import React from 'react'
import {
	createMuiTheme,
	MuiThemeProvider, 
	CssBaseline,
} from '@material-ui/core/'
import { theme } from './theme/'
import {
	JSXForm,
} from './components'

export default function App() {

	return	<MuiThemeProvider theme={createMuiTheme(theme)}>
				<CssBaseline />
				<JSXForm />
			</MuiThemeProvider>
}
