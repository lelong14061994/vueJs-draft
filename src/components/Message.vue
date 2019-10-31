<template>
    <div>
        <h1>{{ message }}</h1>
        <app-input :msg= "message" @messageChanged="message =$event"></app-input>
        <app-display></app-display>
    </div>
</template>

<script>
    import Input from './Input';
    import Display from './Display'
    export default {
        data() {
          return {
              message: 'This is a great Message!'
          }
        },
        components: {
            'app-input': Input,
            'app-display': Display
        }
    }
</script>