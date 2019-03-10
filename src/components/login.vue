<template>
    <div class="login">
        
       <el-form :model="formdata" label-position='top' status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
           <h2>用户登陆</h2>
  <el-form-item label="用户名" prop="username">
    <el-input v-model.trim="formdata.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model.trim="formdata.password" autocomplete="off"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button class="login-btn" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    
  </el-form-item>
</el-form>
    </div>
</template>
<script>
export default {
    data(){
       return {
        formdata: {
          password: '',
          username: '',
          
        },
         rules: {
          username: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
        }
    }
    },
    methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
          } else {
            // console.log('error submit!!');
            this.$message.error('请输入正确的用户名和密码')
            return false
          }
        });
      } 
    },
}
</script>
<style >
html,body{
    height: 100%;
    margin: 0;
    padding: 0;
}
body>div:first-of-type{
    height: 100%;
}
.login{
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.el-form{
    height: 440px;
    width: 580px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 40px;
}
.login-btn{
    width: 100%;
}
</style>