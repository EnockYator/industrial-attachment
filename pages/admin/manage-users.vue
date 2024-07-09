<template>
    <div class="users-list">
        <h2>Manage Users</h2>
        <UserCard v-for="systemUser in systemUsers" :key="systemUser.id" :user="systemUser"/>
    </div>
  
</template>

<script>
import UserCard from '/components/common/UserCard.vue';

definePageMeta({
    layout: 'admindashboard'
});

export default {
    name: "manage-users",
    components: {
        UserCard
    },
    data() {
        return {
            systemUsers: [
                {id: '1', name: 'Enock', email: 'enock@gmail.com', avatar: '/assets/images/auditorium.jpg', role: 'Applicant'},
                {id: '2', name: 'Yator', email: 'yator@gmail.com', avatar: '/assets/images/kvda-logo-image.png', role: 'hr'},
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

<style>
.users-list{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>