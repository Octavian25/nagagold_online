(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1122:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),s=t(16),n=t(11),i=t(7),p=t(9),d=t(27),l=t.n(d),c=t(5),u=t(6),m=t(14),h=t(3),b=t(18),g=t(291),E=t(292),k=t(41),G=t(4);var D=(e,a)=>{const t={};return e.kode_group||(t.kode_group="Kode Group Tidak Boleh Kosong"),e.nama_group||(t.nama_group="Nama Group Tidak Boleh Kosong"),e.harga||(t.harga="Harga Tidak Boleh Kosong"),e.persentase||(t.persentase="Persentase Tidak Boleh Kosong"),t},_=t(15),O=t.n(_);const f=Object(k.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class j extends o.Component{constructor(e){super(e),this.state={aktif:!1}}componentDidMount(){setTimeout(()=>{this.props.isEdit?document.getElementById("nama_group").focus():document.getElementById("kode_group").focus()},100)}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},r.a.createElement(g.a,{tabIndex:"1",id:"kode_group",name:"kode_group",component:G.e,type:"text",label:" Kode Group",readOnly:this.props.isEdit,placeholder:"Masukan Kode Group"}),r.a.createElement(g.a,{tabIndex:"2",id:"nama_group",name:"nama_group",component:G.e,type:"text",label:" Nama Group",placeholder:"Masukan Nama Group"}),r.a.createElement(g.a,Object.assign({tabIndex:"3",name:"harga",component:G.e,type:"text",label:"Harga"},f,{placeholder:"Masukan Harga"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement("button",{className:"btn btn-danger",onClick:()=>this.props.dispatch(Object(i.wb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",r.a.createElement("button",{tabIndex:"5",className:this.state.aktif?"btn btn-success":"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?r.a.createElement(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}j=Object(E.a)({form:"ModalFormDataGroup",enableReinitialize:!0,validate:D})(j);var x=Object(p.b)(e=>{if(null!==e.datamaster.ShowModalGroup)return{initialValues:{kode_group:e.datamaster.ShowModalGroup.kode_group,nama_group:e.datamaster.ShowModalGroup.nama_group,harga:e.datamaster.ShowModalGroup.harga,persentase:e.datamaster.ShowModalGroup.persentase}}},null)(j),M=t(40);const S=(e,a)=>{l.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Group "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{t.isConfirmed&&Object(u.b)("group/delete/by-kode-group/"+e,{data:{kode_group:e}}).then(()=>{Object(c.d)("Data Berhasil Di Hapus").then(()=>a(Object(i.t)()))}).catch(e=>{Object(c.e)("error",e.response.data)})})};a.default=Object(p.b)(e=>({DataGroup:e.datamaster.GetDataGroup,hideModal:e.datamaster.modalDialog}),null)(class extends r.a.Component{constructor(e){super(e),this.state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kode_group",text:"Kode Group",sort:!0},{dataField:"nama_group",text:"Nama Group"},{dataField:"harga",text:"Harga",formatter:e=>r.a.createElement("span",null,parseFloat(e).toLocaleString("ID-id"))},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>{let t={kode_group:a.kode_group,nama_group:a.nama_group,persentase:a.persentase.toFixed(1),harga:a.harga};return r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:()=>this.formEditDataGroup(t),className:"btn btn-primary mr-3"},r.a.createElement("i",{className:"fa fa-edit"})),r.a.createElement("button",{onClick:()=>S(a.kode_group,this.props.dispatch),className:"btn btn-danger"},r.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(i.t)())}handleSubmit(e){this.setState({isLoading:!0});let a={nama_group:e.nama_group,harga:e.harga,persentase:0},t={kode_group:e.kode_group,nama_group:e.nama_group,harga:e.harga,persentase:0};this.state.isEdit?Object(u.g)("group/edit/by-kode-group/"+e.kode_group,a).then(()=>{this.props.dispatch(Object(i.wb)())}).then(()=>{Object(c.e)("success","Data Berhasil Diupdate")}).then(()=>{this.props.dispatch(Object(i.t)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(m.d)("ModalFormDataGroup"))}).catch(e=>this.ErrorHandling(e)):Object(u.e)("group/add",t).then(()=>{this.props.dispatch(Object(i.wb)())}).then(()=>{Object(c.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(i.t)())}).then(()=>{this.props.dispatch(Object(m.d)("ModalFormDataGroup"))}).then(()=>{this.setState({isLoading:!1})}).catch(a=>Object(h.a)(a,"group/reactive/by-kode-group/",e.kode_group,t,this.props.dispatch,Object(i.t)(),Object(i.wb)(),"ModalFormDataGroup").then(()=>{this.setState({isLoading:!1})}))}formEditDataGroup(e){this.props.dispatch(Object(i.xb)()),this.props.dispatch(Object(i.T)(e)),this.setState({isEdit:!0})}ShowModalGroup(){this.props.dispatch(Object(i.xb)()),this.props.dispatch(Object(i.T)(!1)),this.setState({isEdit:!1})}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(s.b,{to:"#"},"Data Master")),r.a.createElement("li",{className:"breadcrumb-item active"},"Master Group")),r.a.createElement("h1",{className:"page-header"},"Master Group "),r.a.createElement(n.a,null,r.a.createElement(n.c,null,"Master Group"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{keyField:"kode_group",tambahData:!0,handleClick:()=>this.ShowModalGroup(),exportCsv:!0,data:this.props.DataGroup,columns:this.state.columns,empty:this.props.DataGroup,textEmpty:"Data Group Kosong"})),r.a.createElement("br",null),r.a.createElement(M.a,{size:"P",title:this.state.isEdit?"Edit Data Data Group":"Tambah Data Data Group",content:r.a.createElement(x,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:e=>this.handleSubmit(e)})})))}})}}]);
//# sourceMappingURL=30.7480da3a.chunk.js.map