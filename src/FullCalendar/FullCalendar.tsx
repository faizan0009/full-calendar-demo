import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";



export function FullCalendarComponent () {

    const handleDateClick = (arg: any) => { // bind with an arrow function
        console.log(arg)
        alert(arg.dateStr)
      }

    const handleChange = (e: any) => {
        console.log(e)
    }
    return(
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
                headerToolbar={{
                    left: 'prev,next,today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,timeGridDay,listYear'
                }}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                eventChange={handleChange}
                events={[
                    { title: 'event 1', editable: true, start: '2021-03-01T05:30:00Z', end: '2021-03-01T10:30:00Z' },
                    { title: 'event 2', date: '2021-03-02' },
                    { title: 'event 3', date: '2020-03-02' }
                ]}
            />
        </div>
    )
}