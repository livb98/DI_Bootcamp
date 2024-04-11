const { AsyncLocalStorage } = require('async_hooks');
const express = require('express')
const emoji = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emojis here if needed
  ];


  function getEmoji(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  const selectedEmoji = getEmoji(emoji);
  console.log(selectedEmoji);


