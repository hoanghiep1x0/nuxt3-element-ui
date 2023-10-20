<template>
        <div id="sidebar-menu">
     
          <ul class="sidebar-links custom-scrollbar" id="myDIV"
          :style="[layoutobject.split(' ').includes('horizontal-wrapper')  ? layout.settings.layout_type=='rtl'? {'margin-right': margin+'px'} : {'margin-left': margin+'px'} :  { margin : '0px'}]"
          >
            <li class="back-btn">
              <router-link to="/">
                <img
                  class="img-fluid"
                  src="../../assets/images/logo/logo-icon.png"
                  alt=""
              /></router-link>
              <div class="mobile-back text-end">
                <span>Back</span
                ><i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
              </div>
            </li>
            <li class="sidebar-main-title">
              <div>
                <h6 class="lan-1">General</h6>
              </div>
            </li>
            <li class="sidebar-list">
              <label class="badge badge-light-primary"></label><a class="sidebar-link sidebar-title" href="javascript:void(0)">
                <svg class="stroke-icon">
                  <use href="@/assets/svg/icon-sprite.svg#stroke-home"></use>
                </svg>
                <svg class="fill-icon">
                  <use href="@/assets/svg/icon-sprite.svg#fill-home"></use>
                </svg>
                <span class="lan-3">Dashboard              </span></a>
            </li>
            <li class="sidebar-list"><a class="sidebar-link sidebar-title" href="https://pixelstrap.freshdesk.com/support/home" target="_blank">
              <svg class="stroke-icon">
                <use href="@/assets/svg/icon-sprite.svg#stroke-social"></use>
              </svg>
              <svg class="fill-icon">
                <use href="@/assets/svg/icon-sprite.svg#fill-social"></use>
              </svg><span>Raise Support</span></a></li>
              <li class="sidebar-list"><a class="sidebar-link sidebar-title" href="#" target="_blank">
                <svg class="stroke-icon">
                  <use href="@/assets/svg/icon-sprite.svg#stroke-form"></use>
                </svg>
                <svg class="fill-icon">
                  <use href="@/assets/svg/icon-sprite.svg#fill-form"></use>
                </svg><span>Documentation                                    </span></a></li>
          </ul>
        </div>
</template>
<script>
  import { mapState } from 'pinia';
import { useLayoutStore } from '~~/store/layout';
import { useMenuStore } from '~~/store/menu';
  import { layoutClasses } from '../../constants/layout';
import { useWindowScroll } from '@vueuse/core'

  
  export default {
    name: 'Navmenu',
    data() {
      return {
        layoutobj:{},
        scrolled: useWindowScroll().x,
        rolled:useWindowScroll().y
      };
    },
    computed: {
      ...mapState(useMenuStore,{
        menuItems: 'data',
       
        activeoverlay: 'activeoverlay',
        togglesidebar: 'togglesidebar',
        width: 'width',
        height: 'height',
        margin: 'margin',
        menuWidth: 'menuWidth',
      
      }),
      ...mapState(useLayoutStore,{
        layout: 'layout',
        sidebar: 'sidebarType',
      }),
      layoutobject: {	
        get: function () {	
          return JSON.parse(JSON.stringify(layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout)))[this.layout.settings.layout];	
        },	
        set: function () {	
          this.layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);	
          this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[this.layout.settings.layout];	
          return this.layoutobj;	
        }	
      }
    },
    watch: {
      scrolled(){
        this.handleResize()
      },
      rolled(){
        this.handleScroll()
      },
      width() {
       
        // window.addEventListener('resize', this.handleResize);
        this.handleResize();
        // window.addEventListener('scroll',this.handleScroll);
        this.handleScroll(); 
        if (useWindowScroll().x< 992) {
          const newlayout = JSON.parse(JSON.stringify(this.layoutobject).replace('horizontal-wrapper', 'compact-wrapper'));
          document.querySelector('.page-wrapper').className = 'page-wrapper ' + newlayout;
         useMenuStore().margin = 0;
        } else {
          document.querySelector('.page-wrapper').className = 'page-wrapper ' + this.layoutobject;
        }

        if((useWindowScroll().x< 1199 && this.layout.settings.layout === 'Tokyo') || (useWindowScroll().x < 1199 && this.layout.settings.layout === 'Moscow') || (useWindowScroll().x< 1199 && this.layout.settings.layout === 'Rome')) {
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        }
      }
    },
    created() {
      // window.addEventListener('resize', this.handleResize);
      this.handleResize();
      if (useMenuStore().width < 991) {
        this.layout.settings.layout = 'Dubai';	
        this.margin = 0;
      }
      setTimeout(()=> {
        const elmnt = document.getElementById('myDIV');
       useMenuStore().menuWidth = elmnt.offsetWidth;
       useMenuStore().menuWidth > useWindowScroll().x  ? 
          (useMenuStore().hideRightArrow = false,useMenuStore().hideLeftArrowRTL = false) : 
          (useMenuStore().hideRightArrow = false,useMenuStore().hideLeftArrowRTL = true);
      }, 500);
      this.layoutobject = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);	
      this.layoutobject = JSON.parse(JSON.stringify(this.layoutobject))[this.layout.settings.layout];
    },
    // destroyed() {
    //   if (process.client) {
    //   window.removeEventListener('resize', this.handleResize);
    // }},
    mounted() {   
      this.menuItems.filter(items => {
        if (items.path === this.$route.path)
          // this.$store.dispatch('menu/setActiveRoute', items);
          useMenuStore().setActiveRoute(items)
        if (!items.children) return false;
        items.children.filter(subItems => {
          if (subItems.path === this.$route.path)
            // this.$store.dispatch('menu/setActiveRoute', subItems);
          useMenuStore().setActiveRoute(subItems)

          if (!subItems.children) return false;
          subItems.children.filter(subSubItems => {
            if (subSubItems.path === this.$route.path)
              // this.$store.dispatch('menu/setActiveRoute', subSubItems);
          useMenuStore().setActiveRoute(subSubItems)

          });
        });
      });
    },
    methods: {
      handleScroll() {
        if (process.client) {
        if(useWindowScroll().y > 400){
          if(this.layoutobject.split(' ').pop() === 'material-type' || this.layoutobject.split(' ').pop() ==='advance-layout')
            document.querySelector('.sidebar-main').className = 'sidebar-main hovered';
        }else{
          if(document.getElementById('sidebar-main'))
            document.querySelector('.sidebar-main').className = 'sidebar-main';
        }
      }},
      setNavActive(item) {
        // this.$store.dispatch('menu/setNavActive', item);
        useMenuStore().setNavActive(item)
        
        if(this.layoutobject.split(' ').includes('compact-sidebar') &&  useWindowScroll().x > 991) {
          if(this.menuItems.some(menuItem => menuItem.active === true)) {
           useMenuStore().activeoverlay = true;
          } else {
           useMenuStore().activeoverlay = false;
          }
        }
      },
      hidesecondmenu() {
        if(useWindowScroll().x < 991) {
         useMenuStore().activeoverlay = false,
         useMenuStore().togglesidebar = false;
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        } else if(this.layoutobject.split(' ').includes('compact-sidebar')){
         useMenuStore().activeoverlay = false,
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        }
      },
      handleResize() {
       useMenuStore().width = useWindowScroll().x - 450;
      },
    }
  };
</script>
