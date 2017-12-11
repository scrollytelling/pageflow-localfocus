// #example-spinner {
//         width: 100%;
//         height: 450px;
//         position:absolute;
//         background-image: url('spinner.svg');
//         background-position: center center;
//         background-repeat: no-repeat;
//         background-size: 4em;
//       }
//
//       #example {
//         opacity:0;
//         width:100%;
//         height:450px;
//         overflow:hidden;
//       }


LocalFocusAPI.selectAll('.localfocusvisual').on('loaded', function() {

}).on('ready', function() {
  // Wait for the widget to be ready
  this.element.animate({opacity: '1'});
  this.up('.spinner').fadeOut();
})
