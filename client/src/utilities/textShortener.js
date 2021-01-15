// This function checks for over-long text and shortens it to prevent it from breaking a layout

export default function textShortener(string, maxLength, maxViewportWidth) {

    // Will only shorten if current viewport width is less than specified maxViewportWidth
    // Will only shorten if string is shorter than specified maxLength

    let shortenedText = "";

    if ((window.innerWidth <= maxViewportWidth) && (string.length > maxLength)) {
        shortenedText = string.slice( 0, (maxLength - 3)).replace(/\s?$/,'').concat('...');
    }  

    // If text was shortened, return it, otherwise return the original string unchanged
    if (shortenedText !== "") {
        return shortenedText; 
    } else {
        return string;
    }
    
  }