<template>
    <div class="application-status">
        <h2>Application Status</h2>
    </div>
  
</template>

<script>
definePageMeta({
    layout: 'applicantdashboard'
});

export default {
    name: "application-status"
}
</script>

<style>
.application-status{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>