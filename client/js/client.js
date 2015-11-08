$(function () {


	// WebSocket
	// -------------------------------------------------------
	var uri = "ws://127.0.0.1:3000";
	// var uri = "ws://52.192.81.231:3000";



	var ws = null;

	function init ()
	{
		connect ();

		console.log ("init");
	}

	// connect
	function connect ()
	{
		if (ws == null) {
			// init
			ws = new WebSocket (uri);
			// set handler
			ws.onopen    = onOpen;
			ws.onmessage = onMessage;
			ws.onclose   = onClose;
			ws.onerror   = onError;
		}
	}

	// open event
	function onOpen (event)
	{
		console.log ("open");
	}

	// send message event
	function onMessage (event)
	{
		if (event && event.data)
		{
			console.log (event.data);
		}
	}

	// error event
	function onError (event)
	{
		console.log ("error");
	}

	// disconnect event
	function onClose (event)
	{
		console.log ("close");
		ws = null;
		setTimeout ("connect()", 3000);
	}

	// -------------------------------------------------------
	$('#button_t').on ('click', function () {
		ws.send ($('#select_room').val() + ",0");
	});

	$('#button_e').on ('click', function () {
		ws.send ($('#select_room').val() + ",1");
	});

	$('#button_a').on ('click', function () {
		ws.send ($('#select_room').val() + ",2");
	});

	$('#button_m').on ('click', function () {
		ws.send ($('#select_room').val() + ",3");
	});

	// -------------------------------------------------------
	init ();

});