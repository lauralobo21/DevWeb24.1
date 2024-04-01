import React from 'react';

const MeuPC = () => {
        const PlacaMae = ({nome,preco}) => {
            return (
                <div>
                    <h2>PlacaMae</h2>
                    <h3>Nome: {nome}</h3>
                    <h3>Preco: {preco}</h3>
                </div>
            )
        }

        const Memoria = ({nome,preco}) => {
            return (
                <div>
                    <h2>Memoria</h2>
                    <h3>Nome: {nome}</h3>
                    <h3>Preco: {preco}</h3>
                </div>
            )
        }

        const PlacaDeVideo = ({nome,preco}) => {
            return (
                <div>
                    <h2>PlacaDeVideo</h2>
                    <h3>Nome: {nome}</h3>
                    <h3>Preco: {preco}</h3>
                </div>
            )
        }

    return (
        <div>
            <PlacaMae nome = "ATX" preco = "R$ 2.000" />
            <Memoria nome="Kingston" preco="R$ 300.00"/>
            <PlacaDeVideo nome="ASRock" preco="R$ 1.500" />
        </div>
    )
}

export default MeuPC