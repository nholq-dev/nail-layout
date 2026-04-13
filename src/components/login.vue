<script lang="ts">
    import Header from './common/header.vue'
    import RightFooter from './common/right-footer.vue';
    import router from '../router';
    import api from './api/api';

    export default{
        components:{
            Header,
            RightFooter
        },
        data(){
            return{
                isLogin: true,
                ListDay : [] as Number[],
                ListMonth : [] as Number[],
                ListYear : [] as Number[],
                errorGlobalMessage:'',
                showGlobalMesssage: false,
                dataLogin:{
                    UserName:'',
                    errorUserName:'',
                    Password:'',
                    errorPassword:''
                },
                dataCreateAccount:{
                    FirstName:'',
                    errorFirstName:'',
                    LastName:'',
                    errorLastName:'',
                    Birth_day:'',
                    errorBirth_day:'',
                    Birth_month:'',
                    errorBirth_month:'',
                    Birth_year:'',
                    errorBirth_year:'',
                    new_UserName:'',
                    errornew_UserName:'',
                    new_Password:'',
                    errornew_Password:'',
                    new_rePassword:'',
                    errornew_new_rePassword:'',
                    Address:'',
                    errorAddress:''
                },
                users: {
                    id: null,
                    fullName: null,
                    userCode: null,
                    address: null
        }
            }
        },
        methods:{
            generateDayOption(){
                let tmpDay = []
                for(let i = 1; i <= 31; i ++){
                    tmpDay.push(i)
                }
                return tmpDay
            },
            generateMonthOption(){
                let tmpMonth = []
                for(let i = 1; i <= 12; i ++){
                    tmpMonth.push(i)
                }
                return tmpMonth
            },
            generateYearOption(start: number,end:number){
                let tmpYear = []
                if(start <= end){
                    for(let i = start; i <= end; i++){
                        tmpYear.push(i)
                    }
                }
                return tmpYear
            },
            createAccount(){
                this.isLogin = false
            },
            ActionLogin(){
                this.dataLogin.errorUserName = ''
                this.dataLogin.errorPassword = ''
                if(this.dataLogin.UserName === ""){
                    this.dataLogin.errorUserName = 'Bắt buộc nhập [Tên Đăng Nhập]'
                    console.log(this.dataLogin.errorUserName)
                }
                if(this.dataLogin.Password === ""){
                    this.dataLogin.errorPassword = 'Bắt buộc nhập [Mật khẩu]'
                }
                if(this.dataLogin.errorUserName == '' && this.dataLogin.errorPassword == ''){
                    if(this.dataLogin.UserName == "admin" && this.dataLogin.Password == "Abcd@123"){
                        router.push("/admin")
                    }else{
                        this.errorGlobalMessage = 'Thông tin đăng nhập không hợp lệ'
                        this.showGlobalMesssage = true
                    }
                }
            },
            async createUser(){

                const params={
                    userCode: this.dataCreateAccount.new_UserName,
                    birthDay: '1997/08/15',
                    address: '15/4 Đa mặn Đông 4',
                    password:""
                };
                try{
                    const res = await api.postUser(params);
                    this.users = res.data;
                    if(this.users.id !== null){
                        console.log("đăng kí thành công")
                    }
                }catch(err){
                    console.error("Xảy ra lỗi API:",err);
                }
                
            }
        },
        created(){
                this.ListDay = this.generateDayOption()
                this.ListMonth = this.generateMonthOption()
                this.ListYear = this.generateYearOption(1900,2026)
            },

    }

    
</script>
<style>
    #form-login{
        width: 400px;
        display: block;
        background-color: #efcbcb;
        border: 1px solid black;
        border-radius: 10px;
        overflow: hidden;
    }
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
    }
    .row-button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input{
        height: 24px;
        width: 220px;
        border-radius: 5px;
        border: 1px solid;
    }
    .link-recover{
        display: flex;
        justify-content: end;
        padding: 0px 20px;
        margin-top: 12px;
        color: #6060e2;
    }
    #form-register{
        display: block;
        background-color: #efcbcb;
        border: 1px solid black;
        border-radius: 10px;
    }
    .row-2{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 350px;
    }
    .row-2 + .row-2{
        margin-left: 32px;
    }
