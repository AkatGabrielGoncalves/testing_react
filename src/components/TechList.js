import React from 'react';
import TechItem from './TechItem';

class TechList extends React.Component {
  state = {
    newTech: '',
    techs: [],
  };

  componentDidMount() {
    const techs = JSON.parse(localStorage.getItem('techs'));
    
    if (techs) {
      this.setState({ techs: techs })
    }

  }

  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs ) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }


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
              key={tech} 
              tech={tech} 
              onDelete={() => this.removeTechFromList(tech)}
              />
              )
            })}
        </ul>
        <input 
        type="text" 
        onChange={this.handleInputChange} 
        value={ this.state.newTech }/>
        <button onClick={ this.addNewTechToTechs } type="submit">Enviar</button>
      </>
    )
  }
}

export default TechList;
