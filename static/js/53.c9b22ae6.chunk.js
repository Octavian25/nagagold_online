(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1092:function(a,e,t){"use strict";t.r(e);var n=t(0),s=t.n(n),l=t(16),r=t(3),i=t(5),o=t(11),c=t(6),d=t(22);const u=Object(n.lazy)(()=>t.e(14).then(t.bind(null,1086)));e.default=class extends n.Component{constructor(a){super(a),this.state={isLoading:!1,LaporanPenjualanSales:[],export:!1},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){let a=JSON.parse(Object(r.i)("userdata"));this.setState({username:a.user_id})}handleSubmit(a){this.setState({isLoading:!0});let e={tgl_awal:Object(r.d)(d(new Date(a.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(r.d)(d(new Date(a.tgl_akhir)).format("YYYY-MM-DD")),kode_sales:a.kode_sales};Object(c.e)("penjualan/get/reportsales",e).then(a=>{0===a.data.length?(Object(i.e)("info","Data Yang Di Cari Tidak Ada !!!"),this.setState({isLoading:!1,export:!1})):(Object(r.j)("tgl_laporan",JSON.stringify(e)),Object(i.e)("success","Laporan Penjualan Sales Tersedia"),this.setState({LaporanPenjualanSales:a.data,isLoading:!1,export:!0}))}).catch(a=>{this.errorHandling(a)})}errorHandling(a){this.setState({isLoading:!1,export:!1}),Object(i.b)("Data Yang Di Cari Tidak Ada")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(l.b,{to:"#"},"Laporan")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penjualan Sales")),s.a.createElement("h1",{className:"page-header"},"Laporan Penjualan Sales "),s.a.createElement(o.a,null,s.a.createElement(o.c,null,"Laporan Penjualan Sales"),s.a.createElement(o.b,null,s.a.createElement(u,{export:this.state.export,isLoading:this.state.isLoading,LaporanPenjualanSales:this.state.LaporanPenjualanSales,onSubmit:a=>this.handleSubmit(a)}))))}}}}]);
//# sourceMappingURL=53.c9b22ae6.chunk.js.map