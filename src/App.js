import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import './App.css'
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText : value});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding : id});
  }

  add(building) {
    var name = building.name;
    var code = building.code;
    var address = building.address;
    var latitude = building.coordinates.latitude;
    var longitude = building.coordinates.longitude;

    var data_temp = this.state.data;
    var id = data_temp.length + 1;

    var new_building = {
      id : id,
      code : code,
      name : name,
      address : address,
      coordinates : {
        latitude : latitude,
        longitude : longitude
      }
    }
    const all_buildings = this.state.data.map(value => {return value}).concat(new_building)
    this.setState({data : all_buildings})
    alert('Successfully added ' + building.name + ' to the directory')
  }

  delete(){
    var data = this.state.data.filter(building => {return building.id !== this.state.selectedBuilding.id})
    this.setState({
      data: data
    })
  }

  render() {
    
    return (
      <div className="bg">
          <div class="row justify-content-center">
            <h1>UF Directory App</h1>
        </div>
      
        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
            
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
              <div class='container'>
                </div>
                  <BuildingList
                    data={this.state.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data = {this.state.data}
                selectedBuilding = {this.state.selectedBuilding}
                delete = {this.delete.bind(this)}
              /><br/>
              <AddBuilding
              add = {this.add.bind(this)}/>
            </div>
            
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
