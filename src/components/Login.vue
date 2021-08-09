<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="头像">
            </div>
            <!-- 登录表单 -->
            <el-form class="login_form" :model="loginForm" :rules="loginFormRules" status-icon ref="loginFormRef">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user" placeholder="用户名" v-model="loginForm.username"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password"> 
                    <el-input prefix-icon="el-icon-lock" placeholder="密码" v-model="loginForm.password" show-password></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 登录表单绑定数据
            loginForm:{
                username:'admin',
                password:'123456'
            },
            //表单输入验证
            loginFormRules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
                ]
            }

        }
    },
    methods:{
        resetLoginForm(){
            this.$refs.loginFormRef.resetFields()
            this.loginForm.username=''
            this.loginForm.password=''
        },
        login(){
            this.$refs.loginFormRef.validate(async (boolean,obj)=>{
                if(!boolean) return //console.log(obj);
                // axios请求1
                // this.$http.post('login?username='+this.loginForm.username+'&password='+this.loginForm.password).then(function(responce){
                //     console.log(responce.data.meta);
                // })
                const {data:result}=await this.$http.post("login",this.loginForm)
                if(result.meta.status!==200) return this.$message.error("登录失败")
                this.$message.success("登录成功")
                window.sessionStorage.setItem("token",result.data.token)
                this.$router.push("/home")
            })
        }
    }
}
</script>

<style  scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 3px;
        transform: translate(-50%,-50%);  
    }
    .login_box .avatar_box{
        width: 130px;
        height: 130px;
        position: absolute;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        
    }
    .login_box .avatar_box img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
.btns{
    display: flex;
    justify-content: flex-end;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
    
</style>
