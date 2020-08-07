import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" },

    ])

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [bio, setBio] = useState('')
    const [whatsapp, setWhatsapp] = useState('')


    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')



    function addScheduleItemsNewItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: "", to: "" }
        ])
    }

    function changeScheduleItemsValue(field: string, value: any, index: Number) {

        const newScheduleItems = scheduleItems.map((schedule, i) => {

            if (i === index) {

                if (field === "week_day")
                    return {
                        ...schedule,
                        week_day: value
                    }
                if (field === "from")
                    return {
                        ...schedule,
                        from: value
                    }
                if (field === "to")
                    return {
                        ...schedule,
                        to: value
                    }
            }

            return schedule
        })

        setScheduleItems(newScheduleItems)
    }

    async function handleCreateClasses(e: FormEvent) {

        e.preventDefault()

        
        await api.post('/classes', {
            name,
            avatar,
            bio,
            whatsapp,
            subject,
            cost,
            schedule: scheduleItems
        }).then(res => {
            
            if(res.status === 201){
                alert("Aula criada com sucesso")
            }

        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas"
                description="O primeiro passa é preencher esse fomulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClasses} >

                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            label="Nome Completo"
                            name="name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            label="Avatar"
                            name="avatar"
                            type="text"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                        />
                        <Input
                            label="WhatsApp"
                            name="whatsapp"
                            type="text"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                        />

                        <Textarea
                            label="Biografia"
                            name="bio"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            label="Matéria"
                            name="subject"
                            options={[
                                { value: "Matemática", label: "Matemática" },
                                { value: "Biologia", label: "Biologia" },
                                { value: "Física", label: "Física" },
                                { value: "Português", label: "Português" },
                                { value: "Geografia", label: "Geografia" },
                                { value: "Química", label: "Química" },
                                { value: "Artes", label: "Artes" },
                                { value: "História", label: "História" },

                            ]}
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                        <Input
                            label="Custo da sua hora por aula"
                            name="cost"
                            type="text"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis

                        <button type="button" onClick={addScheduleItemsNewItem}>
                                + Novo Horário
                        </button>
                        </legend>
                        {
                            scheduleItems.map((schedule, index) => {
                                return (
                                    <div key={index} className="schedule-item">
                                        <Select
                                            label="Dia da Semana"
                                            name="weekDay"
                                            options={[
                                                { value: "0", label: "Domingo" },
                                                { value: "1", label: "Segunda-Feira" },
                                                { value: "2", label: "Terça-Feira" },
                                                { value: "3", label: "Quarta-Feira" },
                                                { value: "4", label: "Quinta-Feira" },
                                                { value: "5", label: "Sexta-Feira" },
                                                { value: "6", label: "Sábado" }
                                            ]}
                                            value={schedule.week_day}
                                            onChange={e => changeScheduleItemsValue("week_day", e.target.value, index)}
                                        />
                                        <Input
                                            label="Das"
                                            name='from'
                                            type="time"
                                            value={schedule.from}
                                            onChange={e => changeScheduleItemsValue("from", e.target.value, index)}

                                        />
                                        <Input
                                            label="Até"
                                            name='to'
                                            type="time"
                                            value={schedule.to}
                                            onChange={e => changeScheduleItemsValue("to", e.target.value, index)}

                                        />
                                    </div>
                                )
                            })
                        }

                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>

        </div>
    )
}

export default TeacherForm