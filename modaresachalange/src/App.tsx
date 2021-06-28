import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useAppointment, useAppointmentActions } from './hooks/appointment'
import { useClient, useClientActions } from './hooks/client'
import { useStaffMember, useStaffMemberActions } from './hooks/staff_member'

import Home from './screens/home/home';

function App() {

  
  const { getAllAppointments } = useAppointmentActions()
  const { getAllClients } = useClientActions()
  const { getAllStaffMembers } = useStaffMemberActions()

  getAllAppointments()
  getAllClients()
  getAllStaffMembers()


  return (
    <Home shouldFetch={true} />
  );
}

export default App;
