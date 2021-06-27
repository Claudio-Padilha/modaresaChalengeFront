import React, { useMemo } from 'react'
import { Inject, ScheduleComponent, Week, Month, ViewsDirective, ViewDirective, EventSettingsModel } from '@syncfusion/ej2-react-schedule'

const Home: any = () => {

    const appointments: EventSettingsModel = {
        dataSource: [
            {Subject: 'client A and staff member B', EndTime: new Date(2021, 5, 27, 12, 0), StartTime: new Date(2021, 5, 27, 11, 0)}
        ]
    }

    return (
        <ScheduleComponent eventSettings={appointments}>
            <ViewsDirective>
                <ViewDirective option='Week'/>
                <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Week, Month]} />
        </ScheduleComponent>
      )
}

export default Home