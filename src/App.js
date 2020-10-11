import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      number: '',
      range: '0',
      select: 'Kyiv',
    }
  }

  formSubmit = (event) => {
    event.preventDefault();
  }

  thisInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })

  }

  render() {
    return (
      <div className='section-form'>
        <h1>Enter your personal info</h1>
        <h4>Task 1.</h4>
        <p>Создайте форму. Форма должна содержать:</p>

        <ul>
          <li>input[text]</li>
          <li>input[number]</li>
          <li>input[range]</li>
          <li>textarea</li>
          <li>select</li>
          <li>input[submit]</li>
        </ul>

        <p>при вводе данных - выводить под формой таблицу в формате name - значение.</p>
        <form onSubmit={this.formSubmit}>

          <div className='section-input'>
            <label>Enter name:</label>
            <input onChange={this.thisInput} type='text' name='text' />
          </div>

          <div className='section-input'>
            <label>Enter age:</label>
            <input onChange={this.thisInput} type='number' name='number' />
          </div>

          <div className='section-input' >
            <label>Enter proffesional skill:</label>
            <input onChange={this.thisInput} type='range' defaultValue='0' min='0' max='100' name='range' />
          </div>

          <div className='section-input'>
            <label>Enter city:</label>
            <select onChange={this.thisInput} name='select'>
              <option value='Kyiv'>Kyiv</option>
              <option value='Odessa'>Odessa</option>
              <option value='Lviv'>Lviv</option>
              <option value='Dnipro'>Dnipro</option>
            </select>
          </div>

          <input type='submit' />
        </form>

        <div className='section-out'>
          <table>
            <tbody>

              {Object.keys(this.state).map((elem, index) => {
                return <tr key={index}><td>{elem}</td><td>{this.state[elem]}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
      </div >
    );
  }

}

export default App;
