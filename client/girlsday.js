var socket = io("http://localhost:3000");


socket.on('chat message', function (msg) {
    var div = $('#muster').clone();
    div.toggleClass('hidden', false);
    div.find('#messageBody').text(msg.message);
    div.find('#messageUser').text(msg.user);
    div.find('#messageTimestamp').text(msg.timestamp);
    $('#messages').append(div);
    window.scrollTo(0, document.body.scrollHeight);
});


function senden() {
    var socket = io("http://localhost:3000");
    socket.emit('chat message', {message: $('#message').val()});

}