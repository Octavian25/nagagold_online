(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1118:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),n=t(16),i=t(11),o=t(7),d=t(9),r=t(27),c=t.n(r),m=t(5),h=t(14),p=t(6),b=t(3),u=t(19),S=t(292),E=t(293),k=t(4);var g=(e,a)=>{const t={};return e.kode_sales||(t.kode_sales="Kode Sales Tidak Boleh Kosong"),e.nama_sales||(t.nama_sales="Nama Sales Tidak Boleh Kosong"),t},_=t(15),f=t.n(_);class O extends s.Component{constructor(...e){super(...e),this.state={aktif:!1}}componentDidMount(){setTimeout(()=>{this.props.isEdit?document.getElementById("nama_sales").focus():document.getElementById("kode_sales").focus()},100)}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},l.a.createElement(S.a,{tabIndex:"1",id:"kode_sales",name:"kode_sales",component:k.e,type:"text",label:"Kode Sales",placeholder:"Masukan Kode Sales",readOnly:this.props.isEdit}),l.a.createElement(S.a,{id:"nama_sales",tabIndex:"2",name:"nama_sales",component:k.e,type:"text",label:"Nama Sales",onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan Nama Sales"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-right"},l.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(o.vb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",l.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?l.a.createElement(f.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}O=Object(E.a)({form:"ModalDataSales",enableReinitialize:!0,validate:g})(O);var j=Object(d.b)(e=>{if(null!==e.datamaster.ShowModalSales)return{initialValues:{kode_sales:e.datamaster.ShowModalSales.kode_sales,nama_sales:e.datamaster.ShowModalSales.nama_sales}}},null)(O),D=t(40);const w=(e,a)=>{c.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Sales "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{t.isConfirmed&&Object(p.b)("sales/delete/by-kode-sales/"+e,{data:{kode_sales:e}}).then(()=>{Object(m.d)("Data Berhasil Di Hapus").then(()=>a(Object(o.nb)()))}).catch(e=>{Object(m.e)("error",e.response.data)})})};a.default=Object(d.b)(e=>({DataSales:e.datamaster.getDataSales,hideModal:e.datamaster.modalDialog}),null)(class extends l.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_sales",text:"Kode Sales",sort:!0},{dataField:"nama_sales",text:"Nama Sales"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>{let t={kode_sales:a.kode_sales,nama_sales:a.nama_sales};return l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{onClick:()=>this.formEditSales(t),className:"btn btn-primary mr-3"},l.a.createElement("i",{className:"fa fa-edit"})),l.a.createElement("button",{onClick:()=>w(a.kode_sales,this.props.dispatch),className:"btn btn-danger"},l.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(o.nb)())}handleSubmit(e){this.setState({isLoading:!0});let a={nama_sales:e.nama_sales},t={kode_sales:e.kode_sales,nama_sales:e.nama_sales};this.state.isEdit?Object(p.g)("sales/edit/by-kode-sales/"+e.kode_sales,a).then(()=>{this.props.dispatch(Object(o.vb)())}).then(()=>{Object(m.e)("success","Data Berhasil Diedit")}).then(()=>{this.props.dispatch(Object(o.nb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(h.d)("ModalDataSales"))}).catch(e=>this.ErrorHandling(e)):Object(p.e)("sales/add",t).then(()=>{this.props.dispatch(Object(o.vb)())}).then(()=>{Object(m.e)("success","Data Berhasil Simpan")}).then(()=>{this.props.dispatch(Object(o.nb)())}).then(()=>{this.props.dispatch(Object(h.d)("ModalDataSales"))}).then(()=>{this.setState({isLoading:!1})}).catch(a=>Object(b.a)(a,"sales/reactive/by-kode-sales/",e.kode_sales,t,this.props.dispatch,Object(o.nb)(),Object(o.vb)(),"ModalDataSales").then(()=>{this.setState({isLoading:!1})}))}formEditSales(e){this.props.dispatch(Object(o.wb)()),this.props.dispatch(Object(o.db)(e)),this.setState({isEdit:!0})}showModalSales(){this.props.dispatch(Object(o.wb)()),this.props.dispatch(Object(o.db)(!1)),this.setState({isEdit:!1})}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(n.b,{to:"#"},"Data Master")),l.a.createElement("li",{className:"breadcrumb-item active"},"Master Sales")),l.a.createElement("h1",{className:"page-header"},"Master Sales "),l.a.createElement(i.a,null,l.a.createElement(i.c,null,"Master Sales"),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement(u.a,{keyField:"kode_sales",tambahData:!0,handleClick:()=>this.showModalSales(),exportCsv:!0,data:this.props.DataSales,columns:this.state.columns,empty:this.props.DataSales,textEmpty:"Data Sales Kosong"})),l.a.createElement("br",null),l.a.createElement(D.a,{title:this.state.isEdit?"Edit Data Sales":"Tambah Data Sales",size:"P",content:l.a.createElement(j,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:e=>this.handleSubmit(e)})})))}})}}]);
//# sourceMappingURL=36.80af1a0a.chunk.js.map