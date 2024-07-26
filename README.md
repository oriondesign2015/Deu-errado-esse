![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-evolutionapi

Este repositório contém nodes de exemplo para ajudar você a começar a criar suas próprias integrações personalizadas para [n8n](n8n.io). Inclui o linter de nodes e outras dependências.

Para tornar seu node personalizado disponível para a comunidade, você deve criá-lo como um pacote npm e [submetê-lo ao registro npm](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry).

## Pré-requisitos

Você precisa ter o seguinte instalado em sua máquina de desenvolvimento:

* [git](https://git-scm.com/downloads)
* Node.js e pnpm. Versão mínima Node 18. Você pode encontrar instruções sobre como instalar ambos usando nvm (Node Version Manager) para Linux, Mac e WSL [aqui](https://github.com/nvm-sh/nvm). Para usuários de Windows, consulte o guia da Microsoft para [Instalar NodeJS no Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Instale n8n com:
  ```
  pnpm install n8n -g
  ```
* Recomendado: siga o guia do n8n para [configurar seu ambiente de desenvolvimento](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/).

## Usando este starter

Estes são os passos básicos para trabalhar com o starter. Para orientações detalhadas sobre como criar e publicar nodes, consulte a [documentação](https://docs.n8n.io/integrations/creating-nodes/).

1. [Gere um novo repositório](https://github.com/n8n-io/n8n-nodes-starter/generate) a partir deste repositório de template.
2. Clone seu novo repositório:
   ```
   git clone https://github.com/<sua organização>/<seu-nome-repo>.git
   ```
3. Execute `pnpm i` para instalar as dependências.
4. Abra o projeto no seu editor.
5. Navegue pelos exemplos em `/nodes` e `/credentials`. Modifique os exemplos ou substitua-os pelos seus próprios nodes.
6. Atualize o `package.json` para corresponder aos seus detalhes.
7. Execute `pnpm lint` para verificar erros ou `pnpm lintfix` para corrigir erros automaticamente quando possível.
8. Teste seu node localmente. Consulte [Execute seu node localmente](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/) para orientação.
9. Substitua este README pela documentação do seu node. Use o [README_TEMPLATE](README_TEMPLATE.md) para começar.
10. Atualize o arquivo LICENSE para usar seus detalhes.
11. [Publique](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) seu pacote no npm.

## Mais informações

Consulte nossa [documentação sobre criação de nodes](https://docs.n8n.io/integrations/creating-nodes/) para informações detalhadas sobre como construir seus próprios nodes.

## Licença

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
