import BaseService from './BaseService';

class EmailService extends BaseService {
    _instance;

    constructor() {
        super('/email')
    }

    static get Instance() {
        return this._instance || (this._instance = new this());
    }

    async sendEmail(from, subject, text) {
        const response = await this.client.post('/send', { from, subject, text });
        return response.data;
    }
}

export default EmailService.Instance;