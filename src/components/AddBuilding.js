import React from 'react'

class AddBuilding extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            code : '',
            address : '',
            latitude : '',
            longitude : '',
        };
    }
    add() {
        var building = {
            name : this.name.value,
            code : this.code.value.toUpperCase(),
            address : this.address.value,
            coordinates : {
                latitude : this.latitude.value,
                longitude : this.longitude.value
            }
        }
        this.props.add(building)
    };

    render() {
        return(
            <div class="card w-75 text-white bg-dark mb-3"> 
            <form>
            <div class='card-header bg-primary'><h5>Add New Building</h5></div>
                <br/>
                <label>
                    <input type='text' placeholder='Name' ref={(name)=> this.name = name}/>
                </label><br/>
                <label>
                    <input type='text' placeholder='Code' ref={(code)=> this.code = code}/>
                </label><br/>
                <label>
                    <input type='text' placeholder='Address' ref={(address)=> this.address = address}/>
                </label><br/>
                <label>
                    <input type='text' placeholder='Latitude' ref={(latitude)=> this.latitude = latitude}/>
                </label><br/>
                <label>
                    <input type='text' placeholder='Longitude' ref={(longitude)=> this.longitude = longitude}/>
                </label><br/>
                <button 
        			type = 'button' 
        			class = 'btn btn-outline-success'
            		onClick = {this.add.bind(this)}
				>Add Building</button>
            </form>
            </div>
        )
    }
}
export default AddBuilding