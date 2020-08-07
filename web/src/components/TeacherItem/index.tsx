import React from 'react'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface Classe {
    avatar: string
    bio: string
    cost: number
    id: number
    name: string
    subject: string
    user_id: number
    whatsapp: string
}

interface TeacherItemProps {
    classe: Classe
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classe }) => {

    async function createConnectons(){

        api.post('/connections',{
            user_id: classe.id
        })
    }

    return (
        <article  className="teacher-item">
            <header>
                <img src={classe.avatar} alt={classe.name} />
                <div>
                    <strong>{classe.name}</strong>
                    <span>{classe.subject}</span>
                </div>
            </header>
            <p>
                {classe.bio}
                </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>{Intl.NumberFormat("pt-BR",{ style: "currency", currency: "BRL" }).format(classe.cost)}</strong>
                </p>

                <a onClick={createConnectons} target="_blank" href={`https://wa.me/+55${classe.whatsapp}`} >
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                    </a>
            </footer>
        </article>
    )
}

export default TeacherItem