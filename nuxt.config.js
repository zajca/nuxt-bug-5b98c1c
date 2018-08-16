import qs from 'qs'

export default {
  mode: 'spa',

	router: {
		parseQuery: qs.parse,
		stringifyQuery: function (query) {
			if (qs.stringify(query)) {
				return "?" + qs.stringify(query)
			}
			return ""
		}
	},
}
