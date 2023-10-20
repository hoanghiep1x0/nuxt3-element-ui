<style lang="css">
body {
  color: #2f2f3b;
  font-family: Rubik, sans-serif;
  font-size: 14px;
  overflow-x: hidden
}
</style>
<template>
  <div title1="Hide Menu On Scroll">
    <div class="container-fluid">
      <div class="page-title">
        <div class="row">
          <div class="col-6 d-flex">
            <h3>Hide Menu On Scroll</h3>
          </div>
          <div class="col-6">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/dashboard/default" class=""><svg class="stroke-icon">
                    <use href="https://cuba-nuxt.vercel.app/_nuxt/icon-sprite.76b09267.svg#stroke-home"></use>
                  </svg></a></li>
              <li class="breadcrumb-item">Page Layout</li>
              <li class="breadcrumb-item active">Hide Menu On Scroll</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="col-sm-12 col-xl-6">
        <div class="card">
          <div class="card-header">
            <h3>Basic Card</h3>
            <settingPage/>
          </div>
          <div class="card-body">
            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
           
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6">
        <div class="card b-r-0">
          <div class="card-header">
            <h3>Flat Card</h3>
           <settingPage/>
          </div>
          <div class="card-body">
            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                </div>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6">
        <div class="card shadow-none border">
          <div class="card-header">
            <h3>Without shadow Card</h3>
          </div>
          <div class="card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6">
        <div class="card">
          <div class="card-header">
            <h3><i class="icofont icofont-truck me-2"></i> Icon in Heading</h3>
          </div>
          <div class="card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6">
        <div class="card height-equal">
          <div class="card-header">
            <h3>Card sub Title</h3><span>Using the <a href="javascript:void(0)">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
          </div>
          <div class="card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6">
        <div class="card height-equal">
          <div class="card-header">
            <h3>Card With Footer</h3>
          </div>
          <div class="card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the the industry's standard dummy text ever.</p>
          </div>
          <div class="card-footer">
            <h4 class="mb-0">Card Footer</h4>
          </div>
        </div>
      </div>
      
  </div>
</template>
<script lang="tsx" setup>

definePageMeta({
  layout: "default",
  auth: {
    unauthenticatedOnly: true,
    // login to
    navigateAuthenticatedTo: '/',
  },
})

// import TableData from '@/components/tables/table.vue';

import type { FunctionalComponent } from 'vue'
import type { CheckboxValueType, Column } from 'element-plus'


const config = useRuntimeConfig();
const { apiTruyen, apiAuth } = config.public;
const { data: cates, error: errorCate } = await useFetch(apiTruyen + '/cate/all');

type SelectionCellProps = {
  value: boolean
  intermediate?: boolean
  onChange: (value: CheckboxValueType) => void
}

const SelectionCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  intermediate = false,
  onChange,
}) => {
  return (
    <ElCheckbox
      onChange={onChange}
      modelValue={value}
      indeterminate={intermediate}
    />
  )
}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from([
    // {
    //   key: "id",
    //   dataKey: "id",
    //   title: "id",
    //   width: 350
    // },
    {
      key: 'name',
      dataKey: 'name',
      title: 'name',
      width: 350
    },
    {
      key: 'slug',
      dataKey: 'slug',
      title: 'Slug thể loại',
      width: 300
    },
    {
      key: 'operations',
      title: 'Operations',
      cellRenderer: () => (
        <>
          <ElButton size="small">Edit</ElButton>

        </>
      ),
      width: 150,
      align: 'center',
    }
  ]).map((_item, columnIndex) => ({
    ...props,
    key: _item.key,
    dataKey: _item.dataKey,
    title: _item.title,
    width: _item.width,
  }))

const columns: Column<any>[] = generateColumns(10)
columns.unshift({
  key: 'selection',
  width: 50,
  cellRenderer: ({ rowData }) => {
    const onChange = (value: CheckboxValueType) => (rowData.checked = value)
    return <SelectionCell value={rowData.checked} onChange={onChange} />
  },

  headerCellRenderer: () => {
    const _data = unref(data)
    const onChange = (value: CheckboxValueType) =>
    (data.value = _data.map((row) => {
      row.checked = value
      return row
    }))
    const allSelected = _data.every((row) => row.checked)
    const containsChecked = _data.some((row) => row.checked)

    return (
      <SelectionCell
        value={allSelected}
        intermediate={containsChecked && !allSelected}
        onChange={onChange}
      />
    )
  },
})

const data = computed(() => {
  return cates.value.map((item, rowIndex) => {
    const rowData = {
      id: `${rowIndex}`,
      checked: false,
      parentId: null,
    };

    for (const column of columns) {
      rowData[column.dataKey] = item[column.key];
    }

    return rowData;
  });
});
</script>