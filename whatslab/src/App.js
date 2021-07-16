import React from 'react';
import styled from 'styled-components'

const RkChatConteiner = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
  border: 4px solid #5e1c59;
`

const NavegacaoConteiner = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 4px solid #5e1c59
`

const MensagemConteiner = styled.div`
  display: flex;
`

const InputConteiner = styled.div`
  display: flex;
`

const NomeInput = styled.input`
  width: 100px;
`

const MensagemInput = styled.input`
  flex-grow: 1;
`

const contatos = ['Ramon',
          'Keylla',
          'Amanda',
          'Leandro',
          'Lais']

class App extends React.Component {
  state = {
    messages: [],
    userValue: '',
    messageValue: ''
  }

  onChangeUserValue = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeMessageValue = (event) => {
    this.setState({messageValue: event.target.value})
  }

  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }

    const newMessagesArray = [newMessage, ...this.state.messages]

    this.setState({messages: newMessagesArray, messageValue: ''})
  }

  render() {
    return (
      <RkChatConteiner>
        <NavegacaoConteiner>
          {this.state.messages.map((message, index) => {
            return <p key={index}>
              <strong>{message.user}</strong>: {message.text}
            </p>
          })}
        </NavegacaoConteiner>
        <InputConteiner>
          <NomeInput
            onChange={this.onChangeUserValue} 
            value={this.state.userValue} 
            placeholder={'Nome'}
          />
          <MensagemInput
            onChange={this.onChangeMessageValue} 
            value={this.state.messageValue} 
            placeholder={'Mensagem'}
          />
          <button onClick={this.sendMessage}>Enviar</button>
        </InputConteiner>
      </RkChatConteiner>
    );
  }
}

/* <ol>
          <li>Ramon</li>
          <li>Keylla</li>
          <li>Amanda</li>
          <li>Leandro</li>
          <li>Lais</li> 
 </ol> */

export default App;




