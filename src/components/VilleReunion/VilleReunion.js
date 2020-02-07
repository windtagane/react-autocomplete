import React from 'react';
import VillesARRAY from './Villes';
import { AutoComplete } from '@bit/primefaces.primereact.autocomplete';

class VilleReunion extends React.Component {
	constructor() {
		super();
		this.state = {
			filteredVilles: null
		};
		this.filtreVilles = this.filtreVilles.bind(this);
	}
	

	componentDidMount() {
		this.villes = VillesARRAY;
 	}

	filtreVilles(event) {
		setTimeout(() => {
			let results;
			if (event.query.length === 0) {
				results = [...this.villes];
			} else {
				results = this.villes.filter(ville => {
					return ville.toLowerCase().startsWith(event.query.toLowerCase());
				});
			}
			this.setState({ filteredVilles: results });
		}, 250);
	}

	render() {
		return (
			<div>
				<span>
					Ville: {this.state.ville || 'Aucunes villes choisies'}
				</span>
				<div>
					<AutoComplete
					value={this.state.ville}
					suggestions={this.state.filteredVilles}
					completeMethod={this.filtreVilles}
					size={30}
					minLength={1}
					placeholder="Tapez le nom d'une ville"
					dropdown={true}
					onChange={e => this.setState({ ville: e.value })}
					/>
				</div>
			</div>
		) 
	}
	
}

export default VilleReunion; 