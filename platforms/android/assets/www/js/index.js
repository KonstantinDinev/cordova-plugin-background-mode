
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


$('document').ready(function(){

  var appLogic = {

    getEvent: function() {
      window.plugins.intent.getCordovaIntent(
        function (Intent) {
          var element = document.getElementById('intentStartup');
          element.innerHTML = '<textarea>' + JSON.stringify(Intent) + '</textarea>';
        },
        function () {
          console.log('Error getting cordova intent');
          element.innerHTML = '<textare> Error getting cordova intent </textarea>';
        }
      );
      console.log('getEvent Fired');
    },

    receiveEvent: function() {
      window.plugins.intent.setNewIntentHandler(
        function (Intent) {
          var element = document.getElementById('intentReceiver');
          var child = document.createElement('div');
          child.innerHTML = '<textarea>' + JSON.stringify(Intent) + '</textarea>';

          element.appendChild(child);
          console.log('received successful');
        }
      );
      console.log('reveiceEvent Fired');
    },

    onNewIntent: function () {
      console.log('App is going to the background');
      //cordova.plugins.backgroundMode.excludeFromTaskList();
      cordova.plugins.backgroundMode.moveToBackground(["com.cyrillus.MyContacts"]);
    }

  };

  var btnGet = document.getElementById('get');
  var btnReceive = document.getElementById('receive');
  var btnOnNewIntent = document.getElementById('onNewIntent');

  btnGet.addEventListener('click', appLogic.getEvent, false);
  btnReceive.addEventListener('click', appLogic.receiveEvent, false);
  btnOnNewIntent.addEventListener('click', appLogic.onNewIntent, false);
});
