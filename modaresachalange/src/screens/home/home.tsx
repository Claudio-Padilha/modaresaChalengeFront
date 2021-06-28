import React, { useState } from 'react'
import { Inject, ScheduleComponent, Week, Month, ViewsDirective, ViewDirective, EventSettingsModel } from '@syncfusion/ej2-react-schedule'

import { useClientActions, useClient } from '../../hooks/client'

import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

require("./home.css")

const Home: any = (props: any) => {
    

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

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

    const clients: any = state.getAllClientsService.clients
    const staffMembers = state.getAllStaffMembersService.staff_members

    console.log(staffMembers, "STAFF")

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => (setShowModal(!showModal))


    return (
        
        <>

        {
            showModal && 
            
            <div id="modal">
                <p>Clients</p>
                <select >
                    <option disabled>Selecionar</option>
                    {clients?.map((client: any) => {
                        return <option value={client?.id}>{client.name}</option>
                    })}
                </select>

                <p>Staff Members</p>
                <select >
                    <option disabled>Selecionar</option>
                    {staffMembers?.map((staff_member: any) => {
                        return <option value={staff_member?.id}>{staff_member.first_name + " " + staff_member.last_name}</option>
                    })}
                </select>

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
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    />
                </Grid>
                </MuiPickersUtilsProvider>
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