<template>
    <Card class="card">
        <p slot="title">
            <a @click="goJobDetail(job.jobId)">
                <Badge :count="job.unRead"/>
                {{job.title}}</a>
        </p>

        <Row>
            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <p>{{$t("task.code")}}:{{job.code}}</p>
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <div v-if="PROGRESS">
                    <Tag color="primary">Progress</Tag>
                </div>
            </Col>

            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <p>{{$t("job.partyAName")}}: {{job.partyAName}}</p>
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <p>{{$t("job.partyBName")}}: {{job.partyBName}}</p>
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
            </Col>

            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <p>{{$t("task.days")}}: {{job.days}}</p>

            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <p>{{$t("task.price")}}: {{job.price}}</p>
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <p>{{$t("job.contractTime")}}: {{contractTime}}</p>

            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="12">
                <!--<p>{{$t("apply.readTime")}}: {{readTime}}</p>-->
            </Col>
            <Divider/>
            <Col :xs="12" :sm="6" :md="6" :lg="6">
            </Col>
            <Col :xs="12" :sm="6" :md="6" :lg="6">
            </Col>
        </Row>
    </Card>
</template>

<script>
    import moment from "moment";

    export default {
        name: "jobPartyBListTpl",
        props: {
            job: {}
        },
        computed: {
            PROGRESS() {
                console.log(this.job.status)
                if (this.job.status === 'PROGRESS') {
                    return true
                }
                return false
            },
            publishTime() {
                return moment(this.job.createdTime).format('YYYY-MM-DD HH:mm')
            },
            contractTime() {
                return moment(this.job.contractTime).format('YYYY-MM-DD HH:mm')
            }
        },
        methods: {
            goJobDetail(jobId) {
                this.$store.dispatch('saveJobId', jobId);
                this.$router.push({
                    name: 'partyBJobDetail',
                    params: {
                        jobId: jobId
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
