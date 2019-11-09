<template>
  <div class="shop-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="140px"
      class="demo-ruleForm upForm"
      enctype="multipart/form-data"
    >
      <el-form-item label="统一信用编码" prop="id">
        <el-input v-model="ruleForm.id" name="id"></el-input>
      </el-form-item>
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name" name="name"></el-input>
      </el-form-item>

      <el-form-item label="详细地址" prop="adress">
        <el-input v-model="ruleForm.adress" placeholder="请输入地址" name="name"></el-input>
      </el-form-item>

      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone" name="name"></el-input>
      </el-form-item>

      <el-form-item label="店铺简介" prop="info">
        <el-input v-model="ruleForm.info" name="name"></el-input>
      </el-form-item>

      <el-form-item label="店铺标语" prop="slogan">
        <el-input v-model="ruleForm.slogan" name="name"></el-input>
      </el-form-item>

      <el-form-item label="店铺分类">
        <el-cascader v-model="value" :options="options" nme='category'></el-cascader>
      </el-form-item>

      <el-form-item label="店铺特点">
        <ul class="shop-tedian">
          <li v-for="item in lists" :key="item.id"  >
            <span  :class="{ 'actived':item.flag}">
              {{ item.text }}
              <el-switch v-model="item.flag" active-color="#20A0FF" inactive-color="#BFCBD9"
              
                ></el-switch>
            </span>
          </li>
        </ul>
      </el-form-item>

      <el-form-item label="配送费">
        <template>
          <el-input-number v-model="delivery" :precision="2" :step="0.1" :max="10" name="delivery"></el-input-number>
        </template>
      </el-form-item>

      <el-form-item label="起送价">
        <template>
          <el-input-number v-model="run" :step="2" name="run"></el-input-number>
        </template>
      </el-form-item>

    <el-form-item label="营业时间">
      <el-time-select
        placeholder="起始时间"
        name="startTime"
        v-model="startTime"
        :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
      ></el-time-select>
      <el-time-select
        placeholder="结束时间"
        name="endTime"
        v-model="endTime"
        :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"
      ></el-time-select>
    </el-form-item>

    <el-form-item label="上传店铺头像">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </el-form-item>

    <el-form-item label="上传营业执照">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="YingyeAvatarSuccess"
            >
            <img v-if="yingyeUrl" :src="yingyeUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </el-form-item>

    <el-form-item label="上传餐饮服务许可证">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="LisAvatarSuccess"
            >
            <img v-if="lisUrl" :src="lisUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      imageUrl:'',
      lisUrl: '',
      yingyeUrl: '',
      lists: [
        {
          id: 1,
          text: "品牌保证",
          flag: false
        },
        {
          id: 2,
          text: "蜂鸟专送",
          flag: false
        },
        {
          id: 3,
          text: "新开店铺",
          flag: false
        },
        {
          id: 4,
          text: "外卖保",
          flag: false
        },
        {
          id: 5,
          text: "准时达",
          flag: false
        },
        {
          id: 6,
          text: "开发票",
          flag: false
        }
      ],
      startTime: '',
      endTime: '',
      delivery : "1", // 配送费
      run: "5", // 起送价
      ruleForm: {
        id:'',
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        adress: [
          { required: true, message: "请输入店铺地址", trigger: "blur" },
          { min: 3, max: 5, message: "", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          { min: 3, max: 5, message: "", trigger: "blur" }
        ],
        info: [
          { required: true, message: "请输入店铺简介", trigger: "blur" },
          { min: 3, max: 5, message: "", trigger: "blur" }
        ],
        slogan: [
          { required: true, message: "请输入店铺标语", trigger: "blur" },
          { min: 3, max: 5, message: "", trigger: "blur" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      value: '',
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ]
    };
  },
  methods: {
    ...mapActions(['add']),
    submitForm() {
      let form = new FormData($('.upForm')[0])
      form.append('category',this.value )
      var featureFlag = {}
      this.lists.map( (item,index ) => {
        featureFlag['flag_'+ index ] = item.flag
      })
      form.append('feature', JSON.stringify(featureFlag))
      form.append('imageUrl',this.imageUrl)
      form.append('yingyeUrl',this.yingyeUrl)
      form.append('lisUrl',this.lisUrl)
      var _this = this 
      $.ajax({
        url: 'http://localhost:3000/shop',
        type: 'POST',
        cache: false, //不必须
        data: form,
        processData: false,//必须
        contentType: false,//必须
        success: function(data) {
          const result = JSON.parse( data )
          console.log("兵哥: submitForm -> result", result)
          switch ( result.status ) {
            case 0:
              _this.$message({
                showClose: true,
                message: '店铺已经存在，请您确认过之后再次添加',
                type: 'warning'
              });
              break;
            case 2:
              _this.$message({
                showClose: true,
                message: '添加成功，即将自动条状列表页面',
                type: 'success',
                duration: 1000
              });
              setTimeout(() => {
                 _this.$message.close()
                 _this.$router.push('/shop')
              },1000)
              break;
          
            default:
              break;
          }
        }
      })
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
     YingyeAvatarSuccess(res, file) {
        this.yingyeUrl = URL.createObjectURL(file.raw);
      },
     LisAvatarSuccess(res, file) {
        this.lisUrl = URL.createObjectURL(file.raw);
      },

  },
  mounted() {
  }
};
</script>

<style lang="stylus" scoped>
.shop-tedian {
  display: flex;
  flex-wrap: wrap;
  width: 340px;

  li {
    display: flex;

    span {
      margin-right: 10px;
    }
  }
}
span
  &.actived
    color #20A0FF
    font-weight bold
.el-input
  width 400px
</style>