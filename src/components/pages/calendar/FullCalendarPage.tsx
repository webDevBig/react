import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import Events from "./Events";
function FullCalendarPage() {
    return (
        <>
            <Box className='clndr_sc'>
                <Container>
                    <Grid container spacing={2} justifyContent='center'>
                       
                        <Grid item xs={12} className="cstmclndr">
                            <FullCalendar
                                defaultView="dayGridMonth"
                                header={{
                                left: "prev,next",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay"
                                }}
                                plugins={[dayGridPlugin, timeGridPlugin]}
                                events={Events}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
        </>
    )
}

export default FullCalendarPage
