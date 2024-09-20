import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { enUS, es } from 'date-fns/locale';



// Si usas date-fns:

const locales = {
  'es': es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const event = [
  {
    title: 'Reunión importante',
    start: new Date(2024, 0, 12, 10, 0), // 12 de septiembre de 2024, 10:00 AM
    end: new Date(2024, 0, 12, 11, 0),   // 12 de septiembre de 2024, 11:00 AM
  },  
  {
    title: 'Reunión importante',
    start: new Date(2024, 8, 12, 10, 0), // 12 de septiembre de 2024, 10:00 AM
    end: new Date(2024, 8, 12, 11, 0),   // 12 de septiembre de 2024, 11:00 AM
  },  
  {
    title: 'Reunión importante',
    start: new Date(2024, 8, 13, 10, 0), // 12 de septiembre de 2024, 10:00 AM
    end: new Date(2024, 8, 13, 16, 0),   // 12 de septiembre de 2024, 11:00 AM
  }
];


const TestCalendar = () => {
  const [events, setEvents] = useState(event); // Puedes cargar tus eventos aquí
  
  //setEvents(events);
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default TestCalendar;