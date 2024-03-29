import React from 'react'
import { Svg, G, Path, Symbol, Use } from 'react-native-svg'

import dimensions from '../utils/convertedDimensions'
import colors from '../values/colors'

const { changeButtonWidth, changeIconWidth } = dimensions,
	  { darkRed } = colors

export default class ChangeIcon extends React.Component {
	render() {
		return (
			<Svg 
				width={ changeIconWidth }  
				height={ changeIconWidth }
			>
				<Symbol id="icon" 
					viewBox={ '0 0 '+changeButtonWidth+' '+changeButtonWidth } 
					width={ changeButtonWidth }
					height={ changeButtonWidth }
				>
					<Path 
						d="M25.444,4.291c0,0-1.325,1.293-2.243,2.201C18.514,3.068,11.909,3.456,7.676,7.689   c-2.47,2.47-3.623,5.747-3.484,8.983h4C8.051,14.46,8.81,12.205,10.5,10.514c2.663-2.663,6.735-3.043,9.812-1.162   c-1.042,1.032-2.245,2.238-2.245,2.238c-0.841,1.009,0.104,1.592,0.584,1.577l5.624-0.001c0.297,0,0.539,0.001,0.539,0.001   s0.245,0,0.543,0h1.092c0.298,0,0.54-0.243,0.54-0.541V4.895C27.023,4.188,26.247,3.502,25.444,4.291z" 
						fill={ darkRed }
					/>
					<Path 
						d="M6.555,27.709c0,0,1.326-1.293,2.243-2.201c4.688,3.424,11.292,3.036,15.526-1.197   c2.47-2.471,3.622-5.747,3.484-8.983h-4.001c0.142,2.211-0.617,4.467-2.308,6.159c-2.663,2.662-6.735,3.043-9.812,1.161   c1.042-1.032,2.245-2.238,2.245-2.238c0.841-1.01-0.104-1.592-0.584-1.577l-5.624,0.002c-0.297,0-0.54-0.002-0.54-0.002   s-0.245,0-0.543,0H5.551c-0.298,0-0.54,0.242-0.541,0.541v7.732C4.977,27.812,5.753,28.498,6.555,27.709z" 
						fill={ darkRed }
					/>
				</Symbol>
				<Use
					href="#icon"
			        x="-0.5"
			        y="-0.5"
			        width={ changeIconWidth.toString() }
			        height={ changeIconWidth.toString() }
			    />
			</Svg>
		)
	}
}