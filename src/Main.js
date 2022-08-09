import React from 'react';
import img from './img/lasanha.jpg'

export default class Footer extends  React.Component{
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
                    <img src={img} alt="Imagem de lasanha saindo do forno" />
                </figure>
            </main>
        )
    }
}