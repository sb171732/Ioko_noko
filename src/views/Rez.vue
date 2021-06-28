<template>
     <div id="rez">
          <el-row>
              <el-col class="pb-3 mb-2 w3-border-bottom"> 
                  <el-row>
                      <el-col :span="18">
                          <el-col :span="8">
                              <el-select v-model="sel_k" clearable placeholder="Выберите кожуун">
                                <el-option
                                v-for="item in kojs"
                                :key="item.id"
                                :label="item.name"
                                :value="item.num">
                                </el-option>
                              </el-select>          
                          </el-col>
                          <el-col :span="16">
                               <el-select v-model="sel_d" clearable placeholder="Выберите садик" style="width: inherit;">
                                <el-option
                                v-for="item in fdou()"
                                :key="item.id"
                                :label="item.min_name"
                                :value="item.sch_cod">
                                </el-option>
                               </el-select> 
                          </el-col>
                          
                      </el-col>       
                  </el-row>
              </el-col>
              <el-col>
                  <el-col :span='5' class="w3-border p-3" v-loading="l1===0">
                      <h6 class="mb-4">1. Физическая безопасность</h6>
                        <el-row v-for="q of t1Calc(RT1)" :key="q.num" class="mb-2 pb-3 w3-border-bottom">
                            <el-col style="text-align: initial;" class="mb-3">
                                {{ q.text }}
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-green">
                                {{ Math.round(q.col1*100/(q.col1+q.col2+q.col3)) }} %
                                Соответсвует
                               
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-yellow">
                                {{ Math.round(q.col2*100/(q.col1+q.col2+q.col3)) }} %
                                Частично соответствует
                                
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-red">
                                {{ Math.round(q.col3*100/(q.col1+q.col2+q.col3)) }} %
                                Не соответсвует
                                
                            </el-col>
                        </el-row>
                   </el-col>                  
                  <el-col :span='5' class="w3-border p-3" v-loading="l2===0">
                        <h6 class="mb-4">2. Здоровье детей</h6>
                        <el-row v-for="q of t2Calc(RT2)" :key="q.num" class="mb-2 pb-3 w3-border-bottom">
                            <el-col style="text-align: initial;" class="mb-3">
                                {{ q.text }}
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-green">
                                {{ Math.round(q.col1*100/(q.col1+q.col2+q.col3)) }} %
                                Соответсвует
                               
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-yellow">
                                {{ Math.round(q.col2*100/(q.col1+q.col2+q.col3)) }} %
                                Частично соответствует
                                
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-red">
                                {{ Math.round(q.col3*100/(q.col1+q.col2+q.col3)) }} %
                                Не соответсвует
                                
                            </el-col>
                        </el-row>
                   </el-col>                  
                  <el-col :span='4' class="w3-border p-3" v-loading="l3===0">
                       <h6 class="mb-4">3. Критерии оценки сформированности здоровьесберегающих знаний и умений у дошкольников</h6>
                        <el-row v-for="q of t3Calc(RT3)" :key="q.num" class="mb-2 pb-3 w3-border-bottom">
                            <el-col style="text-align: initial;" class="mb-3">
                                {{ q.text }}
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-green">
                                {{ Math.round(q.col3*100/(q.col1+q.col2+q.col3)) }} %
                                Знания и умения полностью сформированы
                                
                            </el-col>
                           <el-col :span="24" style="text-align: initial;" class="w3-text-yellow">
                                {{ Math.round(q.col2*100/(q.col1+q.col2+q.col3)) }} %
                                Частичное освоение
                                
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-red">
                                {{ Math.round(q.col1*100/(q.col1+q.col2+q.col3)) }} %
                                Отсутствие знаний и умений
                               
                            </el-col>
                            
                           
                        </el-row>
                   </el-col>                  
                  <el-col :span='5' class="w3-border p-3" v-loading="l4===0">
                        <h6 class="mb-4">4. Степень удовлетворенности деятельности ДОУ</h6>
                        
                        <el-row v-for="q of t4Calc(RT4)" :key="q.num" class="m-2">
                                <el-col :span="4">{{ q.num }} </el-col>
                                <el-col :span="20">   
                                     <el-progress :percentage="Math.round(q.col*100/RT4.length)"></el-progress>
                                </el-col >
                        </el-row>



                   </el-col>                  
                  <el-col :span='5' class="w3-border p-3" v-loading="l5===0">
                         <h6 class="mb-4">5. Профессиональные компетенции педагога ДОУ</h6>
                        <el-row v-for="q of t5Calc(RT5)" :key="q.num" class="mb-2 pb-3 w3-border-bottom">
                            <el-col style="text-align: initial;" class="mb-3" >
                                {{ q.text }}
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-green">
                                {{ Math.round(q.col1*100/(q.col1+q.col2+q.col3)) }} %
                                Соответсвует
                               
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-yellow">
                                {{ Math.round(q.col2*100/(q.col1+q.col2+q.col3)) }} %
                                Частично соответствует
                                
                            </el-col>
                            <el-col :span="24" style="text-align: initial;" class="w3-text-red">
                                {{ Math.round(q.col3*100/(q.col1+q.col2+q.col3)) }} %
                                Не соответсвует
                                
                            </el-col>
                        </el-row>
                   </el-col>                  
  

              </el-col>
          </el-row>
     </div>
