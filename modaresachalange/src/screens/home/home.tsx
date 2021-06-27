import React, { useState } from 'react'
import { Inject, ScheduleComponent, Week, Month, ViewsDirective, ViewDirective, EventSettingsModel } from '@syncfusion/ej2-react-schedule'

import { useClientActions, useClient } from '../../hooks/client'

require("./home.css")

const Home: any = (props: any) => {

    const { state } = useClient()
    

    console.log(state, "STATEEEEEEEEEEEEEE")

    const appointments: EventSettingsModel = {
        dataSource: [
            {Subject: 'client A and staff member B', EndTime: new Date(2021, 5, 27, 12, 0), StartTime: new Date(2021, 5, 27, 11, 0)}
        ]
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