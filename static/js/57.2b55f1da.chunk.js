(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1107:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(16),i=t(2),r=t(4),o=t(11),c=t(6),d=t(21);const p=Object(n.lazy)(()=>t.e(16).then(t.bind(null,1096)));a.default=class extends n.Component{constructor(e){super(e),this.state={isLoading:!1,LaporanPenjualanSales:[],export:!1,isDetail:!1,isRekap:!1},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){let e=JSON.parse(Object(i.l)("userdata"));this.setState({username:e.user_id})}handleSubmit(e){this.setState({isLoading:!0,isRekap:"DETAIL"===e.type});let a={tgl_awal:Object(i.e)(d(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(i.e)(d(new Date(e.tgl_akhir)).format("YYYY-MM-DD")),kode_sales:e.kode_sales,type:e.type};Object(c.e)("penjualan/get/reportsales",a).then(e=>{0===e.data.length?(Object(r.e)("info","Data Yang Di Cari Tidak Ada !!!"),this.setState({LaporanPenjualanSales:[],isLoading:!1,export:!1})):(Object(i.m)("tgl_laporan",JSON.stringify(a)),Object(r.e)("success","Laporan Penjualan Sales Tersedia"),this.setState({LaporanPenjualanSales:e.data,isLoading:!1,export:!0}))}).catch(e=>{this.errorHandling(e)})}errorHandling(e){this.setState({isLoading:!1,export:!1}),Object(r.b)("Data Yang Di Cari Tidak Ada")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(l.b,{to:"#"},"Laporan")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penjualan Sales")),s.a.createElement("h1",{className:"page-header"},"Laporan Penjualan Sales "),s.a.createElement(o.a,null,s.a.createElement(o.c,null,"Laporan Penjualan Sales"),s.a.createElement(o.b,null,s.a.createElement(p,{export:this.state.export,isLoading:this.state.isLoading,isRekap:this.state.isRekap,LaporanPenjualanSales:this.state.LaporanPenjualanSales,onSubmit:e=>this.handleSubmit(e)}))))}}}}]);
//# sourceMappingURL=57.2b55f1da.chunk.js.map