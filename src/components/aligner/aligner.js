import React from 'react'
import { View } from 'react-native'

export default class Aligner extends React.Component {

	style = {
		flex: 1
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

	getStyle() {
		let { horizontally, vertically, alignIn } = this.props,
			aligner = this.style

		aligner['flexDirection'] = alignIn
		let { align, justify } = this.getAlignments(alignIn, vertically, horizontally)

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
			<View style={ this.getStyle() }>
				{ this.props.children }
			</View>
		)
	}
}