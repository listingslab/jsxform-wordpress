import React from 'react'
import {
	createMuiTheme,
	MuiThemeProvider, 
	CssBaseline,
} from '@material-ui/core/'
import { theme } from './theme/'
import {
	Widget
} from './components'


export default function App() {

	return	<MuiThemeProvider theme={createMuiTheme(theme)}>
				<CssBaseline />
				<Widget />
			</MuiThemeProvider>
}
