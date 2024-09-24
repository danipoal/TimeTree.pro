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
    title: 'Reunión imporstante',
    start: new Date(2024, 8, 13, 10, 0), // 12 de septiembre de 2024, 10:00 AM
    end: new Date(2024, 8, 13, 16, 0),   // 12 de septiembre de 2024, 11:00 AM,
    allDay: false,
    resource: { location: "Sala de conferencias", attendees: 5 },
    desc: "Discusión sobre el nuevo proyecto",
    url: "https://miempresa.com/eventos/reunion",
    className: "evento-personalizado",
    style: { backgroundColor: 'blue', color: 'white' },
  }
];


const TestCalendar = () => {
  const [events, setEvents] = useState(event); // Puedes cargar tus eventos aquí
  const [selectedEvent, setSelectedEvent] = useState(null); // Estado para el evento seleccionado

  // Manejador del evento cuando se selecciona un evento
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    // Abre el modal
    const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  //setEvents(events);
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent} // Llama al evento cuando se hace clic en uno
      />

      {/* MODAL de eventos*/}
        <button className="btn" 
          onClick={() => {}}>
          open modal</button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello! {selectedEvent?.desc}</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
    </div>

  );
};

export default TestCalendar;