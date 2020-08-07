import React, { useState, useEffect, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'


import './styles.css'
import TeacherItem,{ Classe } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'



function TeacherList() {

    const [classes, setClasses] = useState([])

    const [subject, setSubject] = useState('')
    const [weekDay, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {

    })

    async function getClasses(e: FormEvent) {

        e.preventDefault()

        await api.get(`/classes`, {
            params: {
                week_day: weekDay,
                subject,
                time
            }
        }).then(res => {

            setClasses(res.data)

        }).catch(err => {

            console.log(err)
        })

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={getClasses}>
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
                        value={weekDay}
                        onChange={e => setWeekDay(e.target.value)}
                    />
                    <Input
                        label="Hora"
                        name="time"
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type="submit">
                        Buscar
                        </button>

                </form>
            </PageHeader>

            <main>
                {
                    classes.map((classe: Classe) => {

                        return (
                            <TeacherItem
                                key={classe.id}
                                classe={classe}
                            />
                        )
                    })
                }


            </main>
        </div>
    )
}

export default TeacherList