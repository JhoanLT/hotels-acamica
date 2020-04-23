import React from 'react'
import DateFilter from './dateFilter';
import OptionsFilter from './optionsFilter';

const countries = [ 
    {value: undefined, name: 'Todos los países'}, 
    {value: 'Argentina', name: 'Argentina'}, 
    {value: 'Brasil', name: 'Brasil'}, 
    {value: 'Chile', name: 'Chile'}, 
    {value: 'Uruguay', name: 'Uruguay'} 
];

const prices = [ 
    {value: undefined, name: 'Cualquier precio'}, 
    {value: 1, name: '$'}, {value: 2, name: '$$'}, 
    {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} 
];

const rooms = [ 
    {value: undefined, name: 'Cualquier tamaño'}, 
    {value: 10, name: 'Hotel pequeño'}, 
    {value: 20, name: 'Hotel mediano'}, 
    {value: 30, name: 'Hotel grande'} 
];

/**
 * Filters component
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0 
 */
const Filters = ({filters, handleChangeFilter}) => (
  <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
      <div className="navbar-item">
            <DateFilter
                date={ filters.availabilityFrom}
                icon="sign-in-alt"
                onChange={handleChangeFilter}
                name="availabilityFrom"
            />
      </div>
      <div className="navbar-item">
            <DateFilter
                date={ filters.availabilityTo }
                icon="sign-out-alt"
                onChange={handleChangeFilter}
                name="availabilityTo"
            />
      </div>
      <div className="navbar-item">
            <OptionsFilter
                options={ countries }
                icon="globe"
                onChange={handleChangeFilter}
                name='country'
            />
      </div>
      <div className="navbar-item">
            <OptionsFilter
                options={ prices }
                icon="dollar-sign"
                onChange={handleChangeFilter}
                name='price'
            />
      </div>
      <div className="navbar-item">
            <OptionsFilter
                options={ rooms }
                icon="bed"
                onChange={handleChangeFilter}
                name='rooms'
            />
      </div>
  </nav>
)

export default Filters;