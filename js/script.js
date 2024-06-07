// Copyright (c)2024 hames al sharoa All rights reserved
//
// Created by: hamesa al sharoa
// Created on: june 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-6/sw.js", {
    scope: "/ICS2O-Assignment-6/",
  })
}

/**
 * This function displays random dad jokes.
 */
const getJoke = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById("joke").innerHTML = data.setup + "<br><br>" + data.punchline
  } catch (err) {
    console.log(err)
  }
}

getJoke(
  "https://official-joke-api.appspot.com/random_joke"
)