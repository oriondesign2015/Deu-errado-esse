import { INodeProperties } from 'n8n-workflow';

// Definindo as operações do verbo HTTP
export const httpVerbOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['httpVerb'],
            },
        },
        options: [
            {
                name: 'GET',
                value: 'get',
                description: 'Perform a GET request',
                routing: {
                    request: {
                        method: 'GET',
                    },
                },
            },
        ],
        default: 'get', // Adicionando a propriedade default
    },
];

// Remova as operações se não forem necessárias
// const getOperation: INodeProperties[] = [
//     {
//         displayName: 'Type of Data',
//         name: 'typeofData',
//         default: 'queryParameter',
//         description: 'Select type of data to send [Query Parameters]',
//         displayOptions: {
//             show: {
//                 resource: ['httpVerb'],
//                 operation: ['get'],
//             },
//         },
//         type: 'options',
//         options: [
//             {
//                 name: 'Query',
//                 value: 'queryParameter',
//             },
//         ],
//         required: true,
//     },
//     {
//         displayName: 'Query Parameters',
//         name: 'arguments',
//         default: {}, // Adicionando a propriedade default
//         description: "The request's query parameters",
//         displayOptions: {
//             show: {
//                 resource: ['httpVerb'],
//                 operation: ['get'],
//             },
//         },
//         options: [
//             {
//                 name: 'keyvalue',
//                 displayName: 'Key:Value',
//                 values: [
//                     {
//                         displayName: 'Key',
//                         name: 'key',
//                         type: 'string',
//                         default: '',
//                         required: true,
//                         description: 'Key of query parameter',
//                     },
//                     {
//                         displayName: 'Value',
//                         name: 'value',
//                         type: 'string',
//                         default: '',
//                         routing: {
//                             send: {
//                                 property: '={{$parent.key}}',
//                                 type: 'query',
//                             },
//                         },
//                         required: true,
//                         description: 'Value of query parameter',
//                     },
//                 ],
//             },
//         ],
//         type: 'fixedCollection',
//         typeOptions: {
//             multipleValues: true,
//         },
//     },
// ];

// Remova as operações se não forem necessárias
// const deleteOperation: INodeProperties[] = [
//     {
//         displayName: 'Type of Data',
//         name: 'typeofData',
//         default: 'queryParameter',
//         description: 'Select type of data to send [Query Parameter Arguments, JSON-Body]',
//         displayOptions: {
//             show: {
//                 resource: ['httpVerb'],
//                 operation: ['delete'],
//             },
//         },
//         type: 'options',
//         options: [
//             {
//                 name: 'Query',
//                 value: 'queryParameter',
//             },
//         ],
//         required: true,
//     },
// ];
