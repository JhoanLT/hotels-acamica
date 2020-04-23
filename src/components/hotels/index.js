import React from 'react'
import CardItem from './carditem'
import {Section, Columns} from 'react-bulma-components'

const Hotels = ({hotels}) => (
    <Section>
        <Columns>
            {
                hotels.length > 0 ? hotels.map((hotel, key) => (
                    <Columns.Column size={4} key={`hotel-${hotel.slug}-${key}`}>
                        <CardItem item={hotel}/>
                    </Columns.Column>
                    )):
                <div>No hay Hoteles para mostrar</div>
            }
        </Columns>
    </Section>
);

export default Hotels;