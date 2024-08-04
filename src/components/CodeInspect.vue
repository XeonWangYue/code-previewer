<script setup lang="ts">
import { ClickOutside as vClickOutside } from 'element-plus'
import { ref, unref } from 'vue';

const refs = ref([])

const props = defineProps({
    code: {
        type: Object
    },
    type: {
        type: String
    }
})


const detectKeyword = (word: string) => {
    const trueWord = word.trim()
    const candidate = ["bool", "int", "double", "float"]
    for (let idx in candidate) {
        if (candidate[idx] === trueWord) {
            return "code-keyword"
        }
    }

    return "code-type"
}

const handleEl = () => {
    console.log(refs)
}

</script>

<template>
    <div class="my-code">
        <pre class="code-line"><div class="code-keyword">struct</div> <div>{{ props.type }}</div> {</pre>
        <template v-for="item in props.code" :ref="(el)=>refs.push(el)">
            <div class="code-line code-line-ref">
                <pre>    </pre>
                <!-- <span class="code-keyword" v-if="line.keyword">{{ line.keyword }}</span> -->
                <span :class="detectKeyword(item.type)" v-if="item.type">{{ item.type }}</span>
                <span class="code-name" v-if="item.name">{{ item.name }};</span>
                <!-- <span class="code-token" v-if="item.Value.name">{{ item.Value.name }}</span> -->
            </div>
        </template>
        <pre class="code-line">}</pre>
    </div>
    <el-button @clicked="handleEl"></el-button>

</template>

<style scoped lang="scss">
.my-code {
    font-family: "Consolas";
    padding-left: 10px;

    pre {
        font-family: "Consolas";
    }

    .code-line {
        margin: 0;
        display: block;
        user-select: auto;
        width: 100%;

        pre,
        div {
            display: inline;
            word-break: break-all;
        }
    }

    .code-line-ref {
        &:hover {
            cursor: pointer;
            background-color: beige;
        }

        &>* :hover {
            background-color: transparent;
        }
    }
}



.code-name::before {
    content: " ";
}

.code-keyword {
    color: #871094
}

.code-type {
    color: #067d17;
}

.code-token {
    color: #984721
}

p+p {
    margin: None;
}
</style>