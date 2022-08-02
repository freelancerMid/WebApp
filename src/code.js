global.testing = () => {
  console.log(123456789);
};
// DOGET FUNCTION
global.doGet = () => {
  return HtmlService.createHtmlOutputFromFile("index");
};
