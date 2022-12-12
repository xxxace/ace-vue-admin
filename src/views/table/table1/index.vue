<template>
    <a-card class="ace-card">
        <a-table :columns="columns" :data="data" column-resizable :bordered="{ cell: true }"
            :pagination="{ showPageSize: true, defaultPageSize: 20 }"></a-table>
    </a-card>
</template>
  
<script>
import { reactive } from 'vue';

export default {
    setup() {
        const columns = reactive([
            {
                title: 'Name',
                dataIndex: 'name',
                width: 150,
            },
            {
                title: 'Salary',
                dataIndex: 'salary',
                width: 120,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                width: 300,
            },
            {
                title: 'Email',
                dataIndex: 'email',
            },
        ]);

        const makeFakeData = () => {
            const fdata = [];
            for (let i = 0; i < 100; i++) {
                fdata.push({
                    key: i + 1,
                    name: `Ace ${i + 1}`,
                    salary: Math.floor(Math.random() * 100000),
                    address: '32 Park Road, London',
                    email: `ace${i + 1}@example.com`
                })
            }

            return fdata;
        }
        const data = reactive(makeFakeData());

        return {
            columns,
            data
        }
    },
}
</script>