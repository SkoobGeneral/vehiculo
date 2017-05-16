      //var token = $('#token').text();
      var fuelpurchase = "";
      var fuelodometer = "";
      var fueltype = "";
      var fuelprice = "";
      var fuelamount = "";



        var datepicker = $('#datepicker');
        var dateObj = new Date();
        var day = dateObj.getDate();
        var month = dateObj.getMonth() + 1;
        var year = dateObj.getFullYear();
        newdate = day+1 + "-" + month + "-" + year;
        var date = new Date($.now()).toString().slice(4,15).split(" ").join("-");
        /*if (datepicker.length > 0) {
          datepicker.datepicker({
            autoclose: true,
            todayBtn: true,
            language: "es",
            endDate: date,
            useCurrent: true,
          });
        }*/

      $('#datepicker').datepicker({
        todayBtn: "linked",
        todayHighlight: true,
        endDate: date,
        orientation: "top",
        autoclose: true

      });

      $(".readonly").on('keydown paste', function(e){
        e.preventDefault();
      });
      $('#inputfueltotalpurchase').bind('keyup change', function(e) {
        fuelpurchase = $(this).mask("000.000", {reverse: true}).val().replace('.','');
        calculateFuelAmount();
        calculateFuelPrice();
      });
      $('#inputfuelodometer').bind('keyup change', function(e) {
        fuelodometer = $(this).mask("9.999.999", {reverse: true}).val().replace('.','');
      });
      $('#inputfueltype').bind('keyup change', function(e) {
        fueltype = $(this).val();
      });
      $('#inputfuelprice').bind('keyup change', function(e) {
        fuelprice = $(this).mask("99.999", {reverse: true}).val().replace('.','');
        calculateFuelAmount();
      });
      $('#inputfuelamount').bind('keyup change', function(e) {
        fuelamount = $(this).mask("99,999", {reverse: true}).val().replace(',','');
        calculateFuelPrice();
      });

      function calculateFuelAmount(){
        fuelamount = +(Math.round((fuelpurchase/fuelprice) + "e+3")  + "e-3");
        if (fuelamount > 0 && fuelamount < 999999){
          $('#inputfuelamount').val(fuelamount);
        }else{
          $('#inputfuelamount').val('');
        }
        console.log(fuelpurchase);
        console.log(fuelprice);
        console.log(fuelamount);
      }

      function calculateFuelPrice(){
        fuelprice = +(Math.round((fuelpurchase/fuelamount) + "e+3")  + "e-3");
        if (fuelprice > 0 && fuelprice < 999999){
          $('#inputfuelprice').val(fuelprice);
        }else{
          $('#inputfuelprice').val('');
        }
        console.log(fuelpurchase);
        console.log(fuelprice);
        console.log(fuelamount);
      }
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
      $('#actionbutton').fadeIn();
      //Ocultar botón cuando hay scroll
      /*$(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
          $('.scrollToTop').fadeIn();
        } else {
          $('.scrollToTop').fadeOut();
        }
    });*/

      $.post('includes/getUser.php', function (response) {
        $(".username").html(response);
      });
      $.post('includes/getVehicle.php', function (response) {
        $(".vehiclename").text(response);
      });
      $.post('includes/getLastFuelEntries.php', function (response) {
        $("#lastfuelentriesloading").fadeOut(500);
        setTimeout(function(){$(".fueltable").html(response).fadeIn('slow')},500)
      });

      function lastfuelentriesmodal(purchase, odometer, fueltype, fuelprice, fuelamount, purchasedate, place, slidenumber, totalslides) {
        $('#lastfuelentriespurchase').text('$'+purchase);
        $('#lastfuelentriesodometer').text(odometer);
        $('#lastfuelentriesfueltype').text(fueltype);
        $('#lastfuelentriesfuelprice').text('$'+fuelprice);
        $('#lastfuelentriesfuelamount').text('$'+fuelamount);
        $('#lastfuelentriespurchasedate').text(purchasedate);
        $('#lastfuelentriesplace').text(place);
        $('#dashboardfuelslidenumber').text(slidenumber+" de "+totalslides);
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

      //Llenar Select de Tipo de Combustbile
      $.post('includes/getFuelType.php', function (response) {
            $("#inputfueltype").html(response);
         });



      //Llenar Tabla de Registro de Combustbile
      $.post('includes/getFuelEntries.php', function (response) {
            $("#fueltablebodysection").html(response);
            $('#fueltablefootable').footable({
                "paging": {
                    "enabled": true,
                    "size": 10,
                    "countFormat": "{CP} de {TP}"
                },
                "filtering": {
                    "enabled": true,
                    "delay": 1,
                    "placeholder": "Buscar..."
                },
                "sorting": {
                    "enabled": true
                },
                "empty": "No hay Registros."
            });
         });


      function dashboardsection () {
         $('#dashboardsection').show();
         $('#dashboardsectionlink').addClass('active');
      }
      function fuelsection () {
         $('#fuelsection').show();
         $('#fuelsectionlink').addClass('active');
      }

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


    

    //VALIDATION

    // Wait for the DOM to be ready
$(function validateAll() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='inputfuelentry']").validate({
    // Specify validation rules

    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      inputfueltotalpurchase:{required: true, min: 0.1},
      inputfuelodometer: {required: true, min: 0.1},
      inputfueltype: "required",
      inputfuelprice: {required: true, min: 0.1},
      inputfuelamount: {required: true, min: 0.1},
      inputfueldate: "required",
      inputfuelhora: "required",
      inputfuelminutos: "required",
      inputfuelampm: "required",
      inputfuelplace: "required",
      //apellido: "required",
      //telefono: "required",
      //email: {
        //required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        //email: true
      //},
      //aceptoTerminos: "required",
      //password: {
      //  required: true,
      //  minlength: 5
      //}
    },
    // Specify validation error messages
    messages: {
      inputfueltotalpurchase: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el valor",
      inputfuelodometer: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el valor",
      inputfueltype: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa tu selección",
      inputfuelprice: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el valor",
      inputfuelamount: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el valor",
      inputfueldate: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa la fecha",
      inputfuelhora: "<span style='color: rgba(117,46,51,0.7);'>*hh",
      inputfuelminutos: "<span style='color: rgba(117,46,51,0.7);'>*mm",
      inputfuelampm: "<span style='color: rgba(117,46,51,0.7);'>*am/pm",
      inputfuelplace: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el lugar",
      //telefono: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa el teléfono.",
      //password: {
      //  required: "Please provide a password",
      //  minlength: "Your password must be at least 5 characters long"
      //},
      //email: "<span style='color: rgba(117,46,51,0.7);'>*Ingresa un correo válido.",
      //aceptoTerminos: "<br /><span style='color: rgba(117,46,51,0.7);'>*Acepta los términos."
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      //form.submit();
      alert();
    }
  });
});

