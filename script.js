const options = {

  bottom: '100px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#000', // default: '#fff'
  backgroundColor: '', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true

}
const darkmode = new Darkmode(options);

darkmode.showWidget();


$(document).ready(function () {
  $('.carousel').carousel();
});

$(document).ready(function () {
  $('.sidenav').sidenav();
});