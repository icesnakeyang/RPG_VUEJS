<template>
  <div class="content">
    <Card class="card" :bordered="true"
          v-for="item in jobs">
      <!--<p slot="title" @click="tapJob">-->
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        <a>{{item.title}}</a>
      </p>
      <Button @click="changeLangToEn(this)">English</Button>
      <Button @click="chnageLangToZh">中文</Button>
      <p>{{$t("test.hello")}}</p>
      <p>Publisher: 刘洋/Liuyang</p>


      <p>Published time: {{item.createdTime}}</p>

      <p>Reward: {{item.reward}}</p>

      <p>Days: {{item.days}} days</p>
      <quill-editor v-model="item.detail"
                    :options="options"
        ></quill-editor>
    </Card>
  </div>
</template>

<script>
  // require styles
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import {quillEditor} from 'vue-quill-editor'

  import {loadJobs} from "../api/api";
  import {apiGetTasks} from "../api/api";

  export default {
    name: 'HelloWorld',
    components: {
      quillEditor
    },
    data() {
      return {
        jobs: [],
        options:{
          modules:{
            toolbar:false
          }
        }
      }
    },
    methods: {
      loadData() {
        console.log('load');
        loadJobs().then(this.getData)
        apiGetTasks().then(this.getData)
      },

      getData(res) {
        console.log('load2');
        this.jobs = res.data.data;
        console.log(this.jobs)
      },

      changeLangToEn(hand){
        this.$i18n.locale='en'
      },

      chnageLangToZh(){
        this.$i18n.locale='zh'
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
