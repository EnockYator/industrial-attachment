<template>
    <div class="applicants-list">
        <h2>Manage Applications</h2>
        <UserCard v-for="applicant in applicants" :key="applicant.id" :user="applicant"/>    
    </div>
</template>

<script>
import UserCard from '/components/common/UserCard.vue';

definePageMeta({
    layout: 'hrdashboard'
})

export default {
    name: 'manage-applications',
    components: {
        
        UserCard
    },
    data() {
        return {
            applicants: [
                {id: '1', name: 'Enock', email: 'enock@gmail.com', avatar: '/assets/images/auditorium.jpg', role: 'Applicant'},
                {id: '2', name: 'Yator', email: 'yator@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'Applicant'},
                {id: '3', name: 'Faith', email: 'faith@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'Applicant'},
                {id: '4', name: 'Rono', email: 'rono@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'Applicant'},
                {id: '5', name: 'Peter', email: 'peter@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'Applicant'},
                {id: '6', name: 'Sharon', email: 'sharon@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'Applicant'},
                {id: '7', name: 'Elvis', email: 'elvis@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'Applicant'},
                {id: '8', name: 'Rose', email: 'rose@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'Applicant'}
            ]
        }
    }
}
</script>

<style scoped>
.applicants-list{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>