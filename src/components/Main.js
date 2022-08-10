import React from 'react';
import imagem from "../img/lasanha.jpg"

export default class Main extends  React.Component{
    render(){
        return(
            <main>
                <h2>Benefícios da lasanha</h2>
                <ul>
                    <li>É delicioso</li>
                    <li>Perfeito para os dias frios</li>
                    <li>Energético</li>
                </ul>
                <figure>
                    <img src={imagem} alt="Imagem de lasanha saindo do forno" />
                </figure>
                <p>O nome da pessoa que ama lasanha é... {this.props.nome}</p>
                <p>A idade ...{this.props.idade} anos</p>
                <p>E também pretende estudar ...{this.props.estudar}</p>
            </main>
        )
    }
}