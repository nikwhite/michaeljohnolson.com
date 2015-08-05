
window.mjo = {}
window._ = require('lodash')

mjo.dispatcher = new (require('flux').Dispatcher)()
mjo.util = require('./util')

mjo.actionTypes = {
	CHANGE_SIZE: 'changeSize'
}

mjo.viewActions = {
	changeSize: function(size) {
		mjo.dispatcher.dispatch({
			actionType: mjo.actionTypes.CHANGE_SIZE,
			newSize: size
		})
	}
}

window.addEventListener('WebComponentsReady', function () {

	var enquire = require('enquire.js')

	enquire.register('screen and (min-width:800.1px)', {
		match: mjo.viewActions.changeSize.bind(this, 'large')
	})

	enquire.register('screen and (min-width:480.1px) and (max-width:800px)', {
		match: mjo.viewActions.changeSize.bind(this, 'medium')
	})

	enquire.register('screen and (min-width:0px) and (max-width:480px)', {
		match: mjo.viewActions.changeSize.bind(this, 'small')
	})

})
