(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1098:function(a,e,t){"use strict";t.r(e);var i=t(0),n=t.n(i),o=t(16),s=t(12),d=t(7),r=t(10),l=t(27),b=t.n(l),c=t(4),k=t(6),m=t(14),h=t(3),p=t(19),u=t(290),g=t(291),_=t(5);var B=(a,e)=>{const t={};return a.kode_gudang||(t.kode_gudang="Kode Gudang Tidak Boleh Kosong"),a.kode_baki||(t.kode_baki="Kode Baki Tidak Boleh Kosong"),a.nama_baki||(t.nama_baki="Nam Baki Tidak Boleh Kosong"),a.berat_baki||(t.berat_baki="Berat Baki Tidak Boleh Kosong"),a.berat_bandrol||(t.berat_bandrol="Berat Bandrol Tidak Boleh Kosong"),t},E=t(15),f=t.n(E);class x extends i.Component{constructor(a){super(a),this.state={aktif:!1,listgroup:[],parameter_bandrol:"2301"}}componentDidMount(){Object(k.c)("gudang/get/all").then(a=>{this.setState({listgroup:a.data})}).catch(a=>{console.log(a)}),setTimeout(()=>{this.props.isEdit?document.getElementById("nama_baki").focus():document.getElementById("kode_gudang").focus()},100),Object(k.c)("parabandrol/get/all").then(a=>{this.setState({parameter_bandrol:a.data[0].berat_bandrol})}).then(()=>this.props.change("berat_bandrol",this.state.parameter_bandrol))}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},n.a.createElement("div",{className:"form-group"},n.a.createElement(u.a,{tabIndex:"1",id:"kode_gudang",label:"Kode Gudang",name:"kode_gudang",options:this.state.listgroup.filter(a=>void 0!==a.kode_gudang).map(a=>{return{value:a.kode_gudang,name:a.kode_gudang}}),value:this.props.kode_group,disabled:this.props.isEdit,placeholder:"Silahkan Pilih Kode Gudang",component:_.f})),n.a.createElement(u.a,{tabIndex:"2",id:"kode_baki",name:"kode_baki",component:_.e,type:"text",label:"Kode Baki",readOnly:this.props.isEdit,placeholder:"Masukan Kode Baki"}),n.a.createElement(u.a,{tabIndex:"3",id:"nama_baki",name:"nama_baki",component:_.e,type:"text",label:"Nama Baki",placeholder:"Masukan Nama Baki"}),n.a.createElement(u.a,{tabIndex:"4",name:"berat_baki",component:_.a,type:"text",label:"Berat Baki",placeholder:"Masukan Berat Baki"}),n.a.createElement(u.a,{tabIndex:"5",name:"berat_bandrol",component:_.a,type:"text",label:"Berat Bandrol",onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan Berat Bandrol"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 text-right"},n.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(d.vb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",n.a.createElement("button",{tabIndex:"6",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?n.a.createElement(f.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}x=Object(g.a)({form:"ModalDataBaki",enableReinitialize:!0,validate:B})(x);var O=Object(r.b)(a=>{if(null!==a.datamaster.ShowModalBaki)return{initialValues:{kode_gudang:a.datamaster.ShowModalBaki.kode_gudang,kode_baki:a.datamaster.ShowModalBaki.kode_baki,nama_baki:a.datamaster.ShowModalBaki.nama_baki,berat_baki:a.datamaster.ShowModalBaki.berat_baki,berat_bandrol:a.datamaster.ShowModalBaki.berat_bandrol}}},null)(x),j=t(38);const S=(a,e)=>{b.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Baki "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{t.isConfirmed&&Object(k.b)("baki/delete/by-kode-baki/"+a,{data:{kode_baki:a}}).then(()=>{Object(c.d)("Data Berhasil Di Hapus").then(()=>e(Object(d.hb)()))})}).catch(a=>{Object(c.e)("error",a.response.data)})};e.default=Object(r.b)(a=>({DataBaki:a.datamaster.getDataBaki,hideModal:a.datamaster.modalDialog}),null)(class extends n.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_gudang",text:"Kode Gudang ",sort:!0},{dataField:"kode_baki",text:"Kode Baki"},{dataField:"nama_baki",text:"Nama Baki"},{dataField:"berat_baki",text:"Berat Baki",formatter:a=>a.toFixed(3)},{dataField:"berat_bandrol",text:"Berat Bandrol",formatter:a=>a.toFixed(3)},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>{let t={kode_gudang:e.kode_gudang,kode_baki:e.kode_baki,nama_baki:e.nama_baki,berat_baki:e.berat_baki.toFixed(3),berat_bandrol:e.berat_bandrol.toFixed(3)};return n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{onClick:()=>this.formEditBaki(t),className:"btn btn-primary mr-3"},n.a.createElement("i",{className:"fa fa-edit"})),n.a.createElement("button",{onClick:()=>S(e.kode_baki,this.props.dispatch),className:"btn btn-danger"},n.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(d.hb)())}handleSubmit(a){this.setState({isLoading:!0});let e={nama_baki:a.nama_baki,berat_bandrol:a.berat_bandrol,berat_baki:a.berat_baki},t={kode_baki:a.kode_baki,nama_baki:a.nama_baki,kode_gudang:a.kode_gudang,berat_bandrol:a.berat_bandrol,berat_baki:a.berat_baki};this.state.isEdit?Object(k.g)("baki/edit/by-kode-baki/"+a.kode_baki,e).then(()=>{this.props.dispatch(Object(d.vb)())}).then(()=>{Object(c.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(d.hb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(m.d)("ModalDataBaki"))}).catch(a=>this.ErrorHandling(a)):Object(k.e)("baki/add",t).then(()=>{this.props.dispatch(Object(d.vb)())}).then(()=>{Object(c.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(d.hb)())}).then(()=>{this.props.dispatch(Object(m.d)("ModalDataBaki"))}).then(()=>{this.setState({isLoading:!1})}).catch(e=>Object(h.a)(e,"baki/reactive/by-kode-baki/",a.kode_baki,t,this.props.dispatch,Object(d.hb)(),Object(d.vb)(),"ModalDataBaki").then(()=>{this.setState({isLoading:!1})}))}formEditBaki(a){this.props.dispatch(Object(d.wb)()),this.props.dispatch(Object(d.P)(a)),this.setState({isEdit:!0})}ShowModalBaki(){this.props.dispatch(Object(d.wb)()),this.props.dispatch(Object(d.P)(!1)),this.setState({isEdit:!1})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(o.b,{to:"#"},"Data Master")),n.a.createElement("li",{className:"breadcrumb-item active"},"Master Baki")),n.a.createElement("h1",{className:"page-header"},"Master Baki "),n.a.createElement(s.a,null,n.a.createElement(s.c,null,"Master Baki"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement(p.a,{keyField:"kode_baki",tambahData:!0,handleClick:()=>this.ShowModalBaki(),exportCsv:!0,data:this.props.DataBaki,columns:this.state.columns,empty:this.props.DataBaki,textEmpty:"Data Baki Kosong"})),n.a.createElement("br",null),n.a.createElement(j.a,{size:"P",title:this.state.isEdit?"Edit Data Baki":"Tambah Data Baki",content:n.a.createElement(O,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:a=>this.handleSubmit(a)})})))}})}}]);
//# sourceMappingURL=29.ac249224.chunk.js.map