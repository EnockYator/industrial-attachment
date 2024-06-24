<template>
    <div class="user-card">
        <img v-if="user.avatar" :src="user.avatar || defaultAvatar" alt="User Avatar" class="user-avatar">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <p v-if="user.role">{{ user.role }}</p>  
        
    <!-- v-if conditionally renders the element based on the truthy-ness of the expression-->
    </div>
</template>

<script>
export default {
    name : 'UserCard',
    // user object to be passed as prop
    props: {
        user: {
            type : Object,
            required : true,
            default: () => ({
                name: '',
                email: '',
                avatar: '',
                role: ''
            })
        }
    },
    data() {
        return {
            defaultAvatar: '/assets/images/kvda-logo-image.png',
        };
    }


}
</script>


<style scoped>
.user-card{
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.user-avatar{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 16px;
}
</style>