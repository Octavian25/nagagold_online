(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1117:function(a,t,e){"use strict";e.r(t);var n=e(0),s=e.n(n),d=e(15),i=e(11),o=e(7),r=e(9),c=e(26),l=e.n(c),g=e(5),u=e(14),m=e(6),h=e(3),p=e(18),b=e(37),E=e(289),k=e(290),_=e(4),f=e(712);class G extends n.Component{constructor(a){super(a),this.state={listgroup:[],aktif:!1}}componentDidMount(){setTimeout(()=>{this.props.isEdit?document.getElementById("nama_gudang").focus():document.getElementById("kode_gudang").focus()},100)}render(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},s.a.createElement(E.a,{id:"kode_gudang",tabIndex:"1",name:"kode_gudang",component:_.e,type:"text",label:"Kode Gudang",readOnly:this.props.isEdit,placeholder:"Masukan Kode Gudang"}),s.a.createElement(E.a,{tabIndex:"2",id:"nama_gudang",name:"nama_gudang",component:_.e,type:"text",label:"Nama Gudang",onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan Nama Gudang"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 text-right"},s.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(o.vb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",s.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}G=Object(k.a)({form:"ModalMasterGudang",enableReinitialize:!0,validate:f.a})(G);var O=Object(r.b)(a=>{if(null!==a.datamaster.ShowModalGudang)return{initialValues:{kode_gudang:a.datamaster.ShowModalGudang.kode_gudang,nama_gudang:a.datamaster.ShowModalGudang.nama_gudang}}},null)(G);const j=(a,t)=>{l.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Gudang "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(m.b)("gudang/delete/by-kode-gudang/"+a,{data:{kode_gudang:a}}).then(()=>{Object(g.d)("Data Berhasil Di Hapus").then(()=>t(Object(o.ib)()))})})};t.default=Object(r.b)(a=>({DataGudang:a.datamaster.getDataGudang,hideModal:a.datamaster.modalDialog}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_gudang",text:"Kode Gudang ",sort:!0},{dataField:"nama_gudang",text:"Nama Gudang ",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>{let e={kode_gudang:t.kode_gudang,nama_gudang:t.nama_gudang};return s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.formEditDataKategori(e),className:"btn btn-primary mr-3"},s.a.createElement("i",{className:"fa fa-edit"})),s.a.createElement("button",{onClick:()=>j(t.kode_gudang,this.props.dispatch),className:"btn btn-danger"},s.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(o.ib)())}handleSubmit(a){this.setState({isLoading:!0});let t={kode_gudang:a.kode_gudang,nama_gudang:a.nama_gudang},e={kode_gudang:a.kode_gudang,nama_gudang:a.nama_gudang};this.state.isEdit?Object(m.g)("gudang/edit/by-kode-gudang/"+a.kode_gudang,t).then(()=>{this.props.dispatch(Object(o.vb)())}).then(()=>{Object(g.e)("success","Data Berhasil Diedit")}).then(()=>{this.props.dispatch(Object(o.ib)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(u.d)("ModalMasterGudang"))}).catch(a=>this.ErrorHandling(a)):Object(m.e)("gudang/add",e).then(()=>{this.props.dispatch(Object(o.vb)())}).then(()=>{Object(g.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(o.ib)())}).then(()=>{this.props.dispatch(Object(u.d)("ModalMasterGudang"))}).then(()=>{this.setState({isLoading:!1})}).catch(t=>Object(h.a)(t,"gudang/reactive/by-kode-gudang/",a.kode_gudang,e,this.props.dispatch,Object(o.ib)(),Object(o.vb)(),"ModalMasterGudang").then(()=>{this.setState({isLoading:!1})}))}formEditDataKategori(a){this.props.dispatch(Object(o.wb)()),this.props.dispatch(Object(o.U)(a)),this.setState({isEdit:!0})}shoModalGudang(){this.props.dispatch(Object(o.wb)()),this.props.dispatch(Object(o.U)(!1)),this.setState({isEdit:!1})}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(d.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Gudang")),s.a.createElement("h1",{className:"page-header"},"Master Gudang "),s.a.createElement(i.a,null,s.a.createElement(i.c,null,"Master Gudang"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(p.a,{keyField:"kode_gudang",tambahData:!0,handleClick:()=>this.shoModalGudang(),exportCsv:!0,data:this.props.DataGudang,columns:this.state.columns,empty:this.props.DataGudang,textEmpty:"Data Gudang Kosong"})),s.a.createElement("br",null),s.a.createElement(b.a,{size:"P",title:this.state.isEdit?"Edit Data Gudang":"Tambah Data Gudang",content:s.a.createElement(O,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:a=>this.handleSubmit(a)})})))}})},712:function(a,t,e){"use strict";t.a=((a,t)=>{const e={};return a.kode_gudang||(e.kode_gudang="Kode Gudang Tidak Boleh Kosong"),a.nama_gudang||(e.nama_gudang="Nama Gudang Tidak Boleh Kosong"),e})}}]);
//# sourceMappingURL=19.30002eaa.chunk.js.map