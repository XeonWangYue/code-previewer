<script setup lang="ts">
import CodeInspect from "./components/CodeInspect.vue"

const comment = ref([])

window.addEventListener('pywebviewready', function () {
  window.pywebview.api.scan_directory().then((ret: any) => {
    for (let item in ret) {
      comment.value.push(ret[item])
    }
  })
})

const data = [
  {
    "id": 1,
    "label": "ROOT",
    "prop": {
      "type": "type0"
    },
    "children": [
      {
        "id": 2,
        "label": "value1",
        "prop": {
          "type": "TypeA",
          "struct": [
            {
              "type": "TypeA1",
              "name": "valueA1",
              "comments": [
                {
                  "userName": "Ben Li",
                  "userId": 1,
                  "comment": "A Struct"
                }
              ],

            },
            {
              "type": "TypeA2",
              "name": "valueA2",
              "comments": [
                {
                  "userName": "Alice Zhao",
                  "userId": 2,
                  "comment": "B Struct"
                }
              ],
            }

          ]
        },
        "children": []
      }
    ]
  }
]


</script>

<template>
  <div style="height:1000px">
    <el-auto-resizer>
      <template #default="{ height }">
        <el-table :data="data" :height="height" row-key="id">
          <el-table-column prop="label" label="Name" width="200" sortable/>
          <el-table-column prop="prop.type" label="Type" width="400" sortable/>
          <el-table-column label="Struct" width="800px">
            <template #default="scope">
              <CodeInspect v-if="scope.row.prop.struct" :code="scope.row.prop.struct" :type="scope.row.prop.type">
              </CodeInspect>
            </template>
          </el-table-column>
          <el-table-column label="Operate">
            <el-button text>Add Comment</el-button>
          </el-table-column>
        </el-table>
      </template>
    </el-auto-resizer>
    {{ comment }}
  </div>
</template>

<style scoped></style>
