import React from 'react';

class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory => { 
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >=0
			}).map(directory => {
				return (
					<div class='container'>
					<div class = 'card w-75 p-3 text-white bg-dark mt-1 mb-2'>
					<tr key={directory.id}>
						<td onClick = {()=>selectedUpdate(directory)}> {directory.name} </td>
					</tr>
					</div>
					</div>
				);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
