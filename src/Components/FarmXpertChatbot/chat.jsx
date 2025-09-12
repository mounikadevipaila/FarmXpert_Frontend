import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script.async = true;

    script.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          rootId: "JotformAgent-01979c128bdd7ab48f55a0dae432eadfd283",
          formID: "01979c128bdd7ab48f55a0dae432eadfd283",
          queryParams: ["skipWelcome=0", "maximizable=1"],
          domain: "https://www.jotform.com",
          isInitialOpen: false,
          isDraggable: true,
          background: "linear-gradient(180deg,rgb(40, 98, 69) 0%,rgb(41, 89, 41) 100%)",
          buttonBackgroundColor: "#28A745", // Green background
          buttonIconColor: "#FFFFFF",       // White icon
          variant: false,
          customizations: {
            greeting: "Yes",
            greetingMessage: "👋 Welcome to FarmXpert Support! How can I help you today?",
            pulse: "Yes",
            position: "right",
            tooltip: "Click here to chat with AgroBot",
            fontColor: "#000000",
            fontSize: "14px"
          }
        });
        setTimeout(() => {
          const agentButton = document.querySelector('[data-testid="chatButton"]');
          if (agentButton) {
            agentButton.style.borderRadius = "50%";            // Make it round
            agentButton.style.width = "60px";                  // Adjust size
            agentButton.style.height = "60px";
            agentButton.style.backgroundColor = "#28A745";     // Bright green
            agentButton.style.boxShadow = "0 0 10pxrgb(42, 91, 54)";
          }
        }, 1000); 
      }
    };

    document.body.appendChild(script);
  }, []);

  return <div id="JotformAgent-01979c128bdd7ab48f55a0dae432eadfd283" />;
};

export default ChatBot;
