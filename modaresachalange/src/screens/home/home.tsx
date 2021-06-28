import React, { useState } from 'react'
import { Inject, ScheduleComponent, Week, Month, ViewsDirective, ViewDirective, EventSettingsModel } from '@syncfusion/ej2-react-schedule'

import { useClientActions, useClient } from '../../hooks/client'

require("./home.css")

const Home: any = (props: any) => {

    const { state } = useClient()
    const appointments_aux = state.getAllAppointmentsService.appointments
    const data:any = []
    for (let i=0; i<appointments_aux.length; i++) {
        data.push(
            {
                Subject: appointments_aux[i].client.name + " and " + appointments_aux[i].staff_member.first_name + " " + appointments_aux[i].staff_member.last_name,
                EndTime: new Date(appointments_aux[i].end),
                StartTime: new Date(appointments_aux[i].start)
            }
        )
    }

    const appointments: EventSettingsModel = {
        dataSource: data
    }

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => (setShowModal(!showModal))


    return (
        
        <>

        {
            showModal && 
            
            <div id="modal">
                <p>I am a modal!</p>
            </div>
        }

        <ScheduleComponent height={'90vh'} width={'80vw'} eventSettings={appointments}>
            <ViewsDirective>
                <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Month]} />
        </ScheduleComponent>

        <div id="buttonDiv">
            <button id="appointmentButton" onClick={handleClick} type="button" >New Appointment</button>
        </div>
        </>
      )
}

export default Home