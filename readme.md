# Gerador de QR Codes e de senhas

A aplicação tem como objetivo gerar QR Codes a partir de uma URL, assim como gerar senhas que podem conter letras maiúsclas, letras minúsculas, caracteres numéricos e carateres especiais. A aplicação pode ser visualizada através do próprio terminal.

## QR Codes

* Ao optar por gerar um QR Code, é requisitada a URL;
* Em seguida, o usuário deve escolher se deseja o QR Code em formato de imagem ou de texto pelo terminal.

## Senhas

* A aplicação utiliza cinco variáveis de ambiente:
- UPPERCASE_LETTERS - Caso possua o valor true, serão incluídas as letras maiúsculas na senha a ser gerada;
- LOWERCASE_LETTERS - Caso possua o valor true, serão incluídas as letras minúsculas na senha a ser gerada;
- NUMBERS - Caso possua o valor true, serão incluídos os caracteres numéricos na senha a ser gerada;
- SPECIAL_CHARACTERS - Caso possua o valor true, serão incluídos os carateres especiais na senha a ser gerada;
- PASSWORD_LENGTH - Deve ser um número inteiro para ditar o tamanho da senha

## Módulos utilizados:

* [chalk](https://www.npmjs.com/package/chalk)
* [prompt](https://www.npmjs.com/package/prompt)
* [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)