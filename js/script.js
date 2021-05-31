// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

window.onload = function() {
  // this function calculates the volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('r')

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const volumeRounded = volume.toFixed(3)

  // output
  document.getElementById('dimensions').innerHTML = "<ul>\n<li>Radius = " + radius
  document.getElementById('volume').innerHTML = "The volume is: " + volumeRounded + " cm³"
}
