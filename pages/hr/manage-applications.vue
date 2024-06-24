<template>
    <div class="applicants-list">
        <Header />
        <UserCard v-for="applicant in applicants" :key="applicant.id" :user="applicant"/>    
        <Footer />
    </div>
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';
import UserCard from '/components/common/UserCard.vue';

export default {
    name: 'manage-applications',
    components: {
        Header,
        Footer,
        UserCard
    },
    data() {
        return {
            applicants: [
                {id: '1', name: 'Enock', email: 'enock@gmail.com', avatar: '/assets/images/auditorium.jpg', role: 'Applicant'},
                {id: '2', name: 'Yator', email: 'yator@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'Applicant'}
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