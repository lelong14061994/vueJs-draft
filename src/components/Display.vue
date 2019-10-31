<template>
    <div id = "display">
        <p>{{ message }}</p>
    </div>
</template>

<script>
import {bus} from '../main'
    export default {
        props: ['msg'],
        data(){
            return {
                message: null
            }
        },
        created(){
            bus.$on('testEventBus', (data) =>{
                this.message = data
                console.log(this.msg)
            })
        }
    }
</script>