import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
import { httpVerbOperations } from './HttpVerbDescription';

export class EvolutionApi implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Evolution API',
    name: 'evolutionApi',
    icon: 'file:evolutionapi.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Interact with Evolution API',
    defaults: {
      name: 'Evolution API',
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
        name: 'esource',
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

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[][] = [];

    for (let i = 0; i < items.length; i++) {
      const resource = this.getNodeParameter('resource', i) as string;
      const operation = this.getNodeParameter('operation', i) as string;
      const headers = this.getNodeParameter('headers', i) as { [key: string]: string };
      const body = this.getNodeParameter('body', i) as string;

      const options = {
        method: operation,
        uri: `https://evolutionapi.com/${resource}`,
        headers,
        body,
      };

      try {
        const response = await this.helpers.httpRequest(options);
        returnData.push([this.helpers.returnJsonArray(response)]);
      } catch (error) {
        throw new Error(`Error executing Evolution API request: ${error.message}`);
      }
    }

    return returnData;
  }
}

export default () => {
  return new EvolutionApi();
};
