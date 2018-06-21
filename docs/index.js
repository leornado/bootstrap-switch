$(function () {
  var $window = $(window);
  var $stateSwitch = $('#state-switch');
  var sectionTop = $('.top').outerHeight() + 20;

  // initialize highlight.js
  hljs.initHighlightingOnLoad();

  // navigation
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();
    var $target = $($(this).attr('href'));

    if ($target.length) {
      $window.scrollTop($target.offset().top - sectionTop);
    }
  });

  $('input[name="download-version"]').on({
    'init.bootstrapSwitch': function () {
      $('#download-' + ($(this).is(':checked') ? '2' : '3')).hide();
    },
    'switchChange.bootstrapSwitch': function (event, state) {
      $('#download-3')[state ? 'show' : 'hide']();
      $('#download-2')[state ? 'hide' : 'show']();
    }
  });

  // initialize all the inputs
  $('input[type="checkbox"],[type="radio"]').not('#create-switch').not('#events-switch').bootstrapSwitch({
    onText:'ononon onononon'
  });

  // state
  $('#state-switch-toggle-force').on('click', function () {
    $stateSwitch.bootstrapSwitch('toggleState', undefined, true);
  });
  $('#state-switch-toggle').on('click', function () {
    $stateSwitch.bootstrapSwitch('toggleState');
  });
  $('#state-switch-readonly').on('click', function () {
    $stateSwitch.bootstrapSwitch('readonly', !$stateSwitch.bootstrapSwitch('readonly'));
  });
  $('#state-switch-on').on('click', function () {
    $stateSwitch.bootstrapSwitch('state', true);
  });
  $('#state-switch-off').on('click', function () {
    $stateSwitch.bootstrapSwitch('state', false);
  });
  $('#state-switch-on-force').on('click', function () {
    $stateSwitch.bootstrapSwitch('state', true, undefined, true);
  });
  $('#state-switch-off-force').on('click', function () {
    $stateSwitch.bootstrapSwitch('state', false, undefined, true);
  });
  $('#state-switch-state').on('click', function () {
    alert($stateSwitch.bootstrapSwitch('state'));
  });

  $('#switch-mini').bootstrapSwitch('size', 'mini');
  $('#switch-small').bootstrapSwitch('size', 'small');
  $('#switch-normal').bootstrapSwitch('size', 'normal');
  $('#switch-large').bootstrapSwitch('size', 'large');

  $('#switch-on-primary').bootstrapSwitch('onColor', 'primary');
  $('#switch-on-info').bootstrapSwitch('onColor', 'info');
  $('#switch-on-success').bootstrapSwitch('onColor', 'success');
  $('#switch-on-warning').bootstrapSwitch('onColor', 'warning');
  $('#switch-on-danger').bootstrapSwitch('onColor', 'danger');

  $('#switch-off-primary').bootstrapSwitch('offColor', 'primary');
  $('#switch-off-info').bootstrapSwitch('offColor', 'info');
  $('#switch-off-success').bootstrapSwitch('offColor', 'success');
  $('#switch-off-warning').bootstrapSwitch('offColor', 'warning');
  $('#switch-off-danger').bootstrapSwitch('offColor', 'danger');

  /*
   // dimension
   $('#btn-size-regular-switch').on('click', function () {
   $('#dimension-switch').bootstrapSwitch('size', '');
   });
   $('#btn-size-mini-switch').on('click', function () {
   $('#dimension-switch').bootstrapSwitch('size', 'mini');
   });
   $('#btn-size-small-switch').on('click', function () {
   $('#dimension-switch').bootstrapSwitch('size', 'small');
   });
   $('#btn-size-large-switch').on('click', function () {
   $('#dimension-switch').bootstrapSwitch('size', 'large');
   });



   // destroy
   $('#btn-destroy-switch').on('click', function () {
   $('#destroy-switch').bootstrapSwitch('destroy');
   $(this).remove();
   });
   // CREATE
   $('#btn-create').on('click', function () {
   $('#create-switch').bootstrapSwitch();
   $(this).remove();
   });

   // activation
   var $disable = $('#disable-switch');
   $('#btn-disable-is').on('click', function () {
   alert($disable.bootstrapSwitch('disabled'));
   });
   $('#btn-disable-toggle').on('click', function () {
   $disable.bootstrapSwitch('toggleDisabled');
   });
   $('#btn-disable-set').on('click', function () {
   $disable.bootstrapSwitch('disabled', true);
   });
   $('#btn-disable-remove').on('click', function () {
   $disable.bootstrapSwitch('disabled', false);
   });

   // readonly
   var $readonly = $('#readonly-switch');
   $('#btn-readonly-is').on('click', function () {
   alert($readonly.bootstrapSwitch('readonly'));
   });
   $('#btn-readonly-toggle').on('click', function () {
   $readonly.bootstrapSwitch('toggleReadonly');
   });
   $('#btn-readonly-set').on('click', function () {
   $readonly.bootstrapSwitch('readonly', true);
   });
   $('#btn-readonly-remove').on('click', function () {
   $readonly.bootstrapSwitch('readonly', false);
   });

   // label
   $('#btn-label-on-switch').on('click', function() {
   $('#label-switch').bootstrapSwitch('onText', 'I');
   });
   $('#btn-label-off-switch').on('click', function() {
   $('#label-switch').bootstrapSwitch('offText', 'O');
   });

   $('#label-toggle-switch').on('click', function(e, data) {
   $('.label-toggle-switch').bootstrapSwitch('toggleState');
   });
   $('.label-toggle-switch').on('switch-change', function(e, data) {
   alert(data.value);
   });

   // event handler
   $('#events-switch').on({
   init: function() {
   console.log('Initialized!');
   },
   switchChange: function ($element, data) {
   var $element = $(data.el),
   value = data.value;

   console.log(e, $element, value);
   }
   }).bootstrapSwitch();

   // color
   $('#btn-color-on-switch').on('click', function() {
   $('#change-color-switch').bootstrapSwitch('onColor', 'success');
   });
   $('#btn-color-off-switch').on('click', function() {
   $('#change-color-switch').bootstrapSwitch('offColor', 'danger');
   });

   // animation
   $('#btn-animate-switch').on('click', function() {
   $('#animated-switch').bootstrapSwitch('animate', true);
   });
   $('#btn-dont-animate-switch').on('click', function() {
   $('#animated-switch').bootstrapSwitch('animate', false);
   });

   // radio
   $('.radio1').on('switch-change', function () {
   $('.radio1').bootstrapSwitch('toggleRadioState');
   });
   $('.radio2').on('switch-change', function () {
   console.log("ok");
   $('.radio2').bootstrapSwitch('toggleRadioState', true);
   });
   */
});
