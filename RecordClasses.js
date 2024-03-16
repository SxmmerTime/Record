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
		let response = (await Record.modules.FetchAPI(this.url, this.info));
		return await Record.modules.Read(response.body);
	}
}

class Test {

}

export { APIStreamReader, Test };