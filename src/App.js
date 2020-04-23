import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from './components/header/header';
import moment from 'moment';
import Hotels from './components/hotels';
import Filters from './components/filters';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filters: {
        availabilityFrom: moment(new Date()).format("YYYY-MM-DD"),
        availabilityTo: moment()
          .add(1, "month")
          .format("YYYY-MM-DD"),
        country: "select",
        price: "select",
        rooms: "select"
      },
      hotels: [],
      information: ``
    }

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  componentDidMount(){
    fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
    .then(data => data.json())
    .then(hotels => this.setState(() => ({hotels})))
    .catch(err => `Error loading information ${err}`)
  }

  handleChangeFilter({target}){
    this.setState((state) => {
      const filters = state.filters;
      filters[target.name] = target.value;
      return filters;
    })
  }

  filterArray(hotels, filter) {
    hotels= hotels.filter(function(item) {
      for (var key in filter) {
        if(key === 'availabilityFrom' || key === 'availabilityTo'){
          item[key] = moment(item[key]).format('YYYY-MM-DD')
        }

        if (item[key] === undefined || item[key] != filter[key])
          return false;
      }
      return true;
    });
    
    console.log('hotels', hotels)
  }

  render(){
    const {hotels, filters} = this.state;
    this.filterArray(hotels, filters)

    return (
      <div className="App">
        <Header
          title='Hoteles'
          subtitle='desde el Martes, 1 de Enero de 2020 hasta el Miércoles, 2 de Enero de 2020'
          filters={filters}
        />
        <Filters filters={filters} handleChangeFilter={this.handleChangeFilter}/>
        <Hotels hotels={hotels}/>
      </div>
    );
  }
}

export default App;
