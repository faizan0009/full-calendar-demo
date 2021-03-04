import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import rrulePlugin from '@fullcalendar/rrule'




export function FullCalendarComponent () {

    const handleDateClick = (arg: any) => { // bind with an arrow function
        console.log(arg)
        alert(arg.dateStr)
      }

    const handleChange = (e: any) => {
        console.log(e)
    }

    const handleEventClick = (e: any) => {
        alert(e.event.title)
    }

    const events = [
        { title: 'event 1', start: '2021-03-01T05:30:00Z', end: '2021-03-01T10:30:00Z', manager: 'Faizan', backgroundColor: 'red' },
        { title: 'event 2', date: '2021-03-02', backgroundColor: 'green' },
        // recurring event
        { title: 'event 3', duration: '02:00',
            rrule: {
                freq: 'monthly',
                interval: 1,
                dtstart: '2021-01-10T05:30:00', // will also accept '20120201T103000'
                until: '2021-05-01' // will also accept '20120201'
            }
        },
        { title: 'event 4', date: '2021-03-03' },
        { title: 'event 5',
            rrule: {
                freq: 'monthly',
                interval: 1,
                dtstart: '2021-01-11',
                until: '2021-05-12'
            }
        },
        // recurring event which can move together
        { title: 'event 6', groupId: '6',
            rrule: {
                freq: 'weekly',
                interval: 1,
                dtstart: '2021-01-11',
                until: '2021-05-12'
            }
        },
        // red areas where you cannot move event
        {
            start: '2021-03-24',
            end: '2021-03-28',
            overlap: false,
            display: 'background',
            color: '#ff9f89'
        },
        {
            date: '2021-03-06',
            editable: true,
            title: 'weekend',
            overlap: false,
            display: 'background',
            color: '#ff9f89'
        }
    ]
    return(
        <div>
            <FullCalendar
                plugins={[ rrulePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
                headerToolbar={{
                    left: 'prev,next,today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,timeGridDay,listYear'
                }}
                buttonText={{list: 'year'}}
                initialView="dayGridMonth"
                editable={true}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                eventChange={handleChange}
                events={events}
            />
        </div>
    )
}