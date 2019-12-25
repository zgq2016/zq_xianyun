<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 发表攻略 -->
            <div class="publish-create">
                <h2>发表新攻略</h2>
                <p>分享你的个人游记，让更多人看到哦！</p>
                <el-form>
                    <el-form-item>
                        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <VueEditor :config="config" ref="vueEditor" />
                    </el-form-item>

                    <el-form-item label="选择城市">
                        <el-autocomplete
                            v-model="form.city"
                            :fetch-suggestions="querySearchCity"
                            placeholder="请搜索游玩的城市"
                            @select="handleSelect"
                            style="width:220px"
                        ></el-autocomplete>
                    </el-form-item>
                </el-form>

                <div class="create-button">
                    <el-button size="mini" type="primary" @click="onSubmit">发布</el-button>
                    <span>
                        或者
                        <i @click="draftSubmit">保存到草稿</i>
                    </span>
                </div>
            </div>
            <div class="aside">
                <div class="drafts">
                    <h4 class="drf-title">草稿箱({{total}})</h4>
                    <div class="draft-list" v-for="(item,index) in drafts" :key="index">
                        <div class="drf-item">
                            <div class="draft-post-title">
                                <span @click="handleChange(index)" :v-model="index">{{item.title}}</span>
                                <span class="iconfont el-icon-edit"></span>
                            </div>

                                <p>{{item.time}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </el-row>
    </div>
</template>
<script>
import moment, { localeData } from "moment";
// import VueEditor from "vue-word-editor";

// 需要单独引入样式
import "quill/dist/quill.snow.css";
import loginFormVue from "../../components/user/loginForm.vue";
let VueEditor;

if (process.browser) {
    VueEditor = require("vue-word-editor").default;
}
export default {
    // name: 'app',
    data() {
        return {
            total: "",
            time: "",
            drafts: [],
            form: {
                content: "", //文章内容
                title: "", // 标题
                city: "" // 城市名称
            },
            config: {
                modules: {
                    // 工具栏
                    toolbar: [
                        ["bold", "italic", "underline", "strike"], // toggled buttons
                        // ["blockquote", "code-block"],
                        [{ header: 1 }, { header: 2 }], // custom button values
                        ["image", "video"]
                    ]
                },
                // 主题
                theme: "snow",
                //上传图片
                uploadImage: {
                    url: "http://localhost:1337/upload",
                    name: "files",
                    // 上传之前触发
                    uploadBefore(file) {
                        return true;
                    },
                    uploadProgress(res) {},
                    //上传成功触发
                    uploadSuccess(res, insert) {
                        insert("http://localhost:1337" + res.data[0].url);
                    },
                    //上传失败时触发
                    uploadError() {},
                    //是否显示进度条
                    showProgress: true
                },

                //   /上传视频
                uploadVideo: {
                    //url: "http://157.122.54.189:9095/upload",
                    url: "http://localhost:1337/upload",
                    name: "files",
                    uploadBefore(file) {
                        return true;
                    },
                    uploadProgress(res) {},
                    uploadSuccess(res, insert) {
                        insert("http://localhost:1337" + res.data[0].url);
                    },
                    uploadError() {}
                }
            }
        };
    },
    components: {
        VueEditor
    },
    mounted() {
        this.drafts = JSON.parse(localStorage.getItem("posts-caogao") || `[]`);
        this.total = this.drafts.length;
        console.log(this.drafts.length);
    },
    methods: {
        handleChange(index){
     const postlis = JSON.parse(localStorage.getItem("posts-caogao"));
      this.form.title = postlis[index].title;
    this.$refs.vueEditor.editor.root.innerHTML= postlis[index].content;
      this.form.city = postlis[index].city;
    //   this.drafts.splice(index,1)
        },
        draftSubmit() {
            const token = this.$store.state.user.userInfo.token;
            if (!token) {
                this.$message.warning("请先登录!");
                this.$router.push("/user/login");
                return;
            }
            //自定义验证
            const rules = {
                title: {
                    value: this.form.title,
                    message: "请输入文章标题"
                },
                city: {
                    value: this.form.city,
                    message: "请选择搜索城市"
                }
            };
            this.time = moment().format("YYYY-MM-DD");
            const content = this.$refs.vueEditor.editor.root.innerHTML;
            if (content.indexOf("<br>") !== -1) {
                this.$message.warning("请输入文章内容");
                return;
            }
            let invalid = true;
            // 循环验证表单的数据
            Object.keys(rules).forEach(v => {
                if (!invalid) return;
                if (!rules[v].value) {
                    invalid = false;
                    this.$message.warning(rules[v].message);
                }
            });
            if (!invalid) return;
            this.drafts.unshift({
                title: this.form.title,
                content: content,
                time: this.time,
                city: this.form.city
            });
            if(this.drafts.length > 5){
               this.drafts.length=5
            }
            this.total = this.drafts.length;
            localStorage.setItem("posts-caogao", JSON.stringify(this.drafts));
            this.form.title=""
            this.$refs.vueEditor.editor.root.innerHTML=""
            this.form.city =""
            // return this.drafts;
            
        },

        onSubmit() {
            this.form.content = this.$refs.vueEditor.editor.root.innerHTML;
            //自定义验证
            const rules = {
                title: {
                    value: this.form.title,
                    message: "请输入文章标题"
                },
                city: {
                    value: this.form.city,
                    message: "请选择搜索城市"
                }
            };
            const content = this.$refs.vueEditor.editor.root.innerHTML;
            if (content.indexOf("<br>") !== -1) {
                this.$message.warning("请输入文章内容");
                return;
            }
            let invalid = true;
            // 循环验证表单的数据
            Object.keys(rules).forEach(v => {
                if (!invalid) return;

                //如果值为空 提示
                if (!rules[v].value) {
                    invalid = false;
                    this.$message.warning(rules[v].message);
                }
            });

            if (!invalid) return;
            this.$axios({
                url: "/posts",
                method: "POST",
                data: this.form,
                //  添加授权的头信息
                headers: {
                    // 下面请求头信息不是通用的，针对当前的项目的（基于JWT token标准）
                    Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
                }
            }).then(res => {
                const { data } = res.data;
                const { status, message } = res.data;
                if (status == 0) {
                    this.$message.success(message);
                    this.$router.push("/post");
                }
                // this.$store.commit("post/setPostData", data);
            });
        },
        // 输入游玩城市时触发
        querySearchCity(value, cb) {
            if (!value.trim()) {
                cb([]);
                return;
            }
            this.$axios({
                url: "/airs/city",
                params: {
                    name: value
                }
            }).then(res => {
                const { data } = res.data;
                const newData = data.map(v => {
                    return {
                        ...v,
                        value: v.name
                    };
                });
                cb(newData);
            });
        },
        // 下拉选择时触发
        handleSelect(item) {
            this.form.city = item.value;
        }
    }
};
</script>
<style lang="less" scoped>
.container {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
}
.publish-create {
    width: 750px;
    h2 {
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: 400;
    }
    p {
        font-size: 12px;
        color: #999;
        margin-bottom: 20px;
    }
}
el-form-item {
    margin-bottom: 20px;
}
.create-button {
    span {
        font-size: 14px;
        margin-left: 6px;
        i {
            color: orange;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

/deep/ #editor {
    height: 400px;
}
.aside {
    width: 200px;
}
.drafts {
    border: 1px #ddd solid;
    padding: 10px;
    .drf-title {
        margin-bottom: 10px;
        font-weight: 400;
        color: #666;
    }

    .drf-item{
        margin-bottom: 10px;
        font-size: 14px;
    }
    .draft-post-title{
        &:hover{
            color: orange;
        }
    }

    P{
        color: #999
    }
}
</style>
