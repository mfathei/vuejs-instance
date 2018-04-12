var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'Default Title'
    },
    beforeCreate: function () {
        console.log('beforeCreate()');
    },
    created: function () {
        console.log('created()');
    },
    beforeMount: function () {
        console.log('beforeMount()');
    },
    mounted: function () {
        console.log('mounted()');
    },
    beforeUpdate: function () { // only fires if the new value not same as the old one
        console.log('beforeUpdate()');
    },
    updated: function () { // only fires if the new value not same as the old one
        console.log('updated()');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy()');
    },
    destroyed: function () {
        console.log('destroyed()');
    },
    methods: {
        destroy: function () {
            this.$destroy();
        }
    }
});