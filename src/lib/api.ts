const apiRoot = 'localhost:6842' // + 'bacon'
const api = proxyFactory('api');

function proxyFactory(prefix) {
	return new Proxy({
		prefix
	}, {
		get(target, prop: string) {
			if(prop === 'then') return undefined;
			const url = `//${apiRoot}/${target.prefix.replace(/\./g, '/')}`; // ${args.map(v => `/${v}`).join('')}
			if(prop === 'get') return callApi.bind(window, url);
			if(prop === 'post') return postApi.bind(window, url);
			// if(prop === 'post') return callApi.bind(window, target.prefix + '.' + prop);
			return proxyFactory(`${target.prefix}.${prop}`);
		}
	});
}

async function callApi(url) {
	return (await fetch(url)).json();
}

async function postApi(url, payload) {
	const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  const content = await rawResponse.json();

  console.log(content);
}

export default api;