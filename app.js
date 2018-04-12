var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'Hello From The First Instance',
        showParagraph: false
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed! new value: ' + value);
        }
    },
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
        },
        updateTitle: function (title) {
            this.title = title;
        }
    }
});

setTimeout(function () {
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