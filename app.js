var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'Hello From The First Instance'
    },
    watch: {
        title: function (value) {
            alert('Title changed! ' + value);
        }
    },
    methods: {

    }
});

setTimeout(function(){
    vm1.title = 'changed from timer';
}, 3000);

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'Instance 2'
    },
    methods: {
        onChange: function () {
            vm1.title = 'changed';
        }
    }
});