<template>
    <div>
        <h1 class="title">View</h1>
        <Loader v-if="isLoading" />
        <Body v-bind:catsList="catsList" />
    </div>
</template>

<script>
import axios from 'axios';
import Body from '@/components/Body';
import Loader from '@/components/Loader';
export default {
    mounted() {
        const headers = { 'x-api-key': 'db2157d0-39de-439e-b8fe-7e033060a0f0' };
        axios
            .get('https://api.thecatapi.com/v1/images/', {
                headers,
            })
            .then((response) => {
                this.catsList = response.data;
                this.isLoading = false;
            });
    },
    data() {
        return {
            catsList: [],
            isLoading: true,
        };
    },
    components: {
        Body,
        Loader,
    },
};
</script>

<style scope></style>
