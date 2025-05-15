<script lang="ts" setup>
import axios from 'axios';

const response = await axios.get("http://localhost:8080/getServerTime", {
    headers: {
        'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
    }
})

console.log(response.data)
const config = {
    startTime: '',
    targetTime: ''
}
</script>


<template>  
    <div class="cd-container">
        <div class="cd-title">

        </div>
        <div class="cd-content">

        </div>
    </div>

</template>


<style lang="scss" scoped>

</style>