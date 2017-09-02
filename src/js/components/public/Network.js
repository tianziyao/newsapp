import fetch from 'isomorphic-fetch'
import {message, Modal} from 'antd'
// require('es6-promise').polyfill()

const errorMessages = (res) => `${res.status} ${res.statusText}`
const baseURL = 'http://newsapi.gugujiankong.com/Handler.ashx'

function setUriParam(keys, value, keyPostfix) {
	let keyStr = keys[0]
	keys.slice(1).forEach((key) => {
		keyStr += `[${key}]`
	})
	if (keyPostfix) {
		keyStr += keyPostfix;
	}
	return `${encodeURIComponent(keyStr)}=${encodeURIComponent(value)}`;
}

function getUriParam(keys, object) {
	const array = []
	if (object instanceof (Array)) {
		object.forEach((value) => {
			array.push(setUriParam(keys, value, '[]'))
		})
	}
	else if (object instanceof (Object)) {
		for (const key in object) {
			if (object.hasOwnProperty(key)) {
				const value = object[key]
				array.push(getUriParam(keys.concat(key), value))
			}
		}
	}
	else {
		if (object !== undefined) {
			array.push(setUriParam(keys, object))
		}
	}
	return array.join('&')
}

/*将parameter转为数组，再转为字符串并用&连接*/
function toQueryString(object) {
	const array = []
	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			const str = getUriParam([key], object[key])
			if (str !== '') {
				array.push(str)
			}
		}
	}
	return array.join('&')
}

function check401(res) {
	// 登陆界面不需要做401校验
	if (res.status === 401 && !res.url.match('auth')) {
		Modal.error({
			title: '登陆验证过期',
			content: '您的登陆验证已过期，请重新登陆'
		})
		return Promise.reject(errorMessages(res))
	}
	return res
}

function check404(res) {
	if (res.status === 404) {
		return Promise.reject(errorMessages(res))
	}
	return res
}

function jsonParse(res) {
	return res.json()
}

function Network(action, options, fail, success) {
	let mergeUrl = baseURL + "?action=" + action + "&"
	const defaultOptions = {
		method: 'GET'
	}
	const opts = Object.assign({}, defaultOptions, {...options})
	/*将params转为url请求参数*/
	if (opts && opts.method === "GET" && opts['params']) {
		mergeUrl = mergeUrl + toQueryString(opts['params'])
	}
	return fetch(mergeUrl, opts)
		.then(check401)
		.then(check404)
		.then(jsonParse)
		.then(function (json) {
			success(json)
		}).catch(function (ex) {
			message.error('请求服务器失败，请稍后再试')
			fail(ex)
		})
}

export default Network