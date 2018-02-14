export const Colors = {
  red:         0xf25346,
  white:       0xd8d0d1,
  brown:       0x000000,
  pink:        0xF5986E,
  brownDark:   0x000000,
  blue:        0x68c3c0,

  mustard:    0xffe066,
  grey:       0x50514f,
  pinkNeon:   0xff1654,


  ship:       0xffffff,
  light:      0x68c3c0, // blue: 0x68c3c0 //yellow: 0xffe066 //pinkChill: 0xF5986E  // red: 0xf25346
  // light:      0xf25346, //red
  // light:      0xF5986E, //pinkOrange
  // light:      0xffe066, //mustard
};





export function selectRandomColor() {
  const lightColors = [
    0x68c3c0, // blue,
    0xf25346, //red
    // 0xF5986E, //pinkOrange,
    0xffe066, //mustard
    // 0xF5986E, // chillpink
    // 0xf78764, //melon
    0xf0d3f7, //lavander
    // 0xa4f9c8, //mint
  ];

  return lightColors[Math.floor(Math.random()*lightColors.length)];
}

export let currentColor = 0x68c3c0;





//----------------------------



//
//
//
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
//
//
//
// setInterval()
//
//
//
// function x(startVal, endVal, 5000) {
//   if (startVal === endVal) { return }
//
//   console.log(startVal);
//
//   setTimeOut( x(startVal--, endVal, time), 250)
//
//   // startVal --;
// }
//
// function countDown (startVal, endVal, time, fun) {
//   let stepLength = time/(startVal - endVal);
//
//   for (var i = startVal; i > endVal; i--) {
//
//     setTimeOut( () => {
//       fun(); // feed in a callback to be executed
//     }, stepLength)
//   }
// }
//
//
// setTimeOut( () => {
//
// }, stepLength)
//
//
//
// camera.position.x =
//
//
//
//
//
//
// colorHexCode = countDown()
