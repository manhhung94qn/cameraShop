<template>
    <div>
        {{$route.query.name}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: JSON.stringify(this.$route.query)
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>