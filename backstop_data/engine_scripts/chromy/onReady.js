module.exports = function (chromy, scenario, vp) {
  console.log('SCENARIO > ' + scenario.label);
  require('./clickAndHoverHelper')(chromy, scenario);
  // chromy.evaluate(() => {
	//   return document.querySelector('html').classList.add('mode-backstopjs');
  // })
  // add more ready handlers here...
};
