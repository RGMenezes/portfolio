"use client";

import { useState, useEffect } from "react";
import Text from "../base/Text";
import styles from "./TypingMessage.module.css";

const CycleState = {
  TYPING: "typing",
  WAITING: "waiting",
  DELETING: "deleting",
} as const;

type CycleStateKeys = (typeof CycleState)[keyof typeof CycleState];

interface MessageState {
    data: string[];
    value: string;         
    index: {
        current: number;   
        max: number;       
    };
    charIndex: number;     
    displayedValue: string; 
    cycleState: CycleStateKeys;
}

export default function TypingMessage({ data = ["Vazio"] }: { data?: string[] }) {
  const [message, setMessage] = useState<MessageState>({
    data: data,
    value: data[0] || "",
    index: {
      current: 0,
      max: data.length - 1,
    },
    charIndex: 0,
    displayedValue: "",
    cycleState: CycleState.TYPING, 
  });

  const CHAR_TYPE_DELAY = 100;    
  const PAUSE_AFTER_TYPE = 1500;  

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (message.cycleState === CycleState.TYPING) {
            
      interval = setInterval(() => {
        setMessage((prev) => {
          if (prev.charIndex < prev.value.length) {
            return {
              ...prev,
              charIndex: prev.charIndex + 1,
              displayedValue: prev.value.slice(0, prev.charIndex + 1),
            };
          } 
          return { ...prev, cycleState: CycleState.WAITING };
        });
      }, CHAR_TYPE_DELAY);

    } else if (message.cycleState === CycleState.WAITING) {
            
      interval = setTimeout(() => {
                
        setMessage((prev) => ({ ...prev, cycleState: CycleState.DELETING }));
      }, PAUSE_AFTER_TYPE);

    } else if (message.cycleState === CycleState.DELETING) {
            
      interval = setInterval(() => {
        setMessage((prev) => {
          if (prev.charIndex > 0) {
            return {
              ...prev,
              charIndex: prev.charIndex - 1,
              displayedValue: prev.value.slice(0, prev.charIndex - 1),
            };
          } 
                    
          const nextIndex = (prev.index.current + 1) % (prev.index.max + 1);
          const nextValue = prev.data[nextIndex];

          return {
            ...prev,
            value: nextValue,
            index: { ...prev.index, current: nextIndex },
            charIndex: 0,
            displayedValue: "",
            cycleState: CycleState.TYPING, 
          };
        });
      }, CHAR_TYPE_DELAY);
    }
        
    return () => {
      if (interval) {
                
        if (message.cycleState === CycleState.WAITING) {
          clearTimeout(interval as NodeJS.Timeout);
        } else {
          clearInterval(interval as NodeJS.Timeout);
        }
      }
    };

  }, [message.cycleState]);

  return (
    <Text className={styles.textIllustrative} variant="p2">{message.displayedValue}</Text>
  );
};