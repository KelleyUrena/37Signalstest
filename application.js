$(function() {
    console.log( "ready!" );


var $container = $('body')

var clearMessagesState =function () {
    $container.removeClass('default').removeClass('basecamp').removeClass('highrise').removeClass('campfire');

}

var setMessagesDefault =function () {
	clearMessagesState();
    $container.addClass('default')

}

$('a#basecamp').hover(function(){
    clearMessagesState();
    $container.addClass('basecamp')
}, setMessagesDefault)

$('a#campfire').hover(function(){
    clearMessagesState();
    $container.addClass('campfire')
}, setMessagesDefault)

$('a#highrise').hover(function(){
    clearMessagesState();
    $container.addClass('highrise')
}, setMessagesDefault)

});
