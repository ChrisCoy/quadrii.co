interface FaxiosConfig {
  data: any;
  headers: { [key: string]: string };
}

interface FaxiosResponse<T = any> extends Response {
  data?: T;
}

type MethodType = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

interface FetchFunctionProps {
  method: MethodType;
  cache?: RequestCache;
}

function fetchFunction({ method, cache }: FetchFunctionProps) {
  return <T = any>(URL: string, config?: FaxiosConfig): Promise<FaxiosResponse<T>> => {
    return new Promise((resolve, reject) => {
      fetch(URL, {
        cache: cache,
        headers: config?.headers,
        body: config?.data ? JSON.stringify(config?.data) : undefined,
        method: method,
      })
        .then((res) => res.json())
        .then((res) => resolve({ ...res, data: res.json() }))
        .catch(reject);
    });
  };
}

function fetchFunctionRevalidate({ method }: FetchFunctionProps) {
  return <T = any>(
    URL: string,
    next: NextFetchRequestConfig,
    config?: FaxiosConfig
  ): Promise<FaxiosResponse<T>> => {
    return new Promise((resolve, reject) => {
      fetch(URL, {
        headers: config?.headers,
        body: config?.data ? JSON.stringify(config?.data) : undefined,
        method: method,
        next: next,
      })
        .then((res) => res.json())
        .then((res) => resolve({ ...res, data: res.json() }))
        .catch(reject);
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
