# JS Video Speed Controller

## Description

The aim of this exercise is to work with both mouse events and HTML5 video. The idea is to create an input that the user will be able to use to control the speed of the displayed video.

Instead of having to click up and down to change the video speed, the user can sort of 'DJ' it as he or she is watching the video while watching it.

## Javascript Used

* querySelector()
* MouseEvent.pageY
* HTMLElement.offsetHeight
* HTMLElement.style
* HTMLMediaElement.playbackRate
* event listener (mousemouve)
* Math.round
* Number.prototype.toFixed()

## Notes

* The `toFixed()` method formats a number using fixed-point notation.
* The `pageY` read-only property of the `MouseEvent` interface returns the Y (vertical) coordinate in pixels of the event relative to the whole document. This property takes into account any vertical scrolling of the page.
* The `HTMLElement.offsetHeight` read-only property returns the height of an element, including vertical padding and borders, as an integer.
* The `HTMLMediaElement.playbackRate` property sets the rate at which the media is being played back. This is used to implement user controls for fast forward, slow motion, and so forth.

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)
