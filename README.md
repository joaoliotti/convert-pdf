# Conversor de PDF e PNG para TXT

Este projeto oferece uma solução para converter arquivos PDF e imagens PNG em arquivos de texto (TXT) utilizando Node.js.

## Funcionalidades

- Conversão de arquivos PDF para TXT
- Conversão de imagens PNG para TXT utilizando OCR
- Suporte para texto em português e inglês
- Interface simples via código

## Requisitos

- Node.js instalado
- NPM (Node Package Manager)

## Dependências

- `pdf-parse`: Para extrair texto de arquivos PDF
- `tesseract.js`: Para realizar OCR em imagens PNG

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/joaoliotti/convert-pdf.git
```

2. Instale as dependências:
```bash
npm install
```

## Como Usar

O projeto possui duas funções principais:

### Converter PDF para TXT

```javascript
converterPDF('./caminho/do/arquivo.pdf', './caminho/do/arquivo.txt');
```

### Converter PNG para TXT (usando OCR)

```javascript
converterPNG('./caminho/da/imagem.png', './caminho/do/arquivo.txt');
```

## Exemplo de Uso

```javascript
// Converter um arquivo PDF
converterPDF('./example.pdf', './saida_pdf.txt');

// Converter uma imagem PNG
converterPNG('./example.png', './saida_imagem.txt');
```

## Tratamento de Erros

O projeto inclui tratamento de erros para:
- Falhas na leitura de arquivos
- Erros durante a conversão
- Problemas na gravação dos arquivos de saída

## Autor

João Liotti

## Licença

MIT