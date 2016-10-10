/**
 * Custom Javacsript
 *
 */

// close the left mdl drawer on click
function close() {
  var d = document.querySelector('.mdl-layout');

  if(document.querySelector('.mdl-layout.is-small-screen') !== null){
    d.MaterialLayout.toggleDrawer();
  }
}

document.querySelector('.mdl-layout__drawer').addEventListener('click', close);
