import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Welcome to NRPay!',
  
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
  
        // This message appears in
        // the bot chat bubble
        message: 'Please write your Name',
        trigger: '2'
    }, {
        id: '2',
  
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, Please Select Your issue?",
        trigger: '4',
    }, {
        id: '4',
        user: true,
        trigger: '5',
        
    },
    {
      id: '5',
      message: " Thanks I have send  Your issue for main team?",
     end:true,
      
  }
  ];
  
  const theme = {
    background: '#C9FF8F',
    headerBgColor: '#3a0ca3',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    
  };
  
  
  const config = {
    
    floating: true,
  };
  

  


const Chatbot = () => {
  return (
    <>

<ThemeProvider theme={theme}>
   <ChatBot steps={steps}  headerTitle="NRPay"  {...config}/> 
   </ThemeProvider>  

    </>
  )
}

export default Chatbot
