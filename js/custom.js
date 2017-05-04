  var token = $('#token').text();
      /*
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100%',
          width: '100%',
          playerVars: {
                    autoplay: 1,
                    loop: 1,
                    controls: 0,
                    showinfo: 0,
                    autohide: 1,
                    modestbranding: 1,
                    disablekb: 1,
                    vq: 'hd1080'},
          videoId: '_wP3zZAn4ck',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
        player.mute();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 10000);
        }
        if (event.data == 5){
        	event.target.playVideo();
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      */

      $.post('includes/getUser.php', function (response) {
        $(".username").html(response);
      });
      $.post('includes/getVehicle.php', function (response) {
        $(".vehiclename").text(response);
      });
      $.post('includes/getLastFuelEntries.php', function (response) {
        $(".fueltable").html(response);
      });

      function lastfuelentriesmodal(purchase, odometer, fueltype, fuelprice, fuelamount, purchasedate, place, slidenumber, totalslides) {
        $('#lastfuelentriespurchase').text('$'+purchase+' Pesos');
        $('#lastfuelentriesodometer').text(odometer+' Km');
        $('#lastfuelentriesfueltype').text(fueltype);
        $('#lastfuelentriesfuelprice').text('$'+fuelprice+' Pesos');
        $('#lastfuelentriesfuelamount').text('$'+fuelamount+' Galones');
        $('#lastfuelentriespurchasedate').text(purchasedate);
        $('#lastfuelentriesplace').text(place);
        dashboardfueltotalslides = totalslides;
        dashboardfuelslidenumber = slidenumber;
        if (totalslides == 1){
          $('#dashboardfuelbackward').attr('disabled',true);
          $('#dashboardfuelforward').attr('disabled',true);
        }
        else if (totalslides == 2){
          if (slidenumber == 1){
            $('#dashboardfuelbackward').attr('disabled',false);
            $('#dashboardfuelforward').attr('disabled',true);
          }
          else if (slidenumber == 2){
            $('#dashboardfuelbackward').attr('disabled',true);
            $('#dashboardfuelforward').attr('disabled',false);
          }
        }
        else if (totalslides == 3){
          if (slidenumber == 1){
            $('#dashboardfuelbackward').attr('disabled',false);
            $('#dashboardfuelforward').attr('disabled',true);
          }
          else if (slidenumber == 2){
            $('#dashboardfuelbackward').attr('disabled',false);
            $('#dashboardfuelforward').attr('disabled',false);
          }
          else if (slidenumber == 3){
            $('#dashboardfuelbackward').attr('disabled',true);
            $('#dashboardfuelforward').attr('disabled',false);
          }
        } else if (totalslides == 4){
          if (slidenumber == 1){
            $('#dashboardfuelbackward').attr('disabled',false);
            $('#dashboardfuelforward').attr('disabled',true);
          }
          else if (slidenumber == 2){
            $('#dashboardfuelbackward').attr('disabled',false);
            $('#dashboardfuelforward').attr('disabled',false);
          }
          else if (slidenumber == 3){
            $('#dashboardfuelbackward').attr('disabled',false);
            $('#dashboardfuelforward').attr('disabled',false);
          }
          else if (slidenumber == 4){
            $('#dashboardfuelbackward').attr('disabled',true);
            $('#dashboardfuelforward').attr('disabled',false);
          }
        }
      }

      $('#dashboardfuelbackward').click(function(){
        if (dashboardfueltotalslides == 2){
          $('#fuelmore-modal').hide();
          $('body').find('#dashboardfuelentrieslink2').trigger('click');
          setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
          }
          else if (dashboardfueltotalslides == 3) {
            if (dashboardfuelslidenumber == 1) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink2').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
            else if (dashboardfuelslidenumber == 2) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink3').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
          }
          else if (dashboardfueltotalslides == 4) {
            if (dashboardfuelslidenumber == 1) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink2').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
            else if (dashboardfuelslidenumber == 2) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink3').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
            else if (dashboardfuelslidenumber == 3) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink4').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
          }
      })

      $('#dashboardfuelforward').click(function(){
        if (dashboardfueltotalslides == 2){
          $('#fuelmore-modal').hide();
          $('body').find('#dashboardfuelentrieslink1').trigger('click');
          setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
          }
          else if (dashboardfueltotalslides == 3) {
            if (dashboardfuelslidenumber == 2) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink1').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
            else if (dashboardfuelslidenumber == 3) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink2').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
          }
          else if (dashboardfueltotalslides == 4) {
            if (dashboardfuelslidenumber == 2) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink1').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
            else if (dashboardfuelslidenumber == 3) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink2').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
            else if (dashboardfuelslidenumber == 4) {
              $('#fuelmore-modal').hide();
              $('body').find('#dashboardfuelentrieslink3').trigger('click');
              setTimeout(function () {$('#fuelmore-modal').modal('show');},600);
            }
          }
      })

    $(document).keyup(function(e) {
    	if (e.keyCode == 27) {
          $('#fuelmore-modal').modal('hide');
    	}
	});


    //BEGIN PRICE CALCULATOR
    var result;
    //
    var listItemsCelebracion = "";
    var tipoCelebracionId;
    var premium;
    var tipoCelebracionTexto = "";
    var customText = "";
    //
    var listItemsGeneroMusical = "";
    var generoMusicalId;
    var generoMusicalTexto = "";
    //
    var listItemsMusicos = "";
    var musicosId;
    var musicosTexto = "";
    //
    var listItemsHorasMusicaEnVivo = "";
    var horasMusicaEnVivoId;
    var horasMusicaEnVivoTexto = "";
    //
    var horasAdicionales;
    //
    var valorAdicional = 0;
    //
    var listItemsInvitados = "";
    var invitadosId;
    var invitadosTexto = "";
    //
    var formatoId = 1;
    var formatoTexto = "";
    //
    //FORM
    //
    var fechaCelebracion = "";
    //
    var horaCompletaCelebracion = "";
    //
    var direccionCelebracion = "";
    //
    var ciudadCelebracion = "";
    //
    var nombreContacto = "";
    //
    var apellidoContacto = "";
    //
    var telefonoContacto = "";
    //
    var emailContacto = "";
    //
    var outputReserva = "";

    //CONTACT FORM 1 EVENTO ESPECIAL

    var descripcionEventoEspecial = "";
    //
    var nombreContactoEventoEspecial = "";
    //
    var telefonoContactoEventoEspecial = "";
    //
    var preferenciaHoraContacto = "";

    //CONTACT FORM 2 PREGUNTAS Y SUGERENCIAS - OTROS

    var buzonDeMensajes = "";
    //


      






      function calculate(){
        $('#outputCelebracion').text(tipoCelebracionTexto);
        $('#outputGeneroMusical').text(generoMusicalTexto);
        formatoId= $("#formato option:selected").val();
        formatoTexto= $("#formato option:selected").text();
        horasAdicionales = horasMusicaEnVivoId;
        $('#outputHoras').text(horasMusicaEnVivoTexto);
        valorAdicional= $("#formato option:selected").attr('valoradicional');
        $('#outputInvitados').text(invitadosTexto);
        $('#btn-reservar').prop( "disabled", false );
        $('.result').text('');
        $.post('includes/getTarifa.php','generoMusicalId=' + generoMusicalId +'&horasMusicaEnVivoId=' + horasAdicionales + '&invitadosId=' + invitadosId + '&formatoId=' + formatoId + '&valorAdicional=' + valorAdicional +'&premiumId=' + premium , function (response) {
          $('.result').html(response);
          if (response == "<h3 style='color: #8b0000; margin:0;'>No hay disponibilidad en el momento</h3>"){
            $('#btn-reservar').prop( "disabled", true );
            }
            result = $('#valortotal').text().slice(1);
        });
        $.post('includes/insertCalculatorLog.php','tipoCelebracion=' + tipoCelebracionTexto +'&generoMusical=' + generoMusicalTexto + '&horasEnVivo=' + horasMusicaEnVivoId + '&musicos=' + musicosId +'&invitados=' + invitadosTexto , function (response) {
        });

      } 


    //END PRICE CALCULATOR    
      jQuery(function() {
        var datepicker = $('#datepicker');
        var dateObj = new Date();
        var day = dateObj.getDate();
        var month = dateObj.getMonth() + 1;
        var year = dateObj.getFullYear();
        newdate = day+1 + "-" + month + "-" + year;
        var date = new Date($.now()).toString().slice(4,15).split(" ").join("-");
        if (datepicker.length > 0) {
          datepicker.datepicker({
            autoclose: true,
            startDate: newdate,
            useCurrent: false
          });
        }
      });

      $('#openMobileTabla').click(function(){
        $('#tablaMobile2').show();
      })

      $('#closeTabla2').click(function(){
        $('#tablaMobile2').hide();
      })

      $('#btn-reservar').click(function(e){
        e.preventDefault();
        calculate();
        $('#popupSimulador').hide();
        $('#errorModal').modal('hide');
        $('#errorModal').hide();
        $('#popupSimuladorReserva').modal('show');
        $('#popupSimuladorReserva').show();
        $('#tablaMobile2').hide();
        updateResumen();
      })

      $('#btn-anterior').click(function(e){
        e.preventDefault();
        $('#popupSimuladorReserva').hide();
        $('#popupSimulador').show();
      })

      $('#closeModal4').click(function(e){
        e.preventDefault();    
        $('#popupSimuladorReserva').hide();
        $('#popupSimulador').show();
      })

      $('#closeModalContact').click(function(e){
        e.preventDefault();    
        $('#popupContact').hide();
      })

      $('#closeModal3').click(function(){
        $('#popupSimulador').modal('hide');
        $('#popupSimulador').hide();
        $('#popupSimuladorReserva').modal('hide');
        $('#popupSimuladorReserva').hide();
        //$('body').css('-webkit-overflow-scrolling','touch !important').css('overflow','auto !important').css('height','100% !important');
        //$('html').css('-webkit-overflow-scrolling','touch !important').css('overflow','auto !important').css('height','100% !important');
      })

      $('#closeModalSuccess').click(function(){    
        location.reload(true);
      })

      $('#closeModalSuccess2').click(function(){    
        location.reload(true);
      })

      $('#closeModalSuccessEventoEspecial').click(function(){    
        location.reload(true);
      })

      $('#closeModalSuccessEventoEspecial2').click(function(){    
        location.reload(true);
      })

      $('#closeModalSuccessBuzonMensajes').click(function(){    
        location.reload(true);
      })

      $('#closeModalSuccessBuzonMensajes2').click(function(){    
        location.reload(true);
      })

      $('#closeModalError').click(function(){    
        $('#errorModal').hide();
        $('#errorModal').modal('hide');
        $('#popupSimuladorReserva').modal('show');
        $('#popupSimuladorReserva').show();
      })

      $('#closeModalError2').click(function(){    
        $('#errorModal').hide();
        $('#errorModal').modal('hide');
        $('#popupSimuladorReserva').modal('show');
        $('#popupSimuladorReserva').show();
      })

      $('#closeModalErrorContacto').click(function(){    
        $('#errorModalContacto').hide();
        $('#errorModalContacto').modal('hide');
        $('#contacto').modal('show');
        $('#contacto').show();
        $("#selectContact").val('');
        $('#modalContacto0').show();
        $('#modalContacto1').hide();
        $('#modalContacto2').hide();
      })

      $('#closeModalErrorContacto2').click(function(){    
        $('#errorModalContacto').hide();
        $('#errorModalContacto').modal('hide');
        $('#contacto').modal('show');
        $('#contacto').show();
        $("#selectContact").val('');
        $('#modalContacto0').show();
        $('#modalContacto1').hide();
        $('#modalContacto2').hide();
      })

      $('#btn-validate-desktop').click(function(){    
        alert('Llena todos los campos para calcular la tarifa!');
      })
      $('#btn-validate-mobile').click(function(){    
        alert('Llena todos los campos para calcular la tarifa!');
      })
      $('#btn-calculate-desktop').click(function(){    
        $('#popupSimulador').modal();
        $('#popupSimulador').show();
        //$('body').css('-webkit-overflow-scrolling','touch !important').css('overflow','auto !important').css('height','100% !important');
        //$('html').css('-webkit-overflow-scrolling','touch !important').css('overflow','auto !important').css('height','100% !important');
        calculate();
      })
      $('#btn-calculate-custom-desktop').click(function(){   
        //$('body').addClass('modal-open'); 
        /////////
      })
      $('#btn-calculate-mobile').click(function(){    
        $('#popupSimulador').modal();
        $('#popupSimulador').show();
        calculate();
        //$('body').css('-webkit-overflow-scrolling','touch !important').css('overflow','auto !important').css('height','100% !important');
        //$('html').css('-webkit-overflow-scrolling','touch !important').css('overflow','auto !important').css('height','100% !important');
        $('#tablaMobile2').hide();
      })
      $('#btn-calculate-custom-mobile').click(function(){
        //$('body').addClass('modal-open');
        /////////
      })
      $('#btn-mobile-trigger').click(function(){
        $('#tablaMobile2').show();
      })

      //
      //READ DESKTOP INPUTS
      var celebracionInputDesktop = false;
      var generoInputDesktop = false;
      var musicosInputDesktop = false;
      var horasInputDesktop = false;
      var invitadosInputDesktop = false;
      function validateDesktop(){
        if (celebracionInputDesktop && generoInputDesktop && musicosInputDesktop && horasInputDesktop && invitadosInputDesktop){
          $('#btn-validate-desktop').hide();
          $('#btn-calculate-desktop').show();
          if ($('#invitadosDesktop').val() == 20){
            $('#btn-calculate-desktop').hide();
            $('#btn-calculate-custom-desktop').show();
          } else{
            $('#btn-calculate-custom-desktop').hide();
          }
        }
        else{
          $('#btn-validate-desktop').show();
          $('#btn-calculate-desktop').hide();
          $('#btn-calculate-custom-desktop').hide();
        }
      }
      $('#celebracionDesktop').on('change', function() {
        if (!$("#celebracionDesktop option:selected").val()==''){celebracionInputDesktop = true;}else{celebracionInputDesktop = false;}
        tipoCelebracionId = $("#celebracionDesktop option:selected").val();
        tipoCelebracionTexto = $("#celebracionDesktop option:selected").text();
        premium = $("#celebracionDesktop option:selected").attr('Premium');
        customText= $("#celebracionDesktop option:selected").attr('customtext');
        $('#outputCustomText').text(customText);
        generoInputDesktop = false;
        musicosInputDesktop = false;
        horasInputDesktop = false;
        invitadosInputDesktop = false;
        generoMusicalId = '';
        updateHoras();
        updateMusicos();
        validateDesktop();
        updateGeneros();
        updateInvitados();
        });
      $('#generoDesktop').on('change', function() {
        if (!$("#generoDesktop option:selected").val()==''){generoInputDesktop = true;}else{generoInputDesktop = false;}
        generoMusicalId= $("#generoDesktop option:selected").val();
        generoMusicalTexto= $("#generoDesktop option:selected").text();
        musicosInputDesktop = false;
        horasInputDesktop = false;
        validateDesktop();
        validateFormatosDesktop();
        updateHoras();
        updateMusicos();
        });
      $('#musicosDesktop').on('change', function() {
        if (!$("#musicosDesktop option:selected").val()==''){musicosInputDesktop = true;}else{musicosInputDesktop = false;}
        musicosId= $("#musicosDesktop option:selected").val();
        musicosTexto= $("#musicosDesktop option:selected").text();
        validateDesktop();
        validateFormatosDesktop();
        });
      $('#horasDesktop').on('change', function() {
        if (!$("#horasDesktop option:selected").val()==''){horasInputDesktop = true;}else{horasInputDesktop = false;}
        horasMusicaEnVivoId= $("#horasDesktop option:selected").val();
        horasAdicionales = horasMusicaEnVivoId;
        horasMusicaEnVivoTexto= $("#horasDesktop option:selected").text();
        validateDesktop();
        });
      $('#invitadosDesktop').on('change', function() {
        if (!$("#invitadosDesktop option:selected").val()==''){invitadosInputDesktop = true;}else{invitadosInputDesktop = false;}
        invitadosId= $("#invitadosDesktop option:selected").val();
        invitadosTexto= $("#invitadosDesktop option:selected").text();
        validateDesktop();
        });

      //READ MOBILE INPUTS
      var celebracionInputMobile = false;
      var generoInputMobile = false;
      var musicosInputMobile = false;
      var horasInputMobile = false;
      var invitadosInputMobile = false;
      function validateMobile(){
        if (celebracionInputMobile && generoInputMobile && musicosInputMobile && horasInputMobile && invitadosInputMobile){
          $('#btn-validate-mobile').hide();
          $('#btn-calculate-mobile').show();
          if ($('#invitadosMobile').val() == 20){
            $('#btn-calculate-mobile').hide();
            $('#btn-calculate-custom-mobile').show();
          } else{
            $('#btn-calculate-custom-mobile').hide();
          }
        }
        else{
          $('#btn-validate-mobile').show();
          $('#btn-calculate-mobile').hide();
          $('#btn-calculate-custom-mobile').hide();
        }
      }
      $('#celebracionMobile').on('change', function() {
        if (!$("#celebracionMobile option:selected").val()==''){celebracionInputMobile = true;}else{celebracionInputMobile = false;}
        tipoCelebracionId = $("#celebracionMobile option:selected").val();
        tipoCelebracionTexto = $("#celebracionMobile option:selected").text();
        premium = $("#celebracionMobile option:selected").attr('Premium');
        customText = $("#celebracionMobile option:selected").attr('customtext');
        $('#outputCustomText').text(customText);
        validateMobile();
        generoInputMobile = false;
        musicosInputMobile = false;
        horasInputMobile = false;
        invitadosInputMobile = false;
        generoMusicalId = '';
        updateHoras();
        updateMusicos();
        validateMobile();
        updateGeneros();
        updateInvitados();
        });
      $('#generoMobile').on('change', function() {
        if (!$("#generoMobile option:selected").val()==''){generoInputMobile = true;}else{generoInputMobile = false;}
        generoMusicalId= $("#generoMobile option:selected").val();
        generoMusicalTexto= $("#generoMobile option:selected").text();
        musicosInputMobile = false;
        horasInputMobile = false;
        validateMobile();
        validateFormatosMobile();
        updateHoras();
        updateMusicos();
        });
      $('#musicosMobile').on('change', function() {
        if (!$("#musicosMobile option:selected").val()==''){musicosInputMobile = true;}else{musicosInputMobile = false;}
        musicosId= $("#musicosMobile option:selected").val();
        musicosTexto= $("#musicosMobile option:selected").text();
        validateMobile();
        validateFormatosMobile();
        });
      $('#horasMobile').on('change', function() {
        if (!$("#horasMobile option:selected").val()==''){horasInputMobile = true;}else{horasInputMobile = false;}
        horasMusicaEnVivoId= $("#horasMobile option:selected").val();
        horasAdicionales = horasMusicaEnVivoId;
        horasMusicaEnVivoTexto= $("#horasMobile option:selected").text();
        validateMobile();
        });
      $('#invitadosMobile').on('change', function() {
        if (!$("#invitadosMobile option:selected").val()==''){invitadosInputMobile = true;}else{invitadosInputMobile = false;}
        invitadosId= $("#invitadosMobile option:selected").val();
        invitadosTexto= $("#invitadosMobile option:selected").text();
        validateMobile();
        });
      // READ FORMATO CHANGE
      $('#formato').on('change', function() {
        formatoId= $("#formato option:selected").val();
        formatoTexto= $("#formato option:selected").text();
        valorAdicional= $("#formato option:selected").attr('valoradicional');
        calculate();
        });

      //Function validate and get formatos
      function validateFormatosDesktop(){
        if (celebracionInputDesktop && generoInputDesktop && musicosInputDesktop){
          getFormatos();
        }
      }
      function validateFormatosMobile(){
        if (celebracionInputMobile && generoInputMobile && musicosInputMobile){
          getFormatos();
        }
      }

      function getFormatos(){
        $.post('includes/getFormatos.php', 'generoMusicalId=' + generoMusicalId + '&musicosId=' + musicosId + '&premium=' + premium, function (response) {
          $("#formato").html(response);
          if (response == "<option value=''>-</option>"){
            $('#btn-reservar').prop( "disabled", true );
          }
        });
        $("#formato option:first-child").attr("selected", true);
        formatoId = $("#formato option:first-child").val();
      }

    //FORM
    $(".readonly").on('keydown paste', function(e){
            e.preventDefault();
        });
    //READ FIELDS
    $('#fechaCelebracion').on('change', function() {
        fechaCelebracion = $("#fechaCelebracion").val();
        $('#fechaCelebracion-error').hide();
        updateResumen();
        });

    $('#horaCelebracion').on('change', function() {
        updateHoraCompleta();
        });

    $('#minutosCelebracion').on('change', function() {
        updateHoraCompleta();
        });

    $('#ampmCelebracion').on('change', function() {
        updateHoraCompleta();
        });

    $('#ciudadCelebracion').on('change', function() {
        ciudadCelebracion = $("#ciudadCelebracion").val();
        updateResumen();
        });

    $('#direccionCelebracion').on('change', function() {
        direccionCelebracion = $("#direccionCelebracion").val();
        updateResumen();
        });

    $('#nombre').on('change', function() {
        nombreContacto = $("#nombre").val();
        });

    $('#apellido').on('change', function() {
        apellidoContacto = $("#apellido").val();
        });

    $('#telefono').on('change', function() {
        telefonoContacto = $("#telefono").val();
        });

    $('#email').on('change', function() {
        emailContacto = $("#email").val();
        });


    function updateHoraCompleta() {
      horaCompletaCelebracion = $('#horaCelebracion').val() + ":" + $('#minutosCelebracion').val() + " " + $('#ampmCelebracion').val();
      updateResumen();
    }


    document.getElementById("aceptoTerminos").setCustomValidity("Acepta los Términos y Condiciones");

    function updateGeneros() {
      $.post('includes/getGeneros.php', 'tipoCelebracionId=' + tipoCelebracionId, function (response) {
          listItemsGeneroMusical=response;
          if (response == "<option value=''>-</option>"){
            $('#btn-reservar').prop( "disabled", true );
            }
          $("#generoDesktop").html(listItemsGeneroMusical);
          $("#generoMobile").html(listItemsGeneroMusical);
        });
    }
    updateGeneros();

    function updateHoras() {
      $.post('includes/getHoras.php', 'generoMusicalId=' + generoMusicalId, function (response) {
          listItemsHorasMusicaEnVivo=response;
          if (response == "<option value=''>-</option>"){
            $('#btn-reservar').prop( "disabled", true );
            }
          $("#horasDesktop").html(listItemsHorasMusicaEnVivo);
          $("#horasMobile").html(listItemsHorasMusicaEnVivo);
        });
    }
    updateHoras();

    function updateMusicos() {
      $.post('includes/getMusicos.php', 'generoMusicalId=' + generoMusicalId, function (response) {
          listItemsMusicos=response;
          if (response == "<option value=''>-</option>"){
            $('#btn-reservar').prop( "disabled", true );
            }
          $("#musicosDesktop").html(listItemsMusicos);
          $("#musicosMobile").html(listItemsMusicos);
        });
    }
    updateMusicos();


    function updateInvitados() {
      $.post('includes/getInvitados.php', 'tipoCelebracionId=' + tipoCelebracionId, function (response) {
          listItemsInvitados=response;
          
          if (response == "<option value=''>-</option>"){
            $('#btn-reservar').prop( "disabled", true );
            }
          $("#invitadosDesktop").html(listItemsInvitados);
          $("#invitadosMobile").html(listItemsInvitados);
        });
    }
    updateInvitados();


    function updateResumen() {
      outputReserva = "";
      outputReserva += "<span style='color: #752e33'>Celebración: </span>" + tipoCelebracionTexto + "<br><span style='color: #752e33'>Género Musical: </span>" + generoMusicalTexto + "<br><span style='color: #752e33'>Formato Musical: </span>" + formatoTexto + "<br><span style='color: #752e33'>Duración: </span>" + horasMusicaEnVivoTexto + "<br><span style='color: #752e33'>Invitados: </span>" + invitadosTexto + "<br><span style='color: #752e33'>Fecha: </span>" + fechaCelebracion + "<br><span style='color: #752e33'>Hora: </span>" + horaCompletaCelebracion + "<br><span style='color: #752e33'>Dirección: </span>" + direccionCelebracion + "<br><span style='color: #752e33'>Ciudad: </span>" + ciudadCelebracion;
      $('#outputReserva').html(outputReserva);
    }
  function openWindow() {
    window.open('terminosycondiciones.html', '', '');
  }
  
  $("#form2").submit(function( event ) {
    event.preventDefault();
    success();
  });


    function success(){    
      $.post('includes/getTarifa.php','generoMusicalId=' + generoMusicalId +'&horasMusicaEnVivoId=' + horasAdicionales + '&invitadosId=' + invitadosId + '&formatoId=' + formatoId + '&valorAdicional=' + valorAdicional +'&premiumId=' + premium , function (response) {
          $('.result').html(response);
          if (response == "<h3 style='color: #8b0000; margin:0;'>No hay disponibilidad en el momento</h3>"){
            $('#btn-reservar').prop( "disabled", true );
            }
            result = $('#valortotal').text().slice(1);
        });

      $.post('includes/insertReserva.php', 'tipoCelebracion=' + tipoCelebracionTexto + '&generoMusical=' + generoMusicalTexto + '&duracion=' + horasMusicaEnVivoTexto + '&invitados=' + invitadosTexto + '&formato=' + formatoTexto + '&fecha=' + fechaCelebracion + '&horaCompleta=' + horaCompletaCelebracion + '&ciudad=' + ciudadCelebracion + '&direccion=' + direccionCelebracion + '&nombre=' + nombreContacto + '&apellido=' + apellidoContacto + '&telefono=' + telefonoContacto + '&email=' + emailContacto + '&token=' + token + '&celebracionId=' + tipoCelebracionId + '&formatoId=' + formatoId + '&generoId=' + generoMusicalId + '&horasId=' + horasMusicaEnVivoId + '&invitadosId=' + invitadosId + '&valor=' + result, function (response) {
          if (response == "Success!"){
            $('#popupSimuladorReserva').hide();
            $('#successModal').modal();
            $('#successModal').show();
          }
          else {
            $('#popupSimuladorReserva').hide();
            $('#outputError').html(response);
            $('#errorModal').modal();
            $('#errorModal').show();
          }
      });
      
    }

    function successEventoEspecial(){    
      $.post('includes/insertEventoEspecial.php', 'descripcion=' + descripcionEventoEspecial + '&nombreContacto=' + nombreContactoEventoEspecial + '&telefonoContactoEventoEspecial=' + telefonoContactoEventoEspecial + '&preferenciaHoraContacto=' + preferenciaHoraContacto , function (response) {
          if (response == "Success!"){
            $('#contacto').hide();
            $('#successModalEventoEspecial').modal();
            $('#successModalEventoEspecial').show();
          }
          else {
            $('#contacto').hide();
            $('#outputErrorContacto').html(response);
            $('#errorModalContacto').modal();
            $('#errorModalContacto').show();
          }
      });
      
    }

    function successSugerenciasPreguntasOtros(){    
      $.post('includes/insertBuzonMensajes.php', 'descripcionBuzonMensajes=' + buzonDeMensajes , function (response) {
          if (response == "Success!"){
            $('#contacto').hide();
            $('#successModalBuzonMensajes').modal();
            $('#successModalBuzonMensajes').show();
          }
          else {
            $('#contacto').hide();
            $('#outputErrorContacto').html(response);
            $('#errorModalContacto').modal();
            $('#errorModalContacto').show();
          }
      });
      
    }


    //evento especial

    $('#descripcionEventoEspecial').on('change', function() {
      descripcionEventoEspecial = $('#descripcionEventoEspecial').val();
    });

    $('#nombreEventoEspecial').on('change', function() {
      nombreContactoEventoEspecial = $('#nombreEventoEspecial').val();
    });

    $('#telefonoEventoEspecial').on('change', function() {
      telefonoContactoEventoEspecial = $('#telefonoEventoEspecial').val();
    });

    $('#horaEventoEspecial').on('change', function() {
      preferenciaHoraContacto = $('#horaEventoEspecial option:selected').text();
    });

    //buzon de mensajes

    $('#descripcionBuzonMensajes').on('change', function() {
      buzonDeMensajes = $('#descripcionBuzonMensajes').val();
    });


    function countChar(val) {
        var len = val.value.length;
        if (len >= 1001) {
          val.value = val.value.substring(0, 1000);
        } else {
          $('#charNum').text(1000 - len);
        }
      };

      function countChar2(val) {
        var len = val.value.length;
        if (len >= 1001) {
          val.value = val.value.substring(0, 1000);
        } else {
          $('#charNum2').text(1000 - len);
        }
      };

    $('#btn-anterior-contacto').click(function(e){
        e.preventDefault();
        $("#selectContact").val('');
        $('#modalContacto0').show();
        $('#modalContacto1').hide();
      })

    $('#btn-anterior2-contacto').click(function(e){
        e.preventDefault();
        $("#selectContact").val('');
        $('#modalContacto0').show();
        $('#modalContacto2').hide();
      })

    

    $('#selectContact').on('change', function() {
        if ($("#selectContact option:selected").val()==''){
          $('#descripcionContacto').show();
          $('#modalContacto0').show();
          $('#modalContacto1').hide();
          $('#modalContacto2').hide();
        }
        else if ($("#selectContact option:selected").val()=='eventoespecial'){
          $('#descripcionContacto').hide();
          $('#modalContacto0').hide();
          $('#modalContacto1').show();
          $('#modalContacto2').hide();
        }
        else if ($("#selectContact option:selected").val()=='preguntasysugerencias'){
          $('#descripcionContacto').hide();
          $('#modalContacto0').hide();
          $('#modalContacto1').hide();
          $('#modalContacto2').show();
        }
      });

    //VALIDATION

    // Wait for the DOM to be ready
