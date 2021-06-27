import React from 'react'
import { Inject, ScheduleComponent, Day, Week, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule'

const Home = () => {
    return (
        <ScheduleComponent>
            <ViewsDirective>
                <ViewDirective option='Week'/>
                <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Week, Month]} />
        </ScheduleComponent>
      )
}

export default Home