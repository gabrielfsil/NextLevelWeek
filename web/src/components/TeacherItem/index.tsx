import React from 'react'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {

    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4" alt="Gabriel Fernandes" />
                <div>
                    <strong>Gabriel Fernandes</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Um desenvolvedor apaixonado por inovação e desenvolvimento web e mobile
                        <br /><br />
                        Um desenvolvedor apaixonado por inovação e desenvolvimento web e mobile
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 40,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem