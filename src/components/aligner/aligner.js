import React from 'react'
import { View } from 'react-native'

export default class Aligner extends React.Component {

	state = {
		style: {
			flex: 1
		}
	}

	alignmentsHorizontally = {
		'left': 'flex-start',
		'right': 'flex-end',
		'center': 'center'
	}

	alignmentsVertically = {
		'top': 'flex-start',
		'bottom': 'flex-end',
		'center': 'center'
	}

	componentWillMount() {
		this.setState({
			style: this.getStyle()
		})
	}

	getStyle() {
		let { horizontally, vertically, alignIn } = this.props,
			aligner = this.state.style,
			{ align, justify } = this.getAlignments(alignIn, vertically, horizontally)

		if(alignIn) aligner['flexDirection'] = alignIn

		aligner['alignItems'] = this.alignmentsHorizontally[align]
		aligner['justifyContent'] = this.alignmentsVertically[justify]

		return aligner
	}

	getAlignments(alignIn, vertically, horizontally) {
		return alignIn == 'row'
			? {
				align: vertically || 'center',
				justify: horizontally || 'center'
			}
			: {
				align: horizontally || 'center',
				justify: vertically || 'center'
			}
	}

	render() {
		return (
			<View style={ this.state.style }>
				{ this.props.children }
			</View>
		)
	}
}