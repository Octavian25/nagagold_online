(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1072:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(10),o=a(290),c=a(291),s=a(7),i=a(5),d=a(3),E=a(19),g=a(735),m=a(40),p=a.n(m);var u=class extends l.Component{constructor(e){super(e),this.state={}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Transaksi Penjualan Sales",sheet:"Laporan Transaksi Penjualan Sales",buttonText:"Export Exel"}),r.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"12",style:{textAlign:"center"}}," ","LAPORAN TRANSAKSI PENJUALAN SALES"," ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"12"}," Periode  ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"12"}," ",0===Object(d.i)("tgl_laporan").length?null:JSON.parse(Object(d.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.i)("tgl_laporan")).tgl_akhir," ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"12"}))),this.props.data.map((e,t)=>r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{textAlign:"left"}},"Kode Sales : ",e._id.kode_sales),r.a.createElement("td",{colSpan:"11"}," ")),r.a.createElement("tr",null,r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO FAKTUR"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE DEPT"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARCODE"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"ONGKOS"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA JUAL"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT ATRIBUT"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA ATRIBUT"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA GRAM"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA TOTAL")),e.detail.map((e,t)=>r.a.createElement("tr",null,r.a.createElement("td",null,e.no_faktur_jual),r.a.createElement("td",null,e.kode_dept),r.a.createElement("td",null,e.kode_barcode),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},e.nama_barang),r.a.createElement("td",{style:{textAlign:"center"}},e.berat.toFixed(3)),r.a.createElement("td",{style:{textAlign:"center"}},e.ongkos),r.a.createElement("td",{style:{textAlign:"center"}},e.harga_jual),r.a.createElement("td",null,e.nama_atribut),r.a.createElement("td",{style:{textAlign:"center"}},e.berat_atribut.toFixed(3)),r.a.createElement("td",{style:{textAlign:"center"}},e.harga_atribut),r.a.createElement("td",{style:{textAlign:"center"}},e.harga_gram),r.a.createElement("td",{style:{textAlign:"center"}},e.harga_total)))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Total Barang :  ",e.detail.length),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ",e.detail.map(e=>e.berat).reduce((e,t)=>e+t,0),"  "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ",e.detail.map(e=>e.ongkos).reduce((e,t)=>e+t,0),"  "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ",e.detail.map(e=>e.harga_jual).reduce((e,t)=>e+t,0)," "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ",e.detail.map(e=>e.berat_atribut).reduce((e,t)=>e+t,0),"  "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ",e.detail.map(e=>e.harga_atribut).reduce((e,t)=>e+t,0)," "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ",e.detail.map(e=>e.harga_gram).reduce((e,t)=>e+t,0)," "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ",e.detail.map(e=>e.harga_total).reduce((e,t)=>e+t,0)," ")),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"12"})))))))}},h=a(36);a(57);var b=(e="",t="",a="",l="")=>{const r=new h.default("l","mm",[297,210]);let n=[],o=[],c=30,s=0,i=0,E=0,g=0,m=0,p=0,u=0,b=0;r.setFontSize(15),r.text("LAPORAN PENJUALAN SALES",14,15),r.setFontSize(10),r.setProperties({title:"LAPORAN PENJUALAN SALES"}),r.text("PERIODE : ".concat(0===Object(d.i)("tgl_laporan").length?null:JSON.parse(Object(d.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.i)("tgl_laporan")).tgl_akhir),14,25),e.forEach((e,t)=>{o=[[{content:"KODE SALES : ".concat(e._id.kode_sales),colSpan:12}],[{content:"NO FAKTUR"},{content:"KODE DEPT"},{content:"KODE BARCODE"},{content:"NAMA BARANG"},{content:"BERAT"},{content:"ONGKOS"},{content:"HARGA JUAL"},{content:"NAMA ATRIBUT"},{content:"BERAT ATRIBUT"},{content:"HARGA ATRIBUT"},{content:"HARGA GRAM"},{content:"HARGA TOTAL"}]];let a=0,l=0,d=0,h=0,A=0,S=0,_=0;e.detail.forEach((e,t)=>{let r=[e.no_faktur_jual,e.kode_dept,e.kode_barcode,e.nama_barang,e.berat.toFixed(3),parseInt(e.ongkos).toLocaleString("ID-id"),parseInt(e.harga_jual).toLocaleString("ID-id"),e.nama_atribut,e.berat_atribut.toFixed(3),parseInt(e.harga_atribut).toLocaleString("ID-id"),parseInt(e.harga_gram).toLocaleString("ID-id"),parseInt(e.harga_total).toLocaleString("ID-id")];i+=parseFloat(e.berat),E+=parseInt(e.ongkos),g+=parseInt(e.harga_jual),m+=parseInt(e.berat_atribut),p+=parseInt(e.harga_atribut),u+=parseInt(e.harga_gram),b+=parseInt(e.harga_total),A+=parseFloat(e.harga_jual),d+=parseFloat(e.harga_atribut),h+=parseFloat(e.berat_atribut),l+=parseFloat(e.harga_gram),a+=parseFloat(e.harga_total),S+=parseFloat(e.ongkos),_+=parseFloat(e.berat),n.push(r)}),s+=e.detail.length;let x=[{content:"Total Barang : ".concat(e.detail.length),colSpan:4,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(_.toFixed(3)),styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(S).toLocaleString("ID-id")),styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(A).toLocaleString("ID-id")),styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(h.toFixed(3)),styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(d).toLocaleString("ID-id")),styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(l).toLocaleString("ID-id")),styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(a).toLocaleString("ID-id")),styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}}];n.push(x),r.autoTable({head:o,body:n,startY:c,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),n=[],o=[],c=r.autoTableEndPosY()+20});let A=[{content:"Printed By ".concat(JSON.parse(Object(d.i)("userdata")).user_id," / ").concat(Object(d.g)()),colSpan:12,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(A),c=r.autoTableEndPosY()+3,n=[];const S=r.internal.getNumberOfPages(),_=r.internal.pageSize.width,x=r.internal.pageSize.height;r.setFontSize(10);for(let d=1;d<S+1;d++){let e=_/2,t=x-10;r.setPage(d),r.text("".concat(d," of ").concat(S),e,t,{align:"center"})}var k=r.output("datauristring"),y=window.open();y.document.open(),y.document.write("<html><head><title>LAPORAN PENJUALAN SALES</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+k+"></embed></body></html>")},A=a(15),S=a.n(A);class _ extends l.Component{constructor(e){super(e),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){console.log(this.props.LaporanPenjualanSales),b(this.props.LaporanPenjualanSales)}setStartDate(e){this.setState({tgl_awal:new Date(e)})}setLastDate(e){this.setState({tgl_akhir:new Date(e)})}componentDidMount(){this.props.dispatch(Object(s.nb)())}render(){let e=[],t=0,a=0,l=0,n=0,c=0;this.props.LaporanPenjualanSales.forEach(r=>{r.detail.forEach(r=>{e.push(r),t+=r.berat,a+=r.ongkos,l+=r.harga_jual,n+=r.harga_total,c+=r.harga_gram})});const s=[{dataField:"no_faktur_jual",text:"NO FJ",footerAttrs:{colSpan:"3"},footer:(t,a,l,n)=>r.a.createElement("div",null,"Total Barang : ",e.length," ")},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",footer:(e,a,l,n)=>r.a.createElement("div",null,t.toFixed(3)," "),formatter:e=>e.toFixed(3)},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",footer:(e,t,l,n)=>r.a.createElement("div",{className:"text-right"},a.toLocaleString("ID-id")," "),formatter:e=>r.a.createElement("div",{className:"text-right"},e.toLocaleString("ID-id"))},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",footer:(e,t,a,n)=>r.a.createElement("div",{className:"text-right"},l.toLocaleString("ID-id")," "),formatter:e=>r.a.createElement("div",{className:"text-right"},e.toLocaleString("ID-id"))},{dataField:"harga_gram",text:"Harga/Gram",headerClasses:"text-right",footer:(e,t,a,l)=>r.a.createElement("div",{className:"text-right"},c.toLocaleString("ID-id")," "),formatter:e=>r.a.createElement("div",{className:"text-right"},e.toLocaleString("ID-id"))},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:(e,t,a,l)=>r.a.createElement("div",{className:"text-right"},n.toLocaleString("ID-id")," "),formatter:e=>r.a.createElement("div",{className:"text-right"},e.toLocaleString("ID-id"))}];let d=[{value:"SEMUA",name:"SEMUA"}];return this.props.datasales.map(e=>{let t={value:e.kode_sales,name:e.kode_sales+" - "+e.nama_sales};return d.push(t),!0}),r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(o.a,{id:"tgl_awal",name:"tgl_awal",component:i.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:e=>this.setStartDate(e),placeholder:"Masukan Tanggal Dari"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(o.a,{name:"tgl_akhir",component:i.c,type:"text",selected:this.state.tgl_akhir,onChange:e=>this.setLastDate(e),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(o.a,{label:"Kode Sales",name:"kode_sales",options:d,placeholder:"Silahkan Pilih Nama Sales",component:i.f})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"text-right"},r.a.createElement("label",null,"\xa0"),r.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(E.a,{keyField:"kode_barcode",data:this.props.export?e:[],columns:s,empty:!0,textEmpty:"Data Laporan Transaksi Penjualan Sales Kosong"})),r.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("button",{onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(u,{data:this.props.LaporanPenjualanSales}))))),this.props.isLoading?r.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}_=Object(c.a)({form:"HeadFormLaporanPenjualanSales",enableReinitialize:!0,validate:g.a})(_);t.default=Object(n.b)(e=>({datasales:e.datamaster.getDataSales,initialValues:{tgl_awal:Object(d.f)(),tgl_akhir:Object(d.f)()}}))(_)},735:function(e,t,a){"use strict";t.a=(e=>{const t={};return e.tanggal_awal||(t.tanggal_awal="Tanggal Tidak Boleh Kosong"),e.sampai_tgl||(t.sampai_tgl="Tanggal Tidak Boleh Kosong"),e.kode_sales||(t.kode_sales="Kode Tidak Boleh Kosong"),t})}}]);
//# sourceMappingURL=14.5b9b0419.chunk.js.map