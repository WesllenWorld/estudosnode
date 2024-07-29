# Carrinho de compras da Shopee

Este projeto é um conjunto de funções assíncronas para gerenciar um carrinho de compras. As funções permitem adicionar, remover e excluir itens do carrinho, calcular o total do carrinho e exibir os itens no carrinho.

## Funções
addItem(userCart, item)
Adiciona um item ao carrinho.

### removeItem(userCart, item)
Remove uma unidade do item especificado do carrinho. Se a quantidade do item for maior que 1, apenas diminui a quantidade. Se a quantidade for 1, remove o item do carrinho.

### deleteItem(userCart, itemName)
Exclui completamente um item do carrinho com base no nome do item.

### calculateTotal(userCart)
Calcula o total dos preços dos itens no carrinho.

### displayCart(userCart)
Exibe os itens no carrinho, incluindo nome, preço, quantidade e subtotal de cada item.