(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1131:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(9),l=t(16),i=t(14),c=t(5),m=t(11),o=t(6),d=t(291),h=t(292),p=t(41),u=t(4),g=t(718),b=t(15),k=t.n(b);const E=Object(p.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"id-ID"});class f extends n.Component{constructor(e){super(e),this.state={parametertransaksi:[]}}componentDidMount(){Object(o.c)("paratransaksi/get/all").then(e=>{this.setState({parametertransaksi:e.data})}).catch(e=>{console.log(e)})}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(d.a,{name:"kategori",component:u.f,options:this.state.parametertransaksi.map(e=>{return{value:e.kode_transaksi,name:e.kode_transaksi}}),label:"Kategori",placeholder:"Masukan Kategori"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(d.a,Object.assign({name:"jumlah",component:u.e,type:"telp",label:"Jumlah",placeholder:"Masukan Jumlah"},E))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(d.a,{name:"keterangan",component:u.e,type:"text",label:"Keterangan",placeholder:"Masukan Keterangan"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))),this.props.isLoading?r.a.createElement(k.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}f=Object(h.a)({form:"HeadTambahKas",enableReinitialize:!0,validate:g.a})(f);var K=Object(s.b)()(f);a.default=Object(s.b)()(class extends n.Component{constructor(e){super(e),this.state={isLoading:!1}}handleSubmit(e){this.setState({isLoading:!0});let a={kategori:e.kategori,jumlah_rp:e.jumlah,deskripsi:e.keterangan};Object(o.e)("cash/in",a).then(()=>{Object(c.d)("Data Berhasil Disimpan")}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(i.d)("HeadTambahKas"))}).catch(e=>this.ErrorHandling(e))}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"#"},"Transaksi Kas")),r.a.createElement("li",{className:"breadcrumb-item active"},"Tambah Uang Kas")),r.a.createElement("h1",{className:"page-header"},"Tambah Uang Kas "),r.a.createElement(m.a,null,r.a.createElement(m.c,null,"Tambah Uang Kas"),r.a.createElement(m.b,null,r.a.createElement(K,{isLoading:this.state.isLoading,onSubmit:e=>this.handleSubmit(e)}))))}})},718:function(e,a,t){"use strict";a.a=(e=>{const a={};return e.kategori||(a.kategori="Kategori Tidak Boleh Kosong"),e.jumlah||(a.jumlah="Jumlah Tidak Boleh Kosong"),e.keterangan||(a.keterangan="Keterangan Tidak Boleh Kosong"),a})}}]);
//# sourceMappingURL=16.06478e46.chunk.js.map