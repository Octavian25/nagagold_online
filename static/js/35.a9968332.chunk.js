(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1110:function(a,t,e){"use strict";e.r(t);var i=e(0),n=e.n(i),s=e(16),o=e(11),r=e(7),d=e(9),c=e(27),l=e.n(c),b=e(5),h=e(6),m=e(14),p=e(3),g=e(18),u=e(40),k=e(291),E=e(292),B=e(4);var K=(a,t)=>{const e={};return a.kondisi_barang||(e.kondisi_barang="Kondisi Barang Tidak Boleh Kosong"),e},O=e(15),f=e.n(O);class j extends i.Component{constructor(...a){super(...a),this.state={aktif:!1}}componentDidMount(){setTimeout(()=>{document.getElementById("kondisi_barang").focus()},100)}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement("input",{name:"kondisi_barang_lama",type:"hidden"}),n.a.createElement(k.a,{tabIndex:"1",id:"kondisi_barang",name:"kondisi_barang",component:B.e,type:"text",label:"Kode Kondisi Barang",onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan Kode Kondisi Barang"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 text-right"},n.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(r.wb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",n.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?n.a.createElement(f.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}j=Object(E.a)({form:"ModalKondisiBarang",enableReinitialize:!0,validate:K})(j);var _=Object(d.b)(a=>{if(null!==a.datamaster.ShowModalKondisiBarang)return{initialValues:{kondisi_barang_lama:a.datamaster.ShowModalKondisiBarang.kondisi_barang,kondisi_barang:a.datamaster.ShowModalKondisiBarang.kondisi_barang}}},null)(j);const w=(a,t)=>{l.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Kondisi Barang "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(h.b)("parakondisi/delete/by-kode-kondisi/"+a,{}).then(()=>{Object(b.d)("Data Berhasil Di Hapus").then(()=>t(Object(r.nb)()))})}).catch(a=>{Object(b.e)("error",a.response.data)})};t.default=Object(d.b)(a=>({DataKondisiBarang:a.datamaster.getDataKondisiBarang,hideModal:a.datamaster.modalDialog}),null)(class extends n.a.Component{constructor(a){super(a),this.state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kondisi_barang",text:"Kode Kondisi Barang",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>{let e={kondisi_barang:t.kondisi_barang};return n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{onClick:()=>this.formEditKondisiBarang(e),className:"btn btn-primary mr-3"},n.a.createElement("i",{className:"fa fa-edit"})),n.a.createElement("button",{onClick:()=>w(t.kondisi_barang,this.props.dispatch),className:"btn btn-danger"},n.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(r.nb)())}handleSubmit(a){this.setState({isLoading:!0});let t={kondisi_barang:a.kondisi_barang},e={kondisi_barang:a.kondisi_barang};this.state.isEdit?Object(h.g)("parakondisi/edit/by-kode-kondisi/"+a.kondisi_barang_lama,t).then(()=>{this.props.dispatch(Object(r.wb)())}).then(()=>Object(b.e)("success","Data Berhasil Diedit")).then(()=>{this.props.dispatch(Object(r.nb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(m.d)("ModalKondisiBarang"))}).catch(a=>this.ErrorHandling(a)):Object(h.e)("parakondisi/add",e).then(()=>{this.props.dispatch(Object(r.wb)())}).then(()=>Object(b.e)("success","Data Berhasil Disimpan")).then(()=>{this.props.dispatch(Object(r.nb)())}).then(()=>{this.props.dispatch(Object(m.d)("ModalKondisiBarang"))}).then(()=>{this.setState({isLoading:!1})}).catch(t=>Object(p.a)(t,"parakondisi/reactive/by-kode-kondisi/",a.kondisi_barang,e,this.props.dispatch,Object(r.nb)(),Object(r.wb)(),"ModalKondisiBarang").then(()=>{this.setState({isLoading:!1})}))}formEditKondisiBarang(a){this.props.dispatch(Object(r.xb)()),this.props.dispatch(Object(r.X)(a)),this.setState({isEdit:!0})}ShowModalKondisiBarang(){this.props.dispatch(Object(r.xb)()),this.props.dispatch(Object(r.X)(!1)),this.setState({isEdit:!1})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(s.b,{to:"#"},"Data Master")),n.a.createElement("li",{className:"breadcrumb-item active"},"Master Kondisi Barang")),n.a.createElement("h1",{className:"page-header"},"Master Kondisi Barang "),n.a.createElement(o.a,null,n.a.createElement(o.c,null,"Master Kondisi Barang"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement(g.a,{keyField:"kondisi_barang",tambahData:!0,handleClick:()=>this.ShowModalKondisiBarang(),exportCsv:!0,data:this.props.DataKondisiBarang,columns:this.state.columns,empty:this.props.DataKondisiBarang,textEmpty:"Data Baki Kosong"})),n.a.createElement("br",null),n.a.createElement(u.a,{size:"P",title:this.state.isEdit?"Edit Data Kondisi Barang":"Tambah Data Kondisi Barang",content:n.a.createElement(_,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:a=>this.handleSubmit(a)})})))}})}}]);
//# sourceMappingURL=35.a9968332.chunk.js.map