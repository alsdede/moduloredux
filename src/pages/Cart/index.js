import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
        <ProductTable>
        <thead>
            <tr>
                <th/>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th/>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-fly-unissex/14/D22-2814-014/D22-2814-014_detalhe1.jpg?resize=280:280" alt="Tênis"></img>
                </td>
                <td>
                    <strong>Tênis massa</strong>
                    <span>R$129,99</span>
                </td>
                <td>
                    <div>
                    <button type="button" >
                        <MdRemoveCircleOutline size="20" color="#7159c1"/>
                    </button>
                    <input readOnly value={2}/>
                    <button type="button">
                        <MdAddCircleOutline size="20" color="#7159c1"/>
                    </button>
                    </div>
                </td>
                <td>
                    <strong>R$258,80</strong>
                </td>
                <td>
                    <button type="button">
                    <MdDelete size="20" color="#7159c1"/>
                    </button>
                </td>
            </tr>
        </tbody>
        </ProductTable>
        <footer>
            <button type ="button">Finalizar pedido</button>
            <Total>
                <span>TOTAL</span>
                <strong>R$1927,08</strong>
            </Total>
        </footer>
    </Container>
  );
}
