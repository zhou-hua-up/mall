import {debounce} from 'common/utils'
// 通过混入将返回顶部按钮从组件中抽离出来，哪个组件需要使用就直接混入使用
// 数据组件方法都可以混入
import backTop from "components/content/backTop/BackTop";

export const imageListener = {
  // 下面这些以及生命周期函数都可以混入
  components: {},
  methods: {},
  data() {
    return {}
  },
  created() {

  },
  mounted() {
    // 这个防抖动函数放在外面 否则每次加载会重新初始化这个防抖函数
    // const refresh = debounce(this.$refs.scroll.refreshScroll, 500)
    // this.$bus.$on("homeImageLoad", () => {
    //    refresh();
    // });
  //   this.$bus.$on("detailImageLoad", () => {
  //     refresh();
  //  });
  },
}

export const backTopMIX = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    backTop
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 400);
    },
  }
}