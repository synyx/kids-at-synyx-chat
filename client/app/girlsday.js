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
    var message = $('#message').val();
    if(message){
        socket.emit('chat message', {message: message});
    }
    $('#message').val('');
}

$(document).ready(function (e) {
    $('#message').emojiPicker({
        width: '200px',
        height: '200px'
    });
});