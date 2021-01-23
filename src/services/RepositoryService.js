import BaseService from './BaseService';

class RepositoryService extends BaseService {
    _instance;

    constructor() {
        super('/repositories')
    }

    static get Instance() {
        return this._instance || (this._instance = new this());
    }

    async findOneById(id) {
        const response = await this.client.get(`/${id}`);
        return response.data;
    }

    async findAllPublic() {
        const response = await this.client.get('/public');
        return response.data;
    }

    async search(text, page, pageSize) {
        const queryParams = `text=${text}&page=${page}&pageSize=${pageSize}`;
        const searchParams = new URLSearchParams(queryParams);
        const response = await this.client.post(`/search?${searchParams}`);
        return response.data;
    }
}

export default RepositoryService.Instance;