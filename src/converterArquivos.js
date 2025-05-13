const fs = require('fs')
const pdfParse = require('pdf-parse');
const Tesseract = require('tesseract.js');

// Função para converter PDF em TXT
function converterPDF(caminhoPDF, caminhoTXT) {
  fs.readFile(caminhoPDF, (err, dataBuffer) => {
    if (err) {
      console.error('Erro ao ler o arquivo PDF:', err);
      return;
    }

    pdfParse(dataBuffer).then(data => {
      fs.writeFile(caminhoTXT, data.text, err => {
        if (err) {
          console.error('Erro ao salvar TXT do PDF:', err);
        } else {
          console.log('PDF convertido com sucesso para TXT!');
        }
      });
    }).catch(error => {
      console.error('Erro ao converter PDF:', error);
    });
  });
}

// Função para converter PNG em TXT via OCR
function converterPNG(caminhoPNG, caminhoTXT) {
  Tesseract.recognize(
    caminhoPNG,
    'por', //idioma
    { logger: m => console.log(m.status) } // Logs de progresso (opcional)
  ).then(({ data: { text } }) => {
    fs.writeFile(caminhoTXT, text, err => {
      if (err) {
        console.error('Erro ao salvar TXT do PNG:', err);
      } else {
        console.log('PNG convertido com sucesso para TXT!');
      }
    });
  }).catch(err => {
    console.error('Erro ao converter PNG:', err);
  });
}

// Exemplo de uso:
converterPDF('./medidas.pdf', './saida_pdf.txt');
converterPNG('./image.png', './saida_imagem.txt');
