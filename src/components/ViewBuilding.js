import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		var count = 0
		const current = this.props.data.find(selected => {
			return selected.id === this.props.selectedBuilding.id

		})
		if (current === undefined)
			if (count === 0){
				count = count + 1;
				return (
					<div>
					<div class="card w-75 text-white bg-dark mb-3"> 
					<div class='card-header bg-primary'><h5>Select Building</h5></div>
					Code : None <br/>
					Address : None<br/>
					Coordinates : None<br/>
					</div>
					</div>
				);
			}
			else{
				return (
					<div>
						<p>
							{' '}
							<i>Building Removed</i>
						</p>
					</div>
				);
			}
		
		else if (current.coordinates)
		return (
			<div class="card w-75 text-white bg-dark mb-3"> 
					<div class='card-header bg-primary'><h5>{current.name}</h5></div>
					Code : {current.code}<br/>
					Address : {current.address}<br/>
					Coordinates : {current.coordinates.latitude}, {current.coordinates.latitude}<br/>
					<button 
            			type = 'button' 
            			class = 'btn btn-outline-danger'
            			onClick = {() => this.props.delete()}
					>Remove Building</button>
			</div>
		);
		else return(
			<div class = 'card w-75 text-white bg-dark mb-3' >
					<div class='card-header bg-primary'><h5>{current.name}</h5></div>
					Code : {current.code}<br/>
					<button 
            			type = 'button' 
            			class = 'btn btn-outline-danger'
            			onClick = {() => this.props.delete()}
					>Remove Building</button>
			</div>
		)
	}
}
export default ViewBuilding;
