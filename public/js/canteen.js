!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){n("PxDY"),e.exports=n("pyCd")},PxDY:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==n(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}({0:function(e,t,n){n("PxDY"),e.exports=n("pyCd")},PxDY:function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==o(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}({1:function(e,t,n){e.exports=n("PxDY")},PxDY:function(e,t){function n(e){var t="SPI"+(e=new Date).getFullYear()+("0"+(e.getMonth()+1)).slice(-2);return e.getDate()<=15?t+="A":t+="B",t}function o(){$("#msg").removeClass("d-none"),$(".scan").addClass("d-none"),$("#amount").removeClass("is-invalid"),$("#amount").val("0")}$(document).ready((function(){navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){Instascan.Camera.getCameras().then((function(e){if(e.length>0)$("#cameraSelect option[value='check']").remove(),$("#cameraSelect").prop("disabled",!1),$.each(e,(function(e,t){var n=document.createElement("option");n.value=e,n.text=t.name,$("#cameraSelect").prepend(n)})),$("#cameraSelect").val(e.length-1);else{$("#cameraSelect option[value='check']").remove();var t=document.createElement("option");t.text="No cameras found.",$("#cameraSelect").append(t),$("#cameraSelect").prop("disabled",!0),console.error("No cameras found.")}})).catch((function(e){console.error(e)}))})).catch((function(e){if("NotAllowedError"===e.name){$("#cameraSelect option[value='check']").remove();var t=document.createElement("option");t.text="Camera "+e.message,$("#cameraSelect").append(t),$("#cameraSelect").prop("disabled",!0),$("#msg").css("color","red"),$("#msg").text("*** PLEASE ALLOW PERMISSION TO USE CAMERA ***")}console.error(e.name)}))})),$("#scanqrBtn").on("click",(function(){!function(e){if(e){var t={video:document.getElementById("preview"),mirror:!1};window.URL.createObjectURL=function(e){return t.video.srcObject=e,e};var r=new Instascan.Scanner(t);Instascan.Camera.getCameras().then((function(t){t.length>0?(r.start(t[e]),$("#scanModal").modal("show")):console.error("No cameras found.")})).catch((function(e){console.error(e)})),r.addListener("scan",(function(e){var t;t=e,$.ajax({url:"getuser",type:"POST",data:{qr:t},success:function(e){$("#scanModal").modal("hide"),e?$.ajax({url:"getUserCredit",type:"POST",data:{userId:e.id,ctrl:n(new Date)},success:function(t){t?($("#empId").val(e.id),$("#empNum").val(e.uname),$("#empName").val(e.name),$("#empDept").val(e.department_id?e.department.name:"N/A"),$("#msg").addClass("d-none"),$(".scan").removeClass("d-none")):(o(),Swal.fire({icon:"error",title:"User credit not available",text:"Please contact SPI-IAD Dept."}))}}):(o(),Swal.fire({icon:"error",title:"QR Code does not exist in the database.",text:"Please contact SPI-IAD Dept."}))}}),r.stop().then((function(){$("#scanModal").modal("hide")}))})),$("#scanModal").on("hide.bs.modal",(function(e){r.stop()}))}else iziToast.warning({title:"Warning",message:"Please select camera first.",position:"topCenter",close:!1,pauseOnHover:!1})}($("#cameraSelect").val())})),$("#transactBtn").on("click",(function(e){empId=$("#empId").val(),empName=$("#empName").val(),ctrl=n(new Date),amnt=$("#amount").val(),0!=$("#amount").val()?Swal.fire({title:"Are you sure?",html:"<span style='font-size:2rem'><span class='text-info'>Php "+amnt+"</span> will be deducted.</span>",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then((function(e){e.isConfirmed&&function(e,t,n){$.ajax({url:"transact",type:"POST",data:{userId:e,ctrl:t,amount:n},success:function(e){1==e.status?(o(),Swal.fire({icon:"success",title:e.result})):Swal.fire({icon:"error",title:e.result})}})}(empId,ctrl,amnt)})):$("#amount").addClass("is-invalid")}))}})},pyCd:function(e,t){}})},pyCd:function(e,t){}});