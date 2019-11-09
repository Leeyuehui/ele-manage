<template>
    <div class="login-box">
        <section class="login-box-container">
              <h3>elm后台管理系统</h3>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item>
                    <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
            <p>温馨提示：</p>
            <p>未登录过的新用户，自动注册</p>
            <p>注册过的用户可凭账号密码登录</p>
        </section>
       
    </div>
</template>

<script>
export default {
   data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  } 

</script>


<style lang="stylus" scoped>
.login-box
    position fixed
    top 0
    right 0
    width 100%
    height 100%
    z-index 10000
    background-color #324057
    .login-box-container
        position absolute 
        top 0
        right 0
        bottom 0
        left 0
        margin auto 
        width 320px
        height 210px
        background-color #fff
        padding 25px 25px 30px 25px
        border-radius 8px
        h3
            position absolute
            top -100px
            text-align center
            color #ffffff
            font-weight bold
            font-size 34px
            padding 0 25px
        p
            text-align center
            font-size 12px
            color #f00
            margin-bottom 3px
.el-form-item__content .el-button--primary
    width 100%
</style>