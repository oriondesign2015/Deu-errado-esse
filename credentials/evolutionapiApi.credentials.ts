import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class evolutionapi implements ICredentialType {
    name = 'evolutionApi';
    displayName = 'Evolution API';
    documentationUrl = 'https://doc.evolution-api.com';
    properties: INodeProperties[] = [
        {
            displayName: 'Token',
            name: 'token',
            type: 'string',
            default: '',
            typeOptions: {
                password: true,
            }
        },
        {
            displayName: 'Domain',
            name: 'domain',
            type: 'string',
            default: 'https://evolutionapi.com',
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                Authorization: '={{"Bearer " + $credentials.token}}',
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials?.domain}}',
            url: '/bearer',
        },
    };
}
