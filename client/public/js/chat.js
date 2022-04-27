var socket = io("http://apollon.synyx.coffee:3000");


socket.on('chat message', function (msg) {
    Push.create("Science Camp Informatik  Chat!", {
        body: msg.message,
        icon: '/cat.png',
        timeout: 4000,
        onClick: function () {
            window.focus();
            this.close();
        }
    });
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
    var user = $('#user').val();
    if(message){
        socket.emit('chat message', {message: message, user: user});
    }
    $('#message').val('');
}

$(document).ready(function (e) {
    $('#message').emojiPicker({
        width: '200px',
        height: '200px'
    });
});
