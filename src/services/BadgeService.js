import BaseService from './BaseService';

class BadgeService extends BaseService {
    _instance;

    constructor() {
        super('/badges')
    }

    static get Instance() {
        return this._instance || (this._instance = new this());
    }

    async findAllBadges() {
        const response = await this.client.get('/non-expired');
        return response.data;
    }
}

export default BadgeService.Instance;