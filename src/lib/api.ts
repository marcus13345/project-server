const apiRoot = 'localhost:6842' // + 'bacon'
const api = proxyFactory('api');

function proxyFactory(prefix) {
	return new Proxy({
		prefix
	}, {
		get(target, prop: string) {
			if(prop === 'then') return undefined;
			if(prop === 'get') return callApi.bind(window, target.prefix);
			// if(prop === 'post') return callApi.bind(window, target.prefix + '.' + prop);
			return proxyFactory(`${target.prefix}.${prop}`);
		}
	});
}

async function callApi(path, ...args) {
	const url = `//${apiRoot}/${path.replace(/\./g, '/')}${args.map(v => `/${v}`).join('')}`;
	console.log(url);
	return (await fetch(url)).json();
}

export default api;