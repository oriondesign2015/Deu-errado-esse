import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbOperations } from './HttpVerbDescription';

export class evolutionApi implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'evolutionApi',
        name: 'evolutionApi',
        icon: 'file:evolutionapi.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with EvolutionAPI',
        defaults: {
            name: 'evolutionApi',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'evolutionApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://evolutionapi.com',
            url: '',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'HTTP Verb',
                        value: 'httpVerb',
                    },
                ],
                default: 'httpVerb',
            },
            ...httpVerbOperations,
        ],
    };
}
