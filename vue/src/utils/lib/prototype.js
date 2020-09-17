import Vue from 'vue'

const dispatch = function(eventType, data) {
    let parent = this.$parent
    while(parent) {
        parent.$emit(eventType, data);
        parent = parent.$parent;
    }
}

const boardCast = function(eventType, data) {
    board.call(this, eventType, data);
}

function board(eventType, data) {
    this.$children.forEach(child => {
        child.$emit(eventType, data);
        if(child.$children.length) {
            board.call(child,eventType, data);
        }
    })
}

const bus = new Vue();

export {
    dispatch,
    boardCast,
    bus,
}