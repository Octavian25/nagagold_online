(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1084:function(t,e,a){"use strict";a.r(e);var l=a(0),o=a.n(l),r=a(9),n=a(291),c=a(292),s=a(4),i=a(3),E=a(18),d=a(49),g=a(34),m=a.n(g);var p=class extends l.Component{constructor(t){super(t),this.state={}}render(){let t=0,e=0,a=0,l=0,r=0,n=0,c=0,s=0,E=0;return this.props.data.forEach((o,i)=>{o.detail.forEach((l,o)=>{t+=l.stock_on_hand,a+=l.berat_atribut,e+=l.berat,r+=l.harga_jual,E+=l.ongkos,s+=l.harga_total,c+=l.harga_gram,n+=l.harga_atribut}),l+=o.detail.length}),o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Batal Penjualan",sheet:"Laporan Batal Penjualan",buttonText:"Export Exel"}),o.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"11",style:{textAlign:"center"}}," ","LAPORAN BATAL PENJUALAN"," ")),o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"11"}," Periode ")),o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"11"}," ",0===Object(i.i)("tgl_laporan").length?null:JSON.parse(Object(i.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(i.i)("tgl_laporan")).tgl_akhir," ")),o.a.createElement("tr",null,o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE DEPT"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARCODE"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"ONGKOS"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA JUAL"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT ATRIBUT"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA ATRIBUT"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA GRAM"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA TOTAL"))),this.props.data.map((t,e)=>o.a.createElement(o.a.Fragment,null,o.a.createElement("tbody",null,t._id.pembayaran.map((t,e)=>o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"11"},t.jenis," ",parseInt(t.jumlah_rp).toLocaleString("ID-id"))))),t.detail.map((t,e)=>o.a.createElement("tr",null,o.a.createElement("td",null,t.kode_dept),o.a.createElement("td",null,t.kode_barcode),o.a.createElement("td",null,t.nama_barang),o.a.createElement("td",null,t.berat),o.a.createElement("td",null,t.ongkos),o.a.createElement("td",null,t.harga_jual),o.a.createElement("td",null,t.nama_atribut),o.a.createElement("td",null,t.berat_atribut),o.a.createElement("td",null,t.harga_atribut),o.a.createElement("td",null,t.harga_gram),o.a.createElement("td",null,t.harga_total)))),o.a.createElement("tfoot",null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"3",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Total Barang : ",t.detail.length),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",t.detail.map(t=>t.berat).reduce((t,e)=>t+e,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",t.detail.map(t=>t.ongkos).reduce((t,e)=>t+e,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",t.detail.map(t=>t.harga_jual).reduce((t,e)=>t+e,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",t.detail.map(t=>t.berat_atribut).reduce((t,e)=>t+e,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",t.detail.map(t=>t.harga_atribut).reduce((t,e)=>t+e,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",t.detail.map(t=>t.harga_gram).reduce((t,e)=>t+e,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",t.detail.map(t=>t.harga_total).reduce((t,e)=>t+e,0)," "))))),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"3",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total Barang : ",l),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},e),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},E),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},r),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},a),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},n),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},c),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},s))))}},u=a(30);a(48);var h=(t="",e="",a="",l="")=>{const o=new u.default("l","mm",[297,210]);let r=[],n=[],c=[],s=30,E=0,d=0,g=0,m=0,p=0,h=0,b=0,C=0;o.setFontSize(15),o.text("LAPORAN BATAL PENJUALAN",14,15),o.setFontSize(10),o.setProperties({title:"LAPORAN BATAL PENJUALAN"}),o.text("PERIODE : ".concat(0===Object(i.i)("tgl_laporan").length?null:JSON.parse(Object(i.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(i.i)("tgl_laporan")).tgl_akhir),14,25),c=[[{content:"KODE DEPT"},{content:"KODE BARCODE"},{content:"NAMA BARAG"},{content:"BERAT"},{content:"ONGKOS"},{content:"HARGA JUAL"},{content:"NAMA ATRIBUT"},{content:"HARGA ATRIBUT"},{content:"BERAT ATRIBUT"},{content:"HARGA GRAM"},{content:"HARGA TOTAL"}]],t.forEach((t,e)=>{let a=0,l=0,o=0,n=0,c=0,s=0,i=0;t._id.pembayaran.forEach((t,e)=>{let a=[{content:"".concat(t.jenis,"  (").concat(parseInt(t.jumlah_rp).toLocaleString("ID-id"),")"),colSpan:11}];r.push(a)}),t.detail.forEach((t,e)=>{let E=[t.kode_dept,t.kode_barcode,t.nama_barang,t.berat.toFixed(3),parseInt(t.ongkos).toLocaleString("ID-id"),parseInt(t.harga_jual).toLocaleString("ID-id"),t.nama_atribut,parseInt(t.harga_atribut).toLocaleString("ID-id"),t.berat_atribut.toFixed(3),parseInt(t.harga_gram).toLocaleString("ID-id"),parseInt(t.harga_total).toLocaleString("ID-id")];d=parseFloat(d)+parseFloat(t.berat),g+=parseInt(t.ongkos),m+=parseInt(t.harga_jual),p+=parseInt(t.berat_atribut),h+=parseInt(t.harga_atribut),b+=parseInt(t.harga_gram),C+=parseInt(t.harga_total),a+=parseFloat(t.berat),l+=parseInt(t.ongkos),o+=parseInt(t.harga_jual),c+=parseInt(t.berat_atribut),s+=parseInt(t.harga_atribut),n+=parseInt(t.harga_gram),i+=parseInt(t.harga_total),r.push(E)}),E+=t.detail.length;let u=[{content:"Total Barang : ".concat(t.detail.length),colSpan:3,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(a.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(l).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(o).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(s).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(c.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(n).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(i).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];r.push(u)});let A=[{content:"Grand Barang : ".concat(E),colSpan:3,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(d.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(g).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(m).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(h).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(p.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(b).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(C).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];r.push(A);let _=[{content:"Printed By ".concat(JSON.parse(Object(i.i)("userdata")).user_id," / ").concat(Object(i.g)()),colSpan:11,styles:{fontStyle:"italic",textColor:"#000"}}];r.push(_),o.autoTable({head:c,body:r,foot:n,startY:s,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"},tableLineColor:[255,255,255],tableLineWidth:1}),s=o.autoTableEndPosY()+3,r=[],n=[];const y=o.internal.getNumberOfPages(),x=o.internal.pageSize.width,k=o.internal.pageSize.height;o.setFontSize(10);for(let i=1;i<y+1;i++){let t=x/2,e=k-10;o.setPage(i),o.text("".concat(i," of ").concat(y),t,e,{align:"center"})}var S=o.output("datauristring"),f=window.open();f.document.open(),f.document.write("<html><head><title>LAPORAN BATAL PENJUALAN</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+S+"></embed></body></html>")},b=a(15),C=a.n(b);class A extends l.Component{constructor(t){super(t),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){h(this.props.LaporanDataPenjualan)}setStartDate(t){this.setState({tgl_awal:new Date(t)})}setLastDate(t){this.setState({tgl_akhir:new Date(t)})}render(){let t=[],e=0,a=0,l=0,r=0,c=0;this.props.LaporanDataPenjualan.forEach(o=>{o.detail.forEach(o=>{t.push(o),e+=o.berat,a+=o.ongkos,l+=o.harga_jual,r+=o.harga_total,c+=o.harga_gram})});const i=[{dataField:"kode_dept",text:"Kode Dept",footerAttrs:{colSpan:"3"},footer:(e,a,l,r)=>o.a.createElement("div",null,"Total Barang  : ",t.length," ")},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",footer:(t,a,l,r)=>o.a.createElement("div",null,e.toFixed(3)," "),formatter:t=>t.toFixed(3)},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",footer:(t,e,l,r)=>o.a.createElement("div",{className:"text-right"},a.toLocaleString("ID-id")," "),formatter:t=>o.a.createElement("div",{className:"text-right"},t.toLocaleString("ID-id"))},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",footer:(t,e,a,r)=>o.a.createElement("div",{className:"text-right"},l.toLocaleString("ID-id")," "),formatter:t=>o.a.createElement("div",{className:"text-right"},t.toLocaleString("ID-id"))},{dataField:"harga_gram",text:"Harga/Gram",headerClasses:"text-right",footer:(t,e,a,l)=>o.a.createElement("div",{className:"text-right"},c.toLocaleString("ID-id")," "),formatter:t=>o.a.createElement("div",{className:"text-right"},t.toLocaleString("ID-id"))},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:(t,e,a,l)=>o.a.createElement("div",{className:"text-right"},r.toLocaleString("ID-id")," "),formatter:t=>o.a.createElement("div",{className:"text-right"},t.toLocaleString("ID-id"))}];return o.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(n.a,{name:"tgl_awal",component:s.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:t=>this.setStartDate(t),placeholder:"Masukan Tanggal Dari"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(n.a,{name:"tgl_akhir",component:s.c,type:"text",selected:this.state.tgl_akhir,onChange:t=>this.setLastDate(t),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"text-right"},o.a.createElement("label",null,"\xa0"),o.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),o.a.createElement("div",{className:"col-12"},o.a.createElement(E.a,{keyField:"kode_barcode",data:this.props.export?t:[],columns:i,empty:!0,textEmpty:"Data Laporan Batal Penjualan Kosong"})),o.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("button",{onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement(p,{data:this.props.LaporanDataPenjualan}))))),this.props.isLoading?o.a.createElement(C.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}A=Object(c.a)({form:"HeadFormLaporanBatalPenjualan",enableReinitialize:!0,validate:d.a})(A);e.default=Object(r.b)(t=>({initialValues:{tgl_awal:Object(i.f)(),tgl_akhir:Object(i.f)()}}))(A)}}]);
//# sourceMappingURL=49.02a2d2e9.chunk.js.map