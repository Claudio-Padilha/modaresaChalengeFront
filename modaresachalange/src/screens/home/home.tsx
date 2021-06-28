import React, { useState } from 'react'
import { Inject, ScheduleComponent, Week, Month, ViewsDirective, ViewDirective, EventSettingsModel } from '@syncfusion/ej2-react-schedule'
import { useAppointmentActions } from '../../hooks/appointment';
import { useClientActions, useClient } from '../../hooks/client'

import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

require("./home.css")

const Home: any = () => {

    const {postAppointment} = useAppointmentActions()
    

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const [selectedTime, setSelectedTime] = React.useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (date: any) => {
        setSelectedTime(date);
    };

    const { state } = useClient()

    console.log(state, "STATE")
    const appointments_aux = state.getAllAppointmentsService.getAllAppointmentsService.appointments
    const data:any = []
    for (let i=0; i<appointments_aux?.length; i++) {
        data.push(
            {
                Subject: appointments_aux[i].client.name + " and " + appointments_aux[i].staff_member.first_name + " " + appointments_aux[i].staff_member.last_name,
                EndTime: new Date(appointments_aux[i].end.replace("T", " ")),
                StartTime: new Date(appointments_aux[i].start.replace("T", " "))
            }
        )
    }
    console.log(data, "DATAAAAAAAA EXTERA")
    const appointments: EventSettingsModel = {
        dataSource: data
    }

    const clients: any = state.getAllClientsService.clients
    const staffMembers = state.getAllStaffMembersService.staff_members

    const createApointment = () => {
        const data = {
            client: parseInt((document.getElementById('clientSelect') as HTMLInputElement).value),
            staff_member: parseInt((document.getElementById('staffSelect') as HTMLInputElement).value),
            start: String(selectedDate.getFullYear()) + "-" + String(selectedDate.getMonth()+1)+ "-" + String(selectedDate.getDate()) + "T" + String(selectedTime.getHours())+ ":" + String(selectedTime.getMinutes()+ ":00"),
            end: String(selectedDate.getFullYear()) + "-" + String(selectedDate.getMonth()+1)+ "-" + String(selectedDate.getDate()) + "T" + String(selectedTime.getHours()+1)+ ":" + String(selectedTime.getMinutes()+ ":00")
        }

        postAppointment(data)
    }

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => (setShowModal(!showModal))


    return (
        
        <>

        {
            showModal && 
            
            <div id="modal">
                <div id="selects">
                    <div>
                    <p>Clients</p>
                    <select id='clientSelect'>
                        <option disabled>Selecionar</option>
                        {clients?.map((client: any) => {
                            return <option value={client?.id}>{client.name}</option>
                        })}
                    </select>
                    </div>
                    
                    <div>
                    <p>Staff Members</p>
                    <select id="staffSelect">
                        <option disabled>Selecionar</option>
                        {staffMembers?.map((staff_member: any) => {
                            return <option value={staff_member?.id}>{staff_member.first_name + " " + staff_member.last_name}</option>
                        })}
                    </select>
                    </div>
                </div>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    />
                </Grid>
                </MuiPickersUtilsProvider>

                <div id="createButtonDiv">
                    <button id="createAppointmentButton" onClick={createApointment} type="button" >Create appointment</button>
                    <button id="cancelAppointmentButton" onClick={handleClick} type="button" >Cancel</button>
                </div>
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