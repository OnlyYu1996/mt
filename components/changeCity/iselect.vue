<template>
  <div class="m-iselect">
    <span class="name">按省份选择：</span>
    <el-select v-model="pvalue" placeholder="省份" class="select">
      <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-select v-model="cvalue" placeholder="城市" :disabled="!city.length" class="select">
      <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.label"></el-option>
    </el-select>
    <span class="name rightSpan">直接搜索：</span>
    <el-autocomplete
      class="select fetchSelect"
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      province: [],
      pvalue: "",
      cvalue: "",
      // 一个省的城市列表
      city: [],
      // 全国的城市列表
      cities: [],
      input: ""
    };
  },
  watch: {
    pvalue: async function(newValue) {
      let self = this;
      let {
        status,
        data: { city }
      } = await self.$axios.get(`/geo/province/${newValue}`);
      if (status === 200) {
        self.city = city.map(item => {
          return {
            value: item.id,
            label: item.name
          };
        });
        self.cvalue = "";
      }
    },
    cvalue(val) {
      let filterValue = this.province.filter(item => {
        return item.value === this.pvalue;
      })[0];
      let position = {
        province: filterValue.label
      };
      if (val === "市辖区") {
        position.city = filterValue.label.replace('市','');
        sessionStorage.setItem("position", JSON.stringify(position));
        location.href = "/";
      } else {
        position.city = val.replace('市','');
        sessionStorage.setItem("position", JSON.stringify(position));
        location.href = "/";
      }
    }
  },
  methods: {
    querySearchAsync: _.debounce(async function(query, cb) {
      let self = this;
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.indexOf(query) > -1));
      } else {
        let {
          status,
          data: { city }
        } = await self.$axios.get("geo/city");
        if (status === 200) {
          self.cities = city.map(item => {
            return { value: item.name, id: item.id, province: item.province };
          });
          cb(self.cities.filter(item => item.value.indexOf(query) > -1));
        } else {
          cb([]);
        }
      }
    }, 200),
    handleSelect(val) {
      let self = this;
      let position = {
        city: val.value.replace('市',''),
        province: val.province
      };
      sessionStorage.setItem("position", JSON.stringify(position));
      location.href = "/";
    }
  },
  mounted: async function() {
    let {
      status,
      data: { province }
    } = await this.$axios.get("/geo/province");
    if (status === 200) {
      this.province = province.map(item => {
        return {
          value: item.id,
          label: item.name
        };
      });
    }
  }
};
</script>
<style lang='less' scoped>
.m-iselect {
  .name {
    vertical-align: middle;
    font-size: 16px;
    color: #333;
    font-weight: 500;
    display: inline-block;
  }
  .rightSpan {
    margin-left: 40px;
  }
  .select {
    padding: 10px 8px 10px 10px;
    width: 134px;
  }
  .fetchSelect {
    width: 180px;
  }
}
</style>