global.testing = () => {
  console.log(123456789);
};

global.doGet = () => {
  return HtmlService.createHtmlOutputFromFile("index");
};
