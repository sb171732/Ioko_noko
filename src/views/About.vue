<template>
  <div id="app" class="p-2">
    Всего по РТ: {{ users.length }}
  
   <el-row>
       <el-col :span="24">
           <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router>
            <el-submenu class="sb" v-for="k of kojs" :key="k.num" :index="k.num">
                <template slot="title" >
                      <span class="">{{ k.name }} <b> {{ kcount(k.num).length+' '  }}</b></span>
                  </template>
                  <el-menu-item v-for="d of douofkoj(k.num)" :key="d.id" :index="d.sch_cod" :route="{name:'Dou',params:{code:d.sch_cod}}">
                      <span><b class="w3-text-teal m-3"> {{ doucount(d.sch_cod).length }} </b>  {{ d.min_name }}</span>
                </el-menu-item>
            </el-submenu>
       </el-menu>
       </el-col>
       <!-- <el-col :span="16">
          <router-view/>
       </el-col> -->
   </el-row>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
       users:[],kojs:[],dou:[]
    }
  },
  methods:{
    doucount(m){ return this.users.filter((n)=>{ return n.code.match(m); }) }, 
    douofkoj(m){ return this.dou.filter((n)=>{ return n.sch_cod.match('17'+m); }) },
    rodnum(m){ return m.filter((n)=>{ return n.role.match('rod'); }) },
    vosnum(m){ return m.filter((n)=>{ return n.role.match('vos'); }) },
    zavnum(m){ return m.filter((n)=>{ return n.role.match('zav'); }) },
    kcount(knum){
       return this.users.filter((n)=>{
         return n.code.match('17'+knum);
     }) 
    },
    getUsers(){
        let fd = new FormData(); fd.append('getusers','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.users = result })
            },
    getK(){
        let fd = new FormData(); fd.append('kojs','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.kojs = result })
            },        
           
    getD(){
        let fd = new FormData(); fd.append('dou_list','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.dou = result })
    }
     ,
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }         
    
  },
  created(){
      this.getUsers()
      this.getK()  
      this.getD() 
  
}
}
</script>

<style>
.sb {
  text-align: -webkit-left;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
