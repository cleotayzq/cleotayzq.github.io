/ Resize iframe to full height
  function resizeIframe(height)
  {
    // "+60" is a general rule of thumb to allow for differences in
    // IE & and FF height reporting, can be adjusted as required..
    document.getElementById('shinyiframe').height = parseInt(height)+60;
  }