// Make a JSX element that shows the current year (use {new Date().getFullYear()}).

const currentYear = new Date().getFullYear();
const year = <h2>Full Date: {currentYear}</h2>
console.log(year);