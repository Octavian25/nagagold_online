(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1104:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(15),o=t(12),d=t(8),r=t(10),l=t(28),b=t.n(l),c=t(5),m=t(6),h=t(14),p=t(3),u=t(18),g=t(287),k=t(288),E=t(4);var K=(e,a)=>{const t={};return e.kondisi_barang||(t.kondisi_barang="kondisi Tidak Boleh Kosong"),e.persentase||(t.persentase="Presentase Tidak Boleh Kosong"),t};class P extends i.Component{constructor(...e){super(...e),this.state={aktif:!1}}componentDidMount(){setTimeout(()=>{this.props.isEdit,document.getElementById("kondisi_barang").focus()},100)}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement("input",{type:"hidden",name:"kondisi_barang_lama"}),n.a.createElement(g.a,{tabIndex:"1",id:"kondisi_barang",name:"kondisi_barang",component:E.e,type:"text",label:" Kondisi Pembelian",placeholder:"Masukan  Kondisi Pembelian"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 text-right"},n.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(d.vb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",n.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}P=Object(k.a)({form:"ModalKondisiPembelian",enableReinitialize:!0,validate:K})(P);var f=Object(r.b)(e=>{if(null!==e.datamaster.ShowModalKondisiPembelian)return{initialValues:{kondisi_barang_lama:e.datamaster.ShowModalKondisiPembelian.kondisi_barang,kondisi_barang:e.datamaster.ShowModalKondisiPembelian.kondisi_barang,persentase:e.datamaster.ShowModalKondisiPembelian.persentase}}},null)(P),j=t(36);const O=(e,a)=>{b.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Kondisi Pembelian "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{t.isConfirmed&&Object(m.a)("parabeli/delete/by-kode-kondisi/"+e,{}).then(()=>{Object(c.d)("Data Berhasil Di Hapus").then(()=>a(Object(d.pb)()))})})};a.default=Object(r.b)(e=>({DataKondisiPembelian:e.datamaster.getKondisiPembelian,hideModal:e.datamaster.modalDialog}),null)(class extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kondisi_barang",text:"Kode Kondisi Pembelian",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>{let t={kondisi_barang:a.kondisi_barang,persentase:a.persentase};return n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{onClick:()=>this.formEditKondisiPembelian(t),className:"btn btn-primary mr-3"},n.a.createElement("i",{className:"fa fa-edit"})),n.a.createElement("button",{onClick:()=>O(a.kondisi_barang,this.props.dispatch),className:"btn btn-danger"},n.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(d.pb)())}handleSubmit(e){this.setState({isLoading:!0});let a={kondisi_barang:e.kondisi_barang,persentase:1},t={kondisi_barang:e.kondisi_barang,persentase:1};this.state.isEdit?Object(m.f)("parabeli/edit/by-kode-kondisi/"+e.kondisi_barang_lama,a).then(()=>{this.props.dispatch(Object(d.vb)())}).then(()=>{Object(c.e)("success","Data Berhasil Diedit")}).then(()=>{this.props.dispatch(Object(d.pb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.setState({isLoading:!1}),this.props.dispatch(Object(h.d)("ModalKondisiPembelian"))}).catch(e=>{this.setState({isLoading:!1}),Object(c.e)("info","Terjadi Kesalahan Saat Mengirim Data")}):Object(m.d)("parabeli/add",t).then(()=>{this.props.dispatch(Object(d.vb)())}).then(()=>{Object(c.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(d.pb)())}).then(()=>{this.props.dispatch(Object(h.d)("ModalKondisiPembelian"))}).then(()=>{this.setState({isLoading:!1})}).catch(a=>Object(p.a)(a,"parabeli/reactive/by-kode-kondisi/",e.kondisi_barang,t,this.props.dispatch,Object(d.pb)(),Object(d.vb)(),"ModalKondisiPembelian").then(()=>{this.setState({isLoading:!1})}))}formEditKondisiPembelian(e){this.props.dispatch(Object(d.wb)()),this.props.dispatch(Object(d.Y)(e)),this.setState({isEdit:!0})}ShowModalKondisiPembelian(){this.props.dispatch(Object(d.wb)()),this.props.dispatch(Object(d.Y)(!1)),this.setState({isEdit:!1})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(s.b,{to:"#"},"Data Master")),n.a.createElement("li",{className:"breadcrumb-item active"},"Master Kondisi Pembelian")),n.a.createElement("h1",{className:"page-header"},"Master Kondisi Pembelian "),n.a.createElement(o.a,null,n.a.createElement(o.c,null,"Master Kondisi Pembelian"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement(u.a,{keyField:"kondisi_barang",tambahData:!0,handleClick:()=>this.ShowModalKondisiPembelian(),exportCsv:!0,data:this.props.DataKondisiPembelian,columns:this.state.columns,empty:this.props.DataKondisiPembelian,textEmpty:"Data Kondisi Pembelian Kosong"})),n.a.createElement("br",null),n.a.createElement(j.a,{size:"P",title:this.state.isEdit?"Edit Data Kondisi Pembelian":"Tambah Data Kondisi Pembelian",content:n.a.createElement(f,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:e=>this.handleSubmit(e)})})))}})}}]);
//# sourceMappingURL=37.7e48baed.chunk.js.map