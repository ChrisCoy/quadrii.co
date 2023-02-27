interface FaxiosConfig {
	data: any;
	headers: { [key: string]: string };
}

interface FaxiosResponse<T = any> {
	data?: T;
	status?: number;
	headers?: { [key: string]: string };
}

type MethodType = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

interface FetchFunctionProps {
	method: MethodType;
	cache?: RequestCache;
}

function fetchFunction({ method, cache }: FetchFunctionProps) {
	return <T = any>(
		URL: string,
		config?: FaxiosConfig,
	): Promise<FaxiosResponse<T>> => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await fetch(URL, {
					cache: cache,
					headers: config?.headers,
					body: config?.data ? JSON.stringify(config?.data) : undefined,
					method: method,
				});
				const data = await result.json();
				const parsedHeaders = Object.fromEntries(result.headers);

				if (result.status >= 400) {
					throw new Error(`Error ${result.status}`);
				}

				resolve({ data: data, status: result.status, headers: parsedHeaders });
			} catch (error) {
				console.error("FAXIOS ERROR: " + error);
				reject(error);
			}
		});
	};
}

function fetchFunctionRevalidate({ method }: FetchFunctionProps) {
	return <T = any>(
		URL: string,
		next: NextFetchRequestConfig,
		config?: FaxiosConfig,
	): Promise<FaxiosResponse<T>> => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await fetch(URL, {
					next: next,
					headers: config?.headers,
					body: config?.data ? JSON.stringify(config?.data) : undefined,
					method: method,
				});
				const data = await result.json();
				const parsedHeaders = Object.fromEntries(result.headers);

				if (result.status >= 400) {
					throw new Error(`Error ${result.status}`);
				}

				resolve({ data: data, status: result.status, headers: parsedHeaders });
			} catch (error) {
				console.error("FAXIOS ERROR: " + error);
				reject(error);
			}
		});
	};
}

export const faxios = {
	static: {
		get: fetchFunction({ cache: "force-cache", method: "GET" }),
		post: fetchFunction({ cache: "force-cache", method: "POST" }),
	},
	server: {
		get: fetchFunction({ cache: "no-cache", method: "GET" }),
		post: fetchFunction({ cache: "no-cache", method: "POST" }),
	},
	revalidate: {
		get: fetchFunctionRevalidate({ method: "GET" }),
		post: fetchFunctionRevalidate({ method: "POST" }),
	},
};
