# Site Cursinho Comunitário ICA UFMG

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

Site oficial do cursinho comunitário do Instituto de Ciências Agrárias (ICA) da Universidade Federal de Minas Gerais (UFMG). Uma plataforma web desenvolvida para divulgar informações, notícias e facilitar o acesso aos recursos do cursinho preparatório.

## Funcionalidades

### Sistema de Navegação
- Menu responsivo para dispositivos móveis
- Navegação intuitiva por seções: Notícias, Informações, Edital e Contato
- Suporte completo à acessibilidade com ARIA attributes

### Seções do Site
- **Sistema de Notícias**: Cards informativos com as últimas atualizações
- **Informações**: Detalhes sobre o funcionamento do cursinho comunitário
- **Download de Edital**: Acesso direto aos documentos oficiais em PDF
- **Contato e Redes Sociais**: Canais de comunicação integrados

### Recursos Técnicos
- Design responsivo para todos os dispositivos
- Otimização SEO com meta tags estruturadas
- Open Graph tags para compartilhamento em redes sociais
- Preload de assets críticos para melhor performance
- Integração com Google Fonts (Roboto e Roboto Condensed)

## Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica moderna
- **CSS3**: Estilização avançada via `styles.css`
- **JavaScript**: Interatividade através do `menu.js`
- **Google Fonts**: Tipografia profissional (Roboto e Roboto Condensed)

### Hospedagem e Deploy
- **Vercel**: Plataforma de deploy otimizada para sites estáticos
- Configuração automatizada via `vercel.json`

### Recursos e Assets
- Imagens otimizadas em formato PNG e AVIF
- Documentos PDF para editais e informações oficiais
- Favicon personalizado

### Arquitetura
- Site estático de alta performance
- Design responsivo mobile-first
- Estrutura modular com separação clara de responsabilidades
- SEO otimizado com metadata completa

## Como Executar o Projeto

### Instalação Local
Por se tratar de um site estático, a execução é simples:

```bash
# Clone o repositório
git clone https://github.com/dainlucas/sitecomunica.git

# Navegue para o diretório
cd sitecomunica

# Abra o arquivo principal no navegador
open index.html
```

### Servidor de Desenvolvimento (Recomendado)
Para uma melhor experiência de desenvolvimento, utilize um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no seu navegador.

## Deploy na Vercel

O projeto está configurado para deploy automático na Vercel através do arquivo `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    { "src": "*.html", "use": "@vercel/static" },
    { "src": "*.css", "use": "@vercel/static" },
    { "src": "js/**", "use": "@vercel/static" },
    { "src": "images/**", "use": "@vercel/static" },
    { "src": "pdf/**", "use": "@vercel/static" }
  ]
}
```

### Deploy Manual
1. Conecte seu repositório GitHub à Vercel
2. O deploy será automático a cada push na branch principal
3. A Vercel detectará automaticamente as configurações do projeto

### Deploy via CLI
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Execute o deploy
vercel --prod
```

## Estrutura do Projeto

```
sitecomunica/
├── index.html              # Página principal
├── styles.css              # Estilos globais
├── vercel.json             # Configuração de deploy
├── js/
│   └── menu.js             # Lógica do menu responsivo
├── images/                 # Assets visuais
│   ├── *.png              # Imagens em PNG
│   └── *.avif             # Imagens otimizadas em AVIF
├── pdf/                    # Documentos oficiais
│   └── *.pdf              # Editais e informativos
└── favicon.ico             # Ícone do site
```

## Sobre o Cursinho Comunitário ICA UFMG

O cursinho comunitário do Instituto de Ciências Agrárias da UFMG é uma iniciativa social que visa democratizar o acesso ao ensino superior, oferecendo preparação gratuita para vestibulares e ENEM. Este site serve como portal de informações e comunicação com a comunidade.

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Contato

- **Projeto**: [Site Cursinho Comunitário ICA UFMG](https://github.com/dainlucas/sitecomunica)
- **Desenvolvedor**: [@dainlucas](https://github.com/dainlucas)
- **Instituição**: Instituto de Ciências Agrárias - UFMG

---

Desenvolvido com carinho para a comunidade acadêmica do ICA UFMG
