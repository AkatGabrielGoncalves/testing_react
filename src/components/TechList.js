import React from 'react';
import TechItem from './TechItem';

class TechList extends React.Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  addNewTechToTechs = e => {
    this.setState({ 
      techs: [...(this.state.techs), this.state.newTech ],
      newTech: '',
    });
  }

  removeTechFromList = tech => {
    this.setState({techs: this.state.techs.filter(t => t !== tech)})
  }

  render() {
    return (
      <>
        <ul>
          {this.state.techs.map(tech => {
            return (
              <TechItem 
              key={this.state.techs.indexOf(tech)} 
              tech={tech} 
              onDelete={() => this.removeTechFromList(tech)}/>
            )
          })}
        </ul>
        <input 
        type="text" 
        onChange={this.handleInputChange} 
        value={ this.state.newTech }/>
        <button onClick={this.addNewTechToTechs} type="submit">Enviar</button>
      </>
    )
  }
}

export default TechList;
