/*
	COUNTER.JS
	V. 1.0.2
	José Javier Fernández Mendoza 2017
	Require jquery
	Añade un parrafo a cada elemento con la clase "cuentacaracteres" para poner el contador de caracteres y los caracteres maximos
	El parrafo se llamara igual que la caja asociada terminando en _limit y tendrá la clase "limit"
	Añade el codigo necesario css en el head 
	1.0.2 ya no es necesario llamarlo despues, lo hace automaticamente en document.ready
	1.0.1 mejora en maxlength
	1.0.0 primera version
	
	
	
*/
(function($) {
  'use strict';

  $.fn.countChar = function() {

    return this.each(function(i, element) {
      $(element).keyup(function updateCharCounter() {

        var $me = $(this);
        var maxLength = parseInt($me.attr('maxlength'), 10);
        var charCount = $me.val().length;
        var nombrecajalimite=$me.prop('id')+"_limit";
        var cajalimite = $('#'+nombrecajalimite);

        cajalimite.text('' + maxLength + '/' + (maxLength - charCount));
      });
	   
        var $me = $(this),
          maxLength = parseInt($me.attr('maxlength'), 10),
          charCount = $me.val().length;
		  var nombrecajalimite=$me.prop('id')+"_limit";
          var cajalimite = $('#'+nombrecajalimite);
		 if (cajalimite.length==0){
			$me.after('<p id="'+nombrecajalimite+'" class="limit"></p>');
		  }
		   cajalimite = $('#'+nombrecajalimite);
		  cajalimite.text('' + maxLength + '/' + (maxLength - charCount));
     
    });
  };
  /* añade css para las cajas de manera automatica */
  $( "<style>.limit {  float: right;  clear: both;  margin-bottom: 10px;  font: 400 0.688em/1.38 'Roboto';  text-align: right;  color: #777777;}</style>" ).appendTo( "head" )
  
}(jQuery));
$( document ).ready(function() {
	 $('.cuentacaracteres').countChar();
});
