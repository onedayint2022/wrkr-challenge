import axios from './interceptor';

function getResultListApi(query?: string, language?: string): Promise<Response> {
    return axios.request({
        method: 'get',
        url: `https://api.github.com/search/repositories?q=${query}+language:${language}&per_page=20`,
    });
}
export { getResultListApi };
