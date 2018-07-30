<template>
  <div class="content">
    <Button type="primary">ok</Button>
    <Card class="card" :bordered="true"
          v-for="item in jobs"
    >
      <p slot="title" @click="tapJob">
        <Icon type="ios-film-outline"></Icon>
        <a>{{item.title}}</a>
      </p>
      <p>Publisher: 刘洋/Liuyang</p>


      <p>Published time: {{item.createdTime}}</p>

      <p>Reward: {{item.reward}}</p>

      <p>Days: {{item.days}} days</p>
      <quill-editor></quill-editor>
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
      }
    },
    methods: {
      loadData() {
        loadJobs().then(this.getData)
        apiGetTasks().then(this.getData)
      },

      getData(res) {
        this.jobs = res.data;
        console.log(this.jobs)
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
