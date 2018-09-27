console.log('app is alive');

function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('chat-bar-channel-name').innerHTML = channelName;
}

function switchSelectedChannel(channelNumber) {
    var listElements = document.querySelectorAll('li');

    $(listElements).removeClass('selected');
    $(listElements[channelNumber]).addClass('selected');
    console.log('changed selected class');
}

function switchChatBarLink() {
    var newLink = 'upgrading.never.helps';

    document.getElementById('chat-bar-link').setAttribute('href', 'http://w3w.co/' + newLink);
    document.querySelector('#chat-bar-link > strong').innerHTML = newLink;
    console.log('changed link to ' + newLink);
}

function onClickChannel(channelNumber) {
    var channelName = document.querySelectorAll('.channels-name');
    
    console.log('OnClickChannel ' + channelName[channelNumber].innerHTML);
    switchChannel(channelName[channelNumber].innerHTML);
    switchSelectedChannel(channelNumber);
    switchChatBarLink();
    toggleStar('off');
}

function switchSelectedTab(tabNumber) {
    var tabElements = document.querySelectorAll('#tab-bar > button');

    $(tabElements).removeClass('selected');
    $(tabElements[tabNumber]).addClass('selected');
    console.log('changed selected tab');
}

function toggleStar(status) {
    if (status == 'off') {
        $('#chat > h1 > img').attr({src: 'http://ip.lfe.mw.tum.de/sections/star-o.png', alt: 'not starred'});
    } else {
        if ($('#chat > h1 > img').attr('alt') == 'not starred') {
            $('#chat > h1 > img').attr({src: 'http://ip.lfe.mw.tum.de/sections/star.png', alt: 'starred'});
        } else {
            $('#chat > h1 > img').attr({src: 'http://ip.lfe.mw.tum.de/sections/star-o.png', alt: 'not starred'});
        }
    }
}

function toggleSquare() {
    $('#square').toggle();
}

