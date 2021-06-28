<template>
  <div id="app" class="p-2">
    Всего по РТ: {{ users.length }}
  

    <el-timeline class="mt-4">
        <el-timeline-item v-for="k of kojs" :key="k.id" :timestamp="k.name" placement="top">
          <el-card>
            <h6>Всего: {{ kcount(k.num).length }}</h6>
            <p>Родитель: {{ rodnum(kcount(k.num)).length }}</p>
            <p>Воспитатель: {{ vosnum(kcount(k.num)).length }}</p>
            <p>Заведующий: {{ zavnum(kcount(k.num)).length }}</p>
          </el-card>
        </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
       users:[],kojs:[]
    }
  },
  methods:{
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
            }        
    
  },
  created(){
      this.getUsers()
      this.getK()   
  
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
