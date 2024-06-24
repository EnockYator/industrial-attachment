<template>
    <div class="users-list">
        <Header />
        <h2>Manage Users</h2>
        <UserCard v-for="systemUser in systemUsers" :key="systemUser.id" :user="systemUser"/>    
        <Footer />
    </div>
  
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';
import UserCard from '/components/common/UserCard.vue';

export default {
    name: "manage-users",
    components: {
        Header,
        Footer,
        UserCard
    },
    data() {
        return {
            systemUsers: [
                {id: '1', name: 'Enock', email: 'enock@gmail.com', avatar: '/assets/images/auditorium.jpg', role: 'Applicant'},
                {id: '2', name: 'Yator', email: 'yator@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'hr'}
            ]
        }
    }

}
</script>

<style>
.users-list{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>