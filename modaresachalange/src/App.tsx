import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useClient, useClientActions } from './hooks/client'
import { useStaffMember, useStaffMemberActions } from './hooks/staff_member'
import { useAppointment, useAppointmentActions } from './hooks/appointment'

import Home from './screens/home/home';

function App() {

  const { getAllClients } = useClientActions()
  const { getAllStaffMembers } = useStaffMemberActions()
  const { getAllAppointments } = useAppointmentActions()

  getAllAppointments()

  return (
    <Home shouldFetch={true} />
  );
}

export default App;
