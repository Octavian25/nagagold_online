(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1136:function(a,t,e){"use strict";e.r(t);var s=e(0),i=e.n(s),n=e(16),r=e(11),d=e(7),o=e(9),l=e(27),c=e.n(l),h=e(4),p=e(14),m=e(6),b=e(18),u=e(291),k=e(292),E=e(5),K=e(36),g=e(723),D=e(15),f=e.n(D);const j=[{value:"KADAR-CETAK",name:"KADAR-CETAK"},{value:"KADAR-BELI",name:"KADAR-BELI"},{value:"KADAR-JUAL",name:"KADAR-JUAL"}];class y extends s.Component{constructor(a){super(a),this.state={aktif:!1}}componentDidMount(){}render(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},i.a.createElement("div",{className:"form-group"},i.a.createElement(u.a,{id:"type_kadar",label:"Type Kadar",name:"type_kadar",options:j,value:this.props.type_kadar,disabled:this.props.isEdit,onBlur:()=>this.setState({aktif:!0}),placeholder:"Silahkan Pilih Type Kadar",component:E.f})),i.a.createElement(u.a,{id:"kadar",tabIndex:"1",name:"kadar",component:E.e,type:"text",label:"Kadar",normalize:K.c,onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan Kadar"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 text-right"},i.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(d.wb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",i.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?i.a.createElement(f.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}y=Object(k.a)({form:"ModalKadar",enableReinitialize:!0,validate:g.a})(y);var O=Object(o.b)(a=>{if(null!==a.datamaster.ShowModalDataKadar)return{initialValues:{kadar:a.datamaster.ShowModalDataKadar.kadar,type_kadar:a.datamaster.ShowModalDataKadar.type_kadar}}},null)(y),S=e(40);const w=(a,t,e)=>{c.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kadar "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(s=>{s.isConfirmed&&Object(m.b)("kadar/delete/"+a+"&"+t,{data:{kadar:a,type_kadar:t}}).then(()=>{Object(h.d)("Data Berhasil Di Hapus").then(()=>e(Object(d.mb)()))}).catch(a=>{Object(h.e)("error",a.response.data)})})};t.default=Object(o.b)(a=>({DataKadar:a.datamaster.getDataKadar,hideModal:a.datamaster.modalDialog}),null)(class extends i.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kadar",text:"Kadar"},{dataField:"type_kadar",text:"Type Kadar"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{onClick:()=>w(t.kadar,t.type_kadar,this.props.dispatch),className:"btn btn-danger"},i.a.createElement("i",{className:"fa fa-trash"}))))}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(d.mb)())}handleSubmit(a){if(this.setState({isLoading:!0}),void 0===a.type_kadar)return c.a.fire({title:"Oopss!! ",text:"Type Kadar Harus Dipilih !!!",icon:"info"}),this.setState({isLoading:!1}),!1;let t={kadar:a.kadar},e={kadar:a.kadar,type_kadar:a.type_kadar};this.state.isEdit?Object(m.g)("jenis/edit/by-kode-jenis/"+a.kadar,t).then(()=>{this.props.dispatch(Object(d.wb)())}).then(()=>Object(h.e)("success","Data Berhasil Diedit")).then(()=>{this.props.dispatch(Object(d.mb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(p.d)("ModalKadar"))}).catch(a=>this.ErrorHandling(a)):Object(m.e)("kadar/add",e).then(()=>{this.props.dispatch(Object(d.wb)())}).then(()=>Object(h.e)("success","Data Berhasil Disimpan")).then(()=>{this.props.dispatch(Object(d.mb)())}).then(()=>{this.props.dispatch(Object(p.d)("ModalKadar"))}).then(()=>{this.setState({isLoading:!1})}).catch(a=>this.ErrorHandling(a))}ErrorHandling(a){this.setState({isLoading:!1}),Object(h.a)(a)}formEditKadar(a){this.props.dispatch(Object(d.xb)()),this.props.dispatch(Object(d.S)(a)),this.setState({isEdit:!0})}ShowModalDataKadar(){this.props.dispatch(Object(d.xb)()),this.props.dispatch(Object(d.S)(!1)),this.setState({isEdit:!1})}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(n.b,{to:"#"},"Data Master")),i.a.createElement("li",{className:"breadcrumb-item active"},"Master Kadar")),i.a.createElement("h1",{className:"page-header"},"Master Kadar "),i.a.createElement(r.a,null,i.a.createElement(r.c,null,"Master Kadar"),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement(b.a,{keyField:"kondisi",tambahData:!0,handleClick:()=>this.ShowModalDataKadar(),exportCsv:!0,data:this.props.DataKadar,columns:this.state.columns,empty:this.props.DataKadar,textEmpty:"Data Kadar Kosong"})),i.a.createElement("br",null),i.a.createElement(S.a,{title:this.state.isEdit?"Edit Data Kadar":"Tambah Data Kadar",size:"P",content:i.a.createElement(O,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:a=>this.handleSubmit(a)})})))}})},723:function(a,t,e){"use strict";t.a=((a,t)=>{const e={};return a.kode_group||(e.kode_kategori="Kode Kategori Tidak Boleh Kosong"),a.kode_jenis||(e.kode_jenis="Kode Jenis Tidak Boleh Kosong"),a.nama_jenis||(e.nama_jenis="Nama Jenis Tidak Boleh Kosong"),e})}}]);
//# sourceMappingURL=20.22065147.chunk.js.map