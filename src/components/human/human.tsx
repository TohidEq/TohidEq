'use client';

import { useTheme } from "next-themes";
import "./human.css";
import { useEffect, useRef, useState } from "react";

const MESSAGES_LIST = [
  "Hey there! Need something? I'm all ears.",
  "I'm Tohid, a developer who loves building things for the web and beyond.",
  "I've left my portfolio folder on the desk. Feel free to take a look!",
  "Want to know more about me? My GitHub has plenty of clues.",
  "I'm not just a pretty face, you know.",
  "I'd offer you coffee, but... I'm a lamp.",
  "Don't mind the mess. It's a feature, not a bug.",
  "Okay, that's enough clicking. I'm getting dizzy!",
  "Seriously? What exactly are you looking for?",
];

const MESSAGE_DELAY = 6000;
const FIRST_MESSAGE_DELAY = 500;
const LIGHT_OFF_DELAY = 30 * 1000;
const LIGHT_ON_DELAY = 2 * 60 * 1000;


export default function Human() {
  const { resolvedTheme } = useTheme();

  const [humanMessage, setHumanMessage] = useState<string>()
  const [messageVisibility, setMessageVisibility] = useState<'show' | 'hidden'>('hidden');







  // Update message
  const messageTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const updateMessage = (message: string) => {
    setHumanMessage(message);
    setMessageVisibility('show');
    console.log("show")

    if (messageTimer.current) {
      clearTimeout(messageTimer.current);
    }

    messageTimer.current = setTimeout(() => {
      setMessageVisibility('hidden');
      console.log("hidden")
    }, MESSAGE_DELAY);
  };


  // Light reminder timer
  useEffect(() => {
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === 'dark';

    const timer = setTimeout(() => {
      updateMessage(
        isDark
          ? "My eye batteries are running low. Could you turn the lights back on?"
          : "My eyes are getting tired. Mind turning off the lights?"
      );
    }, isDark ? LIGHT_ON_DELAY : LIGHT_OFF_DELAY);

    return () => clearTimeout(timer);
  }, [resolvedTheme]);





 // Show messages in order
  const messageIndex = useRef(-1);
  const showNextMessage = () => {
    messageIndex.current = (messageIndex.current + 1) % MESSAGES_LIST.length;
    updateMessage(
      MESSAGES_LIST[messageIndex.current % MESSAGES_LIST.length]
    );
  };



  // First message after 500ms
  useEffect(() => {
    const timer = setTimeout(showNextMessage, FIRST_MESSAGE_DELAY);
    return () => clearTimeout(timer);
  }, []);




  return (
    <div className="human" id="human">
      <div className="human__countainer">
        <div className="human__content">
          <div className={`human__message human__message--${messageVisibility} absolute`}>
            {humanMessage}
          </div>
          <div className="human__me">
            <div className="human__heads" onClick={showNextMessage}>
              <div className="human__head human__head--big"></div>
              <div className="human__head human__head--small"></div>
            </div>
            <div className="human__body" onClick={showNextMessage}>
              <div className="human__body__shirt"></div>
            </div>
            <div className="human__eyes">
                <div className="human__eye human__eye--left">
                </div>
                <div className="human__eye human__eye--right">
                </div>
                <div className="human__eye__glow"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
