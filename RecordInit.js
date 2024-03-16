async function FetchAPI(apiUrl, info) {
    return await fetch(apiUrl, info || {}).then(apiInfo=>apiInfo);
}

async function ReadStream(stream) {
    let ReadedStream = await new Response(stream, {headers:{"Content-Type": "text/html"}}).text().then(str=>str);
    return ReadedStream;
}

class APIStreamReader {
	/**
	 * @param {string} url - The URL to Fetch data from.
	 * @param {Object} info - The extra info to pass onto the Fetch.
	 */
	constructor (url, info) {
		this.url = url;
		this.info = info;
	}

	Fetch = async () => {
		let response = (await FetchAPI(this.url, this.info));
		return await ReadStream(response.body);
	}
}

Object.defineProperty(window, "DefProp", {
    value: function(name, val) {
    	Object.defineProperty(window, name, {
		    value: val,
		    writable: false,
		    configurable: false
		});

		if (window.global !== window) {
			window.global = window;
		}
    },
    writable: false,
    configurable: false
});

DefProp("RC_APIStreamReader", APIStreamReader);
DefProp("RC_FetchAPI", FetchAPI);
DefProp("RC_ReadStream", ReadStream);
