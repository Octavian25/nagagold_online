(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1086:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),i=t(16),n=t(12),l=t(100),o=t.n(l),c=t(76),m=t.n(c),d=t(152),h=t.n(d),p=t(7),b=t(10),g=t(27),E=t.n(g),u=t(4);const k=Object(r.lazy)(()=>t.e(32).then(t.bind(null,1075))),f=c.Search.SearchBar,x=c.CSVExport.ExportCSVButton,N=(e,a)=>{console.log(e),E.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(u.d)("Data Berhasil Di Hapus")}).catch(e=>{Object(u.e)("error",e.response.data)})};a.default=Object(b.b)(e=>({hideModal:e.datamaster.modalDialog}),null)(class extends s.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode",text:"Kode",sort:!0},{dataField:"nama_kategori",text:"Nama Kategori"},{dataField:"harga_pergram",text:"Harga / Gram",formatter:e=>s.a.createElement("span",null,"Rp. ",parseFloat(e).toLocaleString("ID-id"))},{dataField:"presentase",text:"Persentase",formatter:e=>e.toFixed(2)},{dataField:"kadar",text:"Kadar"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>{let t={kode:a.kode,nama_kategori:a.nama_kategori,harga_pergram:a.harga_pergram,presentase:a.presentase,kadar:a.kadar};return s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.formEditDataKategori(t),className:"btn btn-primary mr-3"},"  ",s.a.createElement("i",{className:"fa fa-edit"})),s.a.createElement("button",{onClick:()=>N(a.kode,this.props.dispatch),className:"btn btn-danger"},s.a.createElement("i",{className:"fa fa-trash"}))))}}],datakategori:[{kode:"CC",nama_kategori:"Emas Tua",harga_pergram:"7700000",presentase:"80",kadar:"17k"}]},this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(e){this.setState({isLoading:!0}),console.log(e)}formEditDataKategori(e){this.props.dispatch(Object(p.wb)()),this.props.dispatch(Object(p.fb)(e)),this.setState({isLoading:!1})}showModalKategori(){this.props.dispatch(Object(p.wb)()),this.props.dispatch(Object(p.fb)(!1)),this.setState({isEdit:!1,isLoading:!1})}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(i.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Kategori")),s.a.createElement("h1",{className:"page-header"},"Master Kategori "),s.a.createElement(n.a,null,s.a.createElement(n.c,null,"Master Kategori"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(m.a,{keyField:"kode",data:this.state.datakategori||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Kategori.csv"}},e=>s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("button",{onClick:()=>this.showModalKategori(),className:"btn btn-primary","data-tip":"Tambah Data"},s.a.createElement("i",{className:"fa fa-plus"}))),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement(f,e.searchProps))),s.a.createElement("hr",null),s.a.createElement("div",{className:"col-12"},s.a.createElement(o.a,Object.assign({pagination:h()()},e.baseProps)),s.a.createElement("br",null),s.a.createElement(x,e.csvProps,"Export CSV!!"))))),s.a.createElement("br",null),s.a.createElement(k,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,title:this.state.isEdit?"Edit Data Kategori":"Tambah Data Kategori",isOpen:this.props.hideModal,onSubmit:e=>this.handleSubmit(e)})))}})}}]);
//# sourceMappingURL=33.23427ef3.chunk.js.map