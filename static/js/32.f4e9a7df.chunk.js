(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1088:function(a,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),o=t(9),s=t(651),l=t(649),i=t(650),p=t(662),m=t(291),d=t(292),c=t(7),g=t(4),h=t(36);var b=(a,e)=>{const t={};return a.kode||(t.kode="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t},k=t(15),u=t.n(k);class K extends r.Component{constructor(...a){super(...a),this.state={}}render(){return n.a.createElement(s.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(c.wb)())},n.a.createElement(l.a,null," ",this.props.title," "),n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement(i.a,null,n.a.createElement(m.a,{name:"kode",component:g.e,type:"text",label:"Kode",placeholder:"Masukan Kode",readOnly:this.props.isEdit}),n.a.createElement(m.a,{name:"nama_kategori",component:g.e,type:"text",label:"Nama Kategori",placeholder:"Masukan Nama Kategori"}),n.a.createElement(m.a,{name:"harga_pergram",component:g.e,type:"text",label:"Harga / Gram",placeholder:"Masukan Harga / Gram",normalize:h.a}),n.a.createElement(m.a,{name:"presentase",component:g.e,type:"text",label:"Presentase",placeholder:"Masukan Presentase",normalize:h.c}),n.a.createElement(m.a,{name:"kadar",component:g.e,type:"text",label:"Kadar",placeholder:"Masukan Kadar"})),n.a.createElement(p.a,null,n.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(c.wb)()),type:"button",disabled:this.props.isLoading},"Batal"),n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data")),this.props.isLoading?n.a.createElement(u.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}K=Object(d.a)({form:"ModalKategori",enableReinitialize:!0,validate:b})(K);e.default=Object(o.b)(a=>{if(null!==a.datamaster.ShowtModalKategori)return{initialValues:{kode:a.datamaster.ShowtModalKategori.kode,nama_kategori:a.datamaster.ShowtModalKategori.nama_kategori,harga_pergram:a.datamaster.ShowtModalKategori.harga_pergram,presentase:a.datamaster.ShowtModalKategori.presentase,kadar:a.datamaster.ShowtModalKategori.kadar}}},null)(K)}}]);
//# sourceMappingURL=32.f4e9a7df.chunk.js.map