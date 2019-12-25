<template>
    <div>
        <div class="box">
            <Postleft :data="navs"  />
            <Postright />
        </div>
    </div>
</template>

<script>
import Postleft from "@/components/post/postleft";
import Postright from "@/components/post/postright";

export default {
    components: {
        Postleft,
        Postright
    },
    data() {
        return {
            navs: []
        };
    },
    mounted() {
        // 把axios绑定到原型
        // Vue.prototype.$axios = axios
        this.$axios({
            url: "/posts/cities",
            method: "GET"
        }).then(res => {
            // console.log(res);
            const { data } = res.data;
            this.navs = data;
        });
    }
};
</script>

<style lang="less">
.box {
    margin: auto;
    width: 1000px;
    display: flex;
    Postleft {
        width: 270px;
    }
    Postright {
        width: 730px;
    }
}
</style>

