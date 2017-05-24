      if(window.location.href.indexOf('#fuel') != -1) {
        $('#fuelsectionlink a').click();
      }

      //token = $('#token').text();
      var fuelentryid = "";
      var vehicleid = "f9655cbbcabae0df047715e3d60c26ec";
      var fuelpurchase = "";
      var fuelodometer = "";
      var fueltype = "";
      var fuelprice = "";
      var fuelpricestring = "";
      var fuelamount = "";
      var fuelamountstring = "";
      var fueldate = "";
      var fueltime = "";
      var fuelplace = "";
      var flagform = "";
      var lastEntriesPerformanceArray = [];



      function clearFuelForm(){
        fuelentryid = "";
        fuelpurchase = "";
        fuelodometer = "";
        fueltype = "";
        fuelprice = "";
        fuelpricestring = "";
        fuelamount = "";
        fuelamountstring = "";
        fueldate = "";
        fueltime = "";
        fuelplace = "";
        $('#inputfueltotalpurchase').val('');
        $('#inputfuelodometer').val('');
        $('#inputfueltype').val('');
        $('#inputfuelprice').val('');
        $('#inputfuelamount').val('');
        $('#datepickerfuelinput').val('');
        $('#inputfuelhours').val('');
        $('#inputfuelminutes').val('');
        $('#inputfuelampm').val('');
        $('#inputfuelplace').val('');
      }

        //var datepicker = $('#datepicker');
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        var today = dd+'/'+mm+'/'+yyyy;
        var todayReversed = yyyy+'/'+mm+'/'+dd;
        /*if (datepicker.length > 0) {
          datepicker.datepicker({
            autoclose: true,
            todayBtn: true,
            language: "es",
            endDate: date,
            useCurrent: true,
          });
        }*/

      $('#datepickerfuelinput').datepicker({
        format: "dd/mm/yyyy",
        todayBtn: "linked",
        todayHighlight: true,
        endDate: today,
        orientation: "top",
        autoclose: true,
        disableTouchKeyboard: true

      });

      $(".readonly").on('keydown paste', function(e){
        e.preventDefault();
      });
      $('#inputfueltotalpurchase').bind('keyup change', function(e) {
        if (($(this).val()=="0") || ($(this).val().substring(1,0) == "0")){$(this).val('');}
        fuelpurchase = $(this).mask("000.000", {reverse: true}).val().replace('.','');
        fuelprice = "";
        fuelamount = "";
        $('#inputfuelprice').val(fuelprice);
        $('#inputfuelamount').val(fuelamount);
        //fuelpurchase = fuelpurchase.toLocaleString('de-DE');
        //fuelpurchase = ($(this).val());
        fuelpurchase = $(this).val();
      });
      $('#inputfuelodometer').bind('keyup change', function(e) {
        if ($(this).val()=="0" || $(this).val().substring(1,0) == "0"){$(this).val('');}
        fuelodometer = $(this).mask("000.000", {reverse: true}).val();
        fuelodometer = $(this).val();
      });
      $('#inputfueltype').bind('keyup change', function(e) {
        fueltype = $(this).val();
      });
      $('#inputfuelprice').bind('keyup change', function(e) {
        //if ($(this).val()=="0" || $(this).val().substring(1,0) == "0"){$(this).val('');}
        fuelprice = $(this).mask("00.000", {reverse: true}).val().replace('.','');
        fuelprice = $(this).val();
        calculateFuelAmount();
      });
      $('#inputfuelamount').bind('keyup change', function(e) {
        //if ($(this).val()=="0" || $(this).val().substring(1,0) == "0"){$(this).val('');}
        fuelamount = $(this).mask("00,000", {reverse: true}).val().replace(',','.');
        fuelamount = $(this).val();
        //fuelamount = parseFloat(fuelamount);
        calculateFuelPrice();
      });


      function calculateFuelAmount(){
        fuelamount = +(Math.round((fuelpurchase/fuelprice) + "e+3")  + "e-3");
        fuelamountstring = fuelamount.toLocaleString('de-DE');
        if ((fuelamount) && (fuelamount < 999999)){
          $('#inputfuelamount').val(fuelamountstring);
        }else{
          $('#inputfuelamount').val('');
        }
      }

      function calculateFuelPrice(){
        fuelprice = +(Math.round(((fuelpurchase.replace('.',''))/(fuelamount.replace(',','.'))) + "e+0")  + "e-0");
        fuelpricestring = fuelprice.toLocaleString('de-DE');
        if ((fuelprice) && (fuelprice < 999999)){
          $('#inputfuelprice').val(fuelpricestring);
        }else{
          $('#inputfuelprice').val('');
        }
      }

      $('#datepickerfuelinput').on('change', function() {
          fueldate = $(this).val();
        });
      $('#inputfuelhours').on('change', function() {
          updateFuelTime();
        });

      $('#inputfuelminutes').on('change', function() {
          updateFuelTime();
        });

      $('#inputfuelampm').on('change', function() {
          updateFuelTime();
        });
      $('#inputfuelplace').bind('keyup change', function(e) {
        fuelplace = $(this).val();
      });
      function updateFuelTime() {
        fueltime = $('#inputfuelhours').val() + ":" + $('#inputfuelminutes').val() + " " + $('#inputfuelampm').val();
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
      drawDashboardLastFuelEntriesPerformanceChart();

      function lastfuelentriesmodal(purchase, odometer, fueltype, fuelprice, fuelamount, purchasedate, purchasetime, place, slidenumber, totalslides) {
        $('#lastfuelentriespurchase').text('$'+purchase);
        $('#lastfuelentriesodometer').text(odometer);
        $('#lastfuelentriesfueltype').text(fueltype);
        $('#lastfuelentriesfuelprice').text('$'+fuelprice);
        $('#lastfuelentriesfuelamount').text('$'+fuelamount);
        $('#lastfuelentriespurchasedate').text(purchasedate+' '+purchasetime);
        $('#lastfuelentriesplace').text(place);
        $('#dashboardfuelslidenumber').text(slidenumber+" de "+totalslides);
        $('#fuelmore-title').html('<i class="fa fa-beer"></i> Últimos registros');
        $('#dashboardfuelbackward').show();
        $('#dashboardfuelforward').show();
        $('#dashboardfuelslidenumber').show();
        $('#btn-delete-fuel-entry').hide();
        $('#btn-update-fuel-entry').hide();
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

      function fillFuelLastEntries(){
        $.post('includes/getLastFuelEntries.php', function (response) {
          setTimeout(function(){$(".fueltable").html(response).fadeIn('slow')},500)
        })
      }

      function fillFuelTable(){
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
      }

      $('.linkinputfuel').click(function(e){
        clearFuelForm();
        flagform = 'fuelentryinsert';
        $('#add-fuel-title').html('<i class="fa fa-beer"></i> Agregar Registro de Combustbile');
        $('#btn-insert-fuel-entry').show();
        $('#btn-update-fuel-entry').hide();
      })

      //Insert Fuel Entry
      function insertFuelEntryAction(){
        console.log('check2');
        //event.preventDefault();
        fuelamountstring = fuelamount.toLocaleString('de-DE');
        fuelpricestring = fuelprice.toLocaleString('de-DE');
        $.post('includes/insertFuelEntry.php', 'fuelPurchase=' + fuelpurchase + '&fuelOdometer=' + fuelodometer + '&fuelType=' + fueltype + '&fuelPrice=' + fuelpricestring + '&fuelAmount=' + fuelamountstring + '&fuelDate=' + fueldate + '&fuelTime=' + fueltime + '&fuelPlace=' + fuelplace + '&vehicleId=' + vehicleid, function (response) {
            console.log('check3');
            if (response == "Success!"){
              //alert("listo el insert");
              fuelSection();
              //$('#completeLinkFuelSection').click();
              $('#add-fuel-modal').modal('hide');
            }
            else {
              console.log(response);
              //$('#popupSimuladorReserva').hide();
              //$('#outputError').html(response);
              //$('#errorModal').modal();
              //$('#errorModal').show();
            }
            console.log('check4');
        });
        
      }
      //Update Fuel Entry
      //$('#btn-update-fuel-entry').click(function(e){
        //e.preventDefault();
        
      //)

      function updateFuelEntryModal(id, purchase, odometer, type, price, amount, purchasedate, purchasetime, place) {
        fuelentryid = id;
        fuelpurchase = purchase;
        fuelodometer = odometer;
        fueltype = type;
        fuelprice = price;
        fuelpricestring = price;
        fuelamount = amount;
        fuelamountstring = amount
        fueldate = purchasedate;
        fueltime = purchasetime;
        fuelplace = place;
        $('#inputfueltotalpurchase').val(purchase);
        $('#inputfuelodometer').val(odometer);
        $('#inputfueltype').val(type);
        $('#inputfuelprice').val(price);
        $('#inputfuelamount').val(amount);
        $('#datepickerfuelinput').val(purchasedate);
        $('#inputfuelhours').val(purchasetime.slice(0,2));
        $('#inputfuelminutes').val(purchasetime.slice(3,5));
        $('#inputfuelampm').val(purchasetime.slice(6,10));
        $('#inputfuelplace').val(place);
        $('#add-fuel-title').html('<i class="fa fa-beer"></i> Editar Registro');
        $('#inputfueltotalpurchase-error').hide();
        $('#inputfuelodometer-error').hide();
        $('#inputfueltype-error').hide();
        $('#inputfuelprice-error').hide();
        $('#inputfuelamount-error').hide();
        $('#datepickerfuelinput-error').hide();
        $('#inputfuelhours-error').hide();
        $('#inputfuelminutes-error').hide();
        $('#inputfuelampm-error').hide();
        $('#inputfuelplace-error').hide();
        $('#dashboardfuelbackward').hide();
        $('#dashboardfuelforward').hide();
        $('#dashboardfuelslidenumber').hide();
        $('#btn-insert-fuel-entry').hide();
        $('#btn-update-fuel-entry').show();
        flagform = 'fuelentryupdate';
        //$('#dashboardfuelslidenumber').text(slidenumber+" de "+totalslides);
      }

      function updateFuelEntryAction(){
        console.log('check2');
        //event.preventDefault();
        fuelamountstring = fuelamount.toLocaleString('de-DE');
        fuelpricestring = fuelprice.toLocaleString('de-DE');
        $.post('includes/updateFuelEntry.php', 'fuelPurchase=' + fuelpurchase + '&fuelOdometer=' + fuelodometer + '&fuelType=' + fueltype + '&fuelPrice=' + fuelpricestring + '&fuelAmount=' + fuelamountstring + '&fuelDate=' + fueldate + '&fuelTime=' + fueltime + '&fuelPlace=' + fuelplace + '&vehicleId=' + vehicleid + '&fuelEntryId=' + fuelentryid, function (response) {
            console.log('check3');
            if (response == "Success!"){
              console.log(response)
              //alert("listo el update");
              //$('#completeLinkFuelSection').click();
              //window.location.reload(true);
              //location.reload(true);
              fuelSection();
              $('#add-fuel-modal').modal('hide');
            }
            else {
              console.log(response);
              //$('#popupSimuladorReserva').hide();
              //$('#outputError').html(response);
              //$('#errorModal').modal();
              //$('#errorModal').show();
            }
            console.log('check4');
        });
        
      }

      //Delete Fuel Entry
      $('#btn-delete-fuel-entry').click(function(){
        deleteFuelEntryAction(vehicleid, fuelentryid);
      })

      function deleteFuelEntryModal(id, purchase, odometer, fueltype, fuelprice, fuelamount, purchasedate, purchasetime, place) {
        fuelentryid = id;
        $('#lastfuelentriespurchase').text('$'+purchase);
        $('#lastfuelentriesodometer').text(odometer);
        $('#lastfuelentriesfueltype').text(fueltype);
        $('#lastfuelentriesfuelprice').text('$'+fuelprice);
        $('#lastfuelentriesfuelamount').text('$'+fuelamount);
        $('#lastfuelentriespurchasedate').text(purchasedate+' '+purchasetime);
        $('#lastfuelentriesplace').text(place);
        $('#fuelmore-title').html('<i class="fa fa-beer"></i> Eliminar Registro');
        $('#dashboardfuelbackward').hide();
        $('#dashboardfuelforward').hide();
        $('#dashboardfuelslidenumber').hide();
        $('#btn-delete-fuel-entry').show();
        $('#btn-update-fuel-entry').hide();
        //$('#dashboardfuelslidenumber').text(slidenumber+" de "+totalslides);
      }

      function deleteFuelEntryAction(vehicleid, fuelentryid){
        $.post('includes/deleteFuelEntry.php', 'vehicleId=' + vehicleid + '&fuelEntryId=' + fuelentryid, function (response) {
          if (response == "Success!"){
            //alert("listo el delete");
            fuelSection();
            //$('#completeLinkFuelSection').click();
            $('#fuelmore-modal').modal('hide');
          }
          else {
            console.log(response);
            //$('#popupSimuladorReserva').hide();
            //$('#outputError').html(response);
            //$('#errorModal').modal();
            //$('#errorModal').show();
          }
      });
      }
      
      function drawDashboardLastFuelEntriesPerformanceChart () {
        //window.onload = function () {
          $.post('includes/getLastFuelEntriesChartData.php', function (response) {
          lastEntriesPerformanceArray = jQuery.parseJSON(response);
          //if (response == "Success!"){
            //alert("listo el delete");
            //fuelSection();
            //$('#completeLinkFuelSection').click();
            //$('#fuelmore-modal').modal('hide');
          //}
          //else {
            console.log(lastEntriesPerformanceArray);
            //$('#popupSimuladorReserva').hide();
            //$('#outputError').html(response);
            //$('#errorModal').modal();
            //$('#errorModal').show();
          //}
        });
        /*var lastEntriesPerformanceArray = [//array

            { x: new Date(2017, 00, 1), y: 26 },
            { x: new Date(2017, 01, 2), y: 38 },
            { x: new Date(2017, 01, 26), y: 43 },
            { x: new Date(2017, 02, 4), y: 29 },
            { x: new Date(2017, 04, 1), y: 41 },
            { x: new Date(2017, 05, 1), y: 45 },
            { x: new Date(2017, 06, 1), y: 86 },
            { x: new Date(2017, 07, 1), y: 64 },
            { x: new Date(2017, 08, 1), y: 53 },
            { x: new Date(2017, 09, 1), y: 60 },
            { x: new Date(2017, 10, 1), y: 70 },
            { x: new Date(2017, 11, 1), y: 40 },
            { x: new Date(2018, 00, 1), y: 26 },
            { x: new Date(2018, 01, 2), y: 38 },
            { x: new Date(2018, 01, 26), y: 43 },
            { x: new Date(2018, 02, 4), y: 29 },
            { x: new Date(2018, 04, 1), y: 41 },
            { x: new Date(2018, 05, 1), y: 45 },
            { x: new Date(2018, 06, 1), y: 86 },
            { x: new Date(2018, 07, 1), y: 64 },
            { x: new Date(2018, 08, 1), y: 53 },
            { x: new Date(2018, 09, 1), y: 60 },
            { x: new Date(2018, 10, 1), y: 70 },
            { x: new Date(2018, 11, 1), y: 40 }
            ];*/
        var chart1 = new CanvasJS.Chart("lastEntriesPerformanceChart",
        {
          title: {
            text: "Kilómetros por Galón"
          },
            data: [
          {
            type: "spline",
            color: "#85CE36",
            dataPoints: lastEntriesPerformanceArray
          }
          ]
        });

        chart1.render();
        //}
      }

      function dashboardSection () {
         fillFuelLastEntries();
         $('#dashboardsection').show();
         $('#dashboardsectionlink').addClass('active');
      }
      function fuelSection () {
         fillFuelTable();
         $('#fuelsection').show();
         $('#fuelsectionlink').addClass('active');
      }

    $(document).keyup(function(e) {
    	if (e.keyCode == 27) {
          //$('#fuelmore-modal').modal('hide');
    	}
	});
        

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
      inputfueltotalpurchase: {required: true, max: 999999},
      inputfuelodometer: {required: true, max: 9999999},
      inputfueltype: "required",
      inputfuelprice: {required: true, max: 99999},
      inputfuelamount: {required: true},
      inputfueldate: "required",
      inputfuelhours: "required",
      inputfuelminutes: "required",
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
      inputfuelhours: "<span style='color: rgba(117,46,51,0.7);'>*hh",
      inputfuelminutes: "<span style='color: rgba(117,46,51,0.7);'>*mm",
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
      if (flagform == 'fuelentryinsert'){
        insertFuelEntryAction();
      }
      if (flagform == 'fuelentryupdate'){
        updateFuelEntryAction();  
      }
    }
  });
});

