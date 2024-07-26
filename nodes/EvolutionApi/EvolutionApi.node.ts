import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';

export class EvolutionAPI implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'EvolutionAPI',
		name: 'evolutionApi', // Changed to match the name in the JSON
		icon: 'file:evolutionapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with EvolutionAPI',
		defaults: {
			name: 'EvolutionAPI',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'evolutionApi', // Changed to match the name in the credentials class
				required: false,
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
			...httpVerbFields,
		],
	};
}
