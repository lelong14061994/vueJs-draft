<template>
    <div>
        <input type="text" :value="msg" @input="changeMessage">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import {bus} from '../main'
    export default {
        props: ['msg'],
        data() {
            return {
                message: ''
            }
        },
        methods: {
            changeMessage(event) {
                // this.message = event.target.value;
                this.message = event.target.value
                console.log(this.message)
                this.$emit('messageChanged', this.message);
                bus.$emit('testEventBus', this.message);

            }
        }
    }
</script>