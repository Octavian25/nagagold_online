(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1129:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(16),o=a(11),d=a(7),r=a(9),l=a(27),p=a.n(l),c=a(5),m=a(14),h=a(6),u=a(3),b=a(18),g=a(40),k=a(291),E=a(292),_=a(4),j=a(723),f=a(15),J=a.n(f);class D extends s.Component{constructor(e){super(e),this.state={listgroup:[],aktif:!1}}componentDidMount(){Object(h.c)("group/get/all").then(e=>{this.setState({listgroup:e.data})}).catch(e=>{console.log(e)}),setTimeout(()=>{this.props.isEdit?document.getElementById("nama_dept").focus():document.getElementById("kode_group").focus()},100)}setIndex(){document.getElementById("kode_dept").focus()}render(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},i.a.createElement("div",{className:"form-group"},i.a.createElement(k.a,{onChange:()=>this.setIndex(),tabIndex:"1",id:"kode_group",label:"Kode Group",name:"kode_group",options:this.state.listgroup.filter(e=>void 0!==e.kode_group).map(e=>{return{value:e.kode_group,name:e.kode_group+" - "+e.nama_group}}),value:this.props.kode_group,disabled:this.props.isEdit,placeholder:"Silahkan Pilih Kode Group",component:_.f})),i.a.createElement(k.a,{id:"kode_dept",tabIndex:"2",name:"kode_dept",component:_.e,type:"text",label:"Kode Jenis",readOnly:this.props.isEdit,placeholder:"Masukan Kode Jenis"}),i.a.createElement(k.a,{tabIndex:"3",id:"nama_dept",name:"nama_dept",component:_.e,type:"text",label:"Nama Jenis",onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan Nama Jenis"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 text-right"},i.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(d.wb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",i.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?i.a.createElement(J.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}D=Object(E.a)({form:"ModalDataJenis",enableReinitialize:!0,validate:j.a})(D);var O=Object(r.b)(e=>{if(null!==e.datamaster.ShowModalJenis)return{initialValues:{kode_group:e.datamaster.ShowModalJenis.kode_group,kode_dept:e.datamaster.ShowModalJenis.kode_dept,nama_dept:e.datamaster.ShowModalJenis.nama_dept}}},null)(D);const x=(e,t)=>{p.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Jenis "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(a=>{a.isConfirmed&&Object(h.b)("jenis/delete/by-kode-jenis/"+e,{data:{kode_group:e}}).then(()=>{Object(c.d)("Data Berhasil Di Hapus").then(()=>t(Object(d.lb)()))}).catch(e=>{Object(c.e)("error",e.response.data)})})};t.default=Object(r.b)(e=>({DataJenis:e.datamaster.getDataJenis,hideModal:e.datamaster.modalDialog}),null)(class extends i.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_group",text:"Kode Group"},{dataField:"kode_dept",text:"Kode Dept ",sort:!0},{dataField:"nama_dept",text:"Nama Dept"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>{let a={kode_dept:t.kode_dept,nama_dept:t.nama_dept,kode_group:t.kode_group};return i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{onClick:()=>this.fomrEditDataJenis(a),className:"btn btn-primary mr-3"}," ",i.a.createElement("i",{className:"fa fa-edit"})),i.a.createElement("button",{onClick:()=>x(t.kode_dept,this.props.dispatch),className:"btn btn-danger"},i.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(d.lb)())}handleSubmit(e){if(this.setState({isLoading:!0}),void 0===e.kode_dept)return p.a.fire({title:"Oopss!! ",text:"Kode Group Harus Diisi !!!",icon:"info"}),this.setState({isLoading:!1}),!1;let t={nama_dept:e.nama_dept},a={kode_dept:e.kode_dept,nama_dept:e.nama_dept,kode_group:e.kode_group};this.state.isEdit?Object(h.g)("jenis/edit/by-kode-jenis/"+e.kode_dept,t).then(()=>{this.props.dispatch(Object(d.wb)())}).then(()=>{Object(c.e)("success","Data Berhasil Diedit")}).then(()=>{this.props.dispatch(Object(d.lb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(m.d)("ModalDataJenis"))}).catch(e=>this.ErrorHandling(e)):Object(h.e)("jenis/add",a).then(()=>{this.props.dispatch(Object(d.wb)())}).then(()=>{Object(c.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(d.lb)())}).then(()=>{this.props.dispatch(Object(m.d)("ModalDataJenis"))}).then(()=>{this.setState({isLoading:!1})}).catch(t=>Object(u.a)(t,"jenis/reactive/by-kode-jenis/",e.kode_dept,a,this.props.dispatch,Object(d.lb)(),Object(d.wb)(),"ModalDataJenis").then(()=>{this.setState({isLoading:!1})}))}fomrEditDataJenis(e){this.props.dispatch(Object(d.xb)()),this.props.dispatch(Object(d.V)(e)),this.setState({isEdit:!0})}ShowModalJenis(){this.props.dispatch(Object(d.xb)()),this.props.dispatch(Object(d.V)(!1)),this.setState({isEdit:!1})}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(n.b,{to:"#"},"Data Master")),i.a.createElement("li",{className:"breadcrumb-item active"},"Master Jenis")),i.a.createElement("h1",{className:"page-header"},"Master Jenis "),i.a.createElement(o.a,null,i.a.createElement(o.c,null,"Master Jenis"),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement(b.a,{keyField:"kode_dept",tambahData:!0,handleClick:()=>this.ShowModalJenis(),exportCsv:!0,data:this.props.DataJenis,columns:this.state.columns,empty:this.props.DataJenis,textEmpty:"Data Jenis Kosong"})),i.a.createElement("br",null),i.a.createElement(g.a,{size:"P",title:this.state.isEdit?"Edit Data Jenis":"Tambah Data Jenis",content:i.a.createElement(O,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:e=>this.handleSubmit(e)})})))}})},723:function(e,t,a){"use strict";t.a=((e,t)=>{const a={};return e.kode_group||(a.kode_kategori="Kode Kategori Tidak Boleh Kosong"),e.kode_jenis||(a.kode_jenis="Kode Jenis Tidak Boleh Kosong"),e.nama_jenis||(a.nama_jenis="Nama Jenis Tidak Boleh Kosong"),a})}}]);
//# sourceMappingURL=19.e03de9bd.chunk.js.map