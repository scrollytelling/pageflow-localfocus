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


LocalFocusAPI.selectAll('.localfocusvisual', function() {
  this.on('loaded', function() {
    console.log('loaded');
  });

  this.on('ready', function() {
    console.log('ready');
  });
}
