var data = {
    title: 'Hello From The First Instance',
    showParagraph: false
};

var vm1 = new Vue({
    el: '#app1',
    data: data,
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
            console.log(this.$refs);
        },
        updateTitle: function (title) {
            this.title = title;
        }
    }
});
// Vue object vm1 will not be able to access this from the instance itself 
// because it can only access initialized props when creation
vm1.newProp = 'new!';
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'test';

setTimeout(function () {
    vm1.title = 'changed from timer';
    vm1.show();
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