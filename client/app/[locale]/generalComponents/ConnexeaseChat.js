"use client";

import { useEffect } from 'react';

const ConnexeaseChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.livechat.connexease.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.ConnexeaseWebMessenger) {
        window.ConnexeaseWebMessenger.Init('...');
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ConnexeaseChat;
