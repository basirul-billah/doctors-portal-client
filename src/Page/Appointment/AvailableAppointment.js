import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery, refetch } from 'react-query'
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading } = useQuery(['available', formattedDate, refetch], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h4 className='text-xl text-primary text-center my-12'>You have selected: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;