</style>
<template>
    
    <Header />
    <div class="container-main align-item-center" v-if="isLogin===true">
        <form id="form-login">
            <div class="row">
                <span>Tên Đăng Nhập:</span>
                <div class="position-relative">
                    <input v-model="dataLogin.UserName" name="UserName" maxlength="16" >
                    <p class="validate-message" v-if="dataLogin.errorUserName != ''">{{dataLogin.errorUserName}}</p>
                </div>
            </div>
            <div class="row">
                <span>Mật khẩu:</span>
                <div class="position-relative">
                    <input v-model="dataLogin.Password" name="Password" type="password" maxlength="22" >
                    <p class="validate-message" v-if="dataLogin.errorPassword != ''">{{dataLogin.errorPassword}}</p>
                </div>
            </div>
            <div class="link-recover">
                <a><span>Quên mật khẩu</span></a>
            </div>
            <div class="row row-button">
                <button id="login" class="primary" @click.prevent="ActionLogin()">Đăng nhập</button>
                <button id="register" type="button" class="cancel" @click="createAccount">Tạo tài khoản</button>
            </div>
        </form>
    </div>
    <div class="container-main align-item-center" v-if="isLogin===false">
        <form id="form-register">
            <div style="width: 100%; justify-content: center;" class="display-flex align-item-center" ><h2>Tạo tài khoản</h2></div>
            <div class="row">
                <div class="row-2">
                    <span>Họ:</span>
                    <input id="first-name" maxlength="256" v-model="dataCreateAccount.FirstName">
                </div>
                <div class="row-2">
                    <span>Tên:</span>
                    <input id="last-name" maxlength="256" v-model="dataCreateAccount.LastName">
                </div>
            </div>
            <div class="row">
                <div class="row-2">
                    <span>Ngày sinh:</span>
                    <div style="display:flex;align-items: center;;justify-content:space-between;width: 220px;">
                    <select id="birht-d" style="width: 60px;" v-model="dataCreateAccount.Birth_day">
                        <option id="" value ="" ></option>
                        <option v-for="day in ListDay" id="{{ day }}" value="{{ day }}">{{ day }}</option>
                    </select>
                    <select id="birth-m" style="width: 60px;" v-model="dataCreateAccount.Birth_month">
                        <option id="" value =""></option>
                        <option v-for="month in ListMonth" id="{{ month }}" value="{{ month }}" >{{ month }}</option>
                    </select>
                    <select id="birth-y" style="width: 60px;" v-model="dataCreateAccount.Birth_year">
                        <option id="" value =""></option>
                        <option v-for="year in ListYear" id="{{ year }}" value="{{ year }}">{{ year }}</option>
                    </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="row-2">
                    <span>Tên đăng nhập:</span>
                    <input id="username-register" maxlength="16" v-model="dataCreateAccount.new_UserName">
                </div>
            </div>
            <div class="row">
                <div class="row-2">
                    <span>Mật khẩu:</span>
                    <input id="password-register" maxlength="16" v-model="dataCreateAccount.new_Password">
                </div>
                <div class="row-2">
                    <span>Mật khẩu lại:</span>
                    <input id="re-password-register" maxlength="16" v-model="dataCreateAccount.new_rePassword">
                </div>
            </div>
            <div class="row">
                <div class="row-2">
                    <span>Địa chỉ:</span>
                    <input id="address-register" maxlength="16" v-model="dataCreateAccount.Address">
                </div>
            </div>
            <div class="row row-button">
                <button id="login" class="primary" @click.prevent="createUser()">Đăng kí</button>
            </div>
        </form>
    </div>
    <RightFooter />
</template>