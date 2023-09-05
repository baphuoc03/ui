document.getElementById("sa-basic").addEventListener("click",function(){Swal.fire({title:"Any fool can use a computer",confirmButtonColor:"#ff7784"})}),document.getElementById("sa-title").addEventListener("click",function(){Swal.fire({title:"The Internet?",text:"That thing is still around?",icon:"question",confirmButtonColor:"#ff7784"})}),document.getElementById("sa-success").addEventListener("click",function(){Swal.fire({title:"Good job!",text:"You clicked the button!",icon:"success",showCancelButton:!0,confirmButtonColor:"#ff7784",cancelButtonColor:"#fd625e"})}),document.getElementById("sa-warning").addEventListener("click",function(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ff7784",cancelButtonColor:"#fd625e",confirmButtonText:"Yes, delete it!"}).then(function(t){t.value&&Swal.fire("Deleted!","Your file has been deleted.","success")})}),document.getElementById("sa-params").addEventListener("click",function(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",confirmButtonClass:"btn btn-success mt-2",cancelButtonClass:"btn btn-danger ms-2 mt-2",buttonsStyling:!1}).then(function(t){t.value?Swal.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",confirmButtonColor:"#ff7784"}):t.dismiss===Swal.DismissReason.cancel&&Swal.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",confirmButtonColor:"#ff7784"})})}),document.getElementById("sa-image").addEventListener("click",function(){Swal.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"assets/images/logo-sm.svg",imageHeight:48,confirmButtonColor:"#ff7784",animation:!1})}),document.getElementById("sa-close").addEventListener("click",function(){var t;Swal.fire({title:"Auto close alert!",html:"I will close in <b></b> seconds.",timer:2e3,timerProgressBar:!0,didOpen:function(){Swal.showLoading(),t=setInterval(function(){var t=Swal.getHtmlContainer();!t||(t=t.querySelector("b"))&&(t.textContent=Swal.getTimerLeft())},100)},onClose:function(){clearInterval(t)}}).then(function(t){t.dismiss===Swal.DismissReason.timer&&console.log("I was closed by the timer")})}),document.getElementById("custom-html-alert").addEventListener("click",function(){Swal.fire({title:"<i>HTML</i> <u>example</u>",icon:"info",html:'You can use <b>bold text</b>, <a href="//Pichforest.in/">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger ms-1",confirmButtonColor:"#47bd9a",cancelButtonColor:"#fd625e",confirmButtonText:'<i class="fas fa-thumbs-up me-1"></i> Great!',cancelButtonText:'<i class="fas fa-thumbs-down"></i>'})}),document.getElementById("sa-position").addEventListener("click",function(){Swal.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})}),document.getElementById("custom-padding-width-alert").addEventListener("click",function(){Swal.fire({title:"Custom width, padding, background.",width:600,padding:100,confirmButtonColor:"#ff7784",background:"#e0e1f3"})}),document.getElementById("ajax-alert").addEventListener("click",function(){Swal.fire({title:"Submit email to run ajax request",input:"email",showCancelButton:!0,confirmButtonText:"Submit",showLoaderOnConfirm:!0,confirmButtonColor:"#ff7784",cancelButtonColor:"#fd625e",preConfirm:function(n){return new Promise(function(t,e){setTimeout(function(){"taken@example.com"===n?e("This email is already taken."):t()},2e3)})},allowOutsideClick:!1}).then(function(t){Swal.fire({icon:"success",title:"Ajax request finished!",confirmButtonColor:"#ff7784",html:"Submitted email: "+t})})});