</template>
<script>
export default{
    name:'rez',
    data() {
        return{
          l1:'',
          l2:'',
          l3:'',
          l4:'',
          l5:'',
          RT1:[],            
          RT2:[],
          RT3:[],
          RT4:[],
          RT5:[],
          userOnCode:[],
          dou:[],kojs:[],
          sel_k:'',sel_d:"",
          T1:[],T2:[],T3:[],T4:[],T5:[]          
        }
        
    },
    methods:{
        t4Calc(m){
            let arr=[
                { num:"10", col:0 },
                { num:"9", col:0 },
                { num:"8", col:0 },
                { num:"7", col:0 },
                { num:"6", col:0 },
                { num:"5", col:0 },
                { num:"4", col:0 },
                { num:"3", col:0 },
                { num:"2", col:0 },
                { num:"1", col:0 }
            ]
            for (let n of arr){
                for (let a of m){
                    if (a.sel===n.num){ n.col++; }
                }
            }
            return arr;
        },
        t1Calc(m){
           let arr=[]
           for (let q of this.T1){
              let col1=0,col2=0,col3=0;
              for (let a of m){
                  if (q.id===a.num){
                      if (a.sel==='1') { col1++; }
                      if (a.sel==='2') { col2++; }
                      if (a.sel==='3') { col3++; }
                  } 
               }
              arr.push({ text:q.q_text, num:q.id, col1:col1, col2:col2, col3:col3 })  
           }
           return arr
        },
        t2Calc(m){
           let arr=[]
           for (let q of this.T2){
              let col1=0,col2=0,col3=0;
              for (let a of m){
                  if (q.id===a.num){
                      if (a.sel==='1') { col1++; }
                      if (a.sel==='2') { col2++; }
                      if (a.sel==='3') { col3++; }
                  } 
               }
              arr.push({ text:q.q_text, num:q.id, col1:col1, col2:col2, col3:col3 })  
           }
           return arr
        },
        t3Calc(m){
           let arr=[]
           for (let q of this.T3){
              let col1=0,col2=0,col3=0;
              for (let a of m){
                  if (q.id===a.num){
                      if (a.sel==='1') { col1++; }
                      if (a.sel==='2') { col2++; }
                      if (a.sel==='3') { col3++; }
                  } 
               }
              arr.push({ text:q.q_text, num:q.id, col1:col1, col2:col2, col3:col3 })  
           }
           return arr
        },
        t5Calc(m){
           let arr=[]
           for (let q of this.T5){
              let col1=0,col2=0,col3=0;
              for (let a of m){
                  if (q.id===a.num){
                      if (a.sel==='1') { col1++; }
                      if (a.sel==='2') { col2++; }
                      if (a.sel==='3') { col3++; }
                  } 
               }
              arr.push({ text:q.q_text, num:q.id, col1:col1, col2:col2, col3:col3 })  
           }
           return arr
        },

       fdou(){
           return this.dou.filter((n) =>{ return n.sch_cod.match('17'+this.sel_k)   } )
       }, 
       getD(){
        let fd = new FormData(); fd.append('dou_list','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.dou = result })
            },   
       getK(){
        let fd = new FormData(); fd.append('kojs','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.kojs = result })
            },   
       getRT1(cod){
        let fd = new FormData(); fd.append('getT1_code',cod)
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.RT1 = result, this.l1=result.length, this.getT1() })
            },   
       getRT2(cod){
        let fd = new FormData(); fd.append('getT2_code',cod)
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.RT2 = result, this.l2=result.length, this.getT2() })
            },   
       getRT3(cod){
        let fd = new FormData(); fd.append('getT3_code',cod)
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.RT3 = result, this.l3=result.length, this.getT3() })
            },   
       getRT4(cod){
        let fd = new FormData(); fd.append('getT4_code',cod)
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.RT4 = result, this.l4=result.length, this.getT4() })
            },   
       getRT5(cod){
        let fd = new FormData(); fd.append('getT5_code',cod)
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.RT5 = result, this.l5=result.length, this.getT5() })
            },   
       getUser(cod){
        let fd = new FormData(); fd.append('getUser_code',cod)
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.userOnCode = result })
            },   
       getT1(){
        let fd = new FormData(); fd.append('t1','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.T1 = result })
            },   
       getT2(){
        let fd = new FormData(); fd.append('t2','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.T2 = result })
            },   
       getT3(){
        let fd = new FormData(); fd.append('t3','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.T3 = result })
            },   
       getT4(){
        let fd = new FormData(); fd.append('t4','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.T4 = result })
            },   
       getT5(){
        let fd = new FormData(); fd.append('t5','')
        fetch('http://95.167.178.158/other/projects/noko/rest.php', { method: 'POST',body: fd}).then(response=>response.json())
            .then(result=>{ this.T5 = result })
            },   
     
    },
    created(){
         this.getK(), this.getD()

    },
    watch:{
        sel_d(to){
            console.log(to)
            this.getRT1(to)
            this.l1=0
            this.getRT2(to)
            this.l2=0
            this.getRT3(to)
            this.l3=0
            this.getRT4(to)
            this.l4=0
            this.getRT5(to)
            this.l5=0
        }
    }
}
</script>