$(function validateAll() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      fecha: {
        required: true,
        minlength: 1},
      hora: "required",
      minutos: "required",
      ampm: "required",
      ciudad: "required",
      direccion: "required",
      nombre: "required",
      apellido: "required",
      telefono: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      aceptoTerminos: "required",
      //password: {
      //  required: true,
      //  minlength: 5
      //}
    },
    // Specify validation error messages
    messages: {
      fecha: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa la fecha.",
      hora: "<span style='color: rgba(117,46,51,0.7);'>*hh",
      minutos: "<span style='color: rgba(117,46,51,0.7);'>*mm",
      ampm: "<span style='color: rgba(117,46,51,0.7);'>*am/pm",
      ciudad: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa la ciudad.",
      direccion: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa la dirección.",
      nombre: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa tu nombre.",
      apellido: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa tu apellido.",
      telefono: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el teléfono.",
      //password: {
      //  required: "Please provide a password",
      //  minlength: "Your password must be at least 5 characters long"
      //},
      email: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa un correo válido.",
      aceptoTerminos: "<br /><span style='color: rgba(117,46,51,0.7);'>*Acepta los términos."
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      //form.submit();
      success();
    }
  });
  $("form[name='contactoeventoespecial']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      descripcioneventoespecial: "required",
      nombreeventoespecial: "required",
      telefonoeventoespecial: "required",
      horaEventoEspecial: "required",
    },
    // Specify validation error messages
    messages: {
      descripcioneventoespecial: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa la descripción.",
      nombreeventoespecial: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa tu nombre.",
      telefonoeventoespecial: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el teléfono.",
      horaEventoEspecial: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa la hora de contacto.",
      //password: {
      //  required: "Please provide a password",
      //  minlength: "Your password must be at least 5 characters long"
      //},
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      //form.submit();
      successEventoEspecial();
    }
  });
  $("form[name='contactosugerenciaspreguntasotros']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      descripcionbuzonmensajes: "required",
    },
    // Specify validation error messages
    messages: {
      descripcionbuzonmensajes: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el mensaje.",
      //password: {
      //  required: "Please provide a password",
      //  minlength: "Your password must be at least 5 characters long"
      //},
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      //form.submit();
      successSugerenciasPreguntasOtros();
    }
  });

});

