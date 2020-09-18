function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName("tr");
	
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}


function showTableData() {
        var se=document.getElementById('ip').value;
        document.getElementById('info').innerHTML = "";
        var myTab = document.getElementById('myTable');

        // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
        for (i = 1; i < myTab.rows.length; i++) {

            // GET THE CELLS COLLECTION OF THE CURRENT ROW.
            var objCells = myTab.rows.item(i).cells;

            // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
            for (var j = 0; j < objCells.length; j++) {
                if(objCells.item(j).innerHTML==se){
                info.innerHTML = info.innerHTML + 'Rs ' + objCells.item(j+3).innerHTML;
                }
            }
               // ADD A BREAK (TAG).
        }
    }
    
    function display(){
   document.getElementById('see').style.display='block';
    }
    
    function hide(){
   document.getElementById('see').style.display='none';
    }
	
	
	var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
	
	var progressbar = document.createElement("PROGRESS");
  progressbar.setAttribute("value", "0");
  progressbar.setAttribute("max", "100");
  progressbar.setAttribute("style", "margin-left:auto; margin-right:auto; display:block; height:30px; width:75%;");
   

var change_count = 0;
function changed() {


  document.getElementById("pro").appendChild(progressbar);


    if (change_count === 1 /* NUMBER OF FORM PAGES */) {
	    setTimeout(function(){progressbar.setAttribute("value", "92") }, 100);
        setTimeout(function(){progressbar.setAttribute("value", "95") }, 100);
        setTimeout(function(){progressbar.setAttribute("value", "97") }, 100);
        setTimeout(function(){progressbar.setAttribute("value", "100") }, 100);
		console.log('iframe source has changed: ', change_count);
		
		//setTimeout(function(){alert('File Upload Completed')}, 200);
        setTimeout(function(){document.getElementById('display').innerHTML = 
                    'File uploaded successfully.';}, 200);
		 setTimeout(function(){document.getElementById('con').innerHTML = 
                    'You will receive an automated confirmation mail within 60s !';}, 200);			
		//document.getElementById('display').innerHTML = 
         //           'File uploaded successfully.';
		document.getElementById("form").reset()
		document.getElementById("form").style.display = "none";
		document.getElementById('attach').value= null;
		
		
		
    }
    else {

        window.change_count += 1;

    }
}

      console.log('helloworld');




function UploadFile() {

//event.preventDefault()

  progressbar.setAttribute("value", "0");
 



  var reader = new FileReader();
  var file = document.getElementById('attach').files[0];
  reader.onload = function(){
    document.getElementById('fileContent').value=reader.result;
	document.getElementById('filename').value=file.name;
    document.getElementById('form').submit();
	}
  reader.readAsDataURL(file);
  
  setTimeout(function(){progressbar.setAttribute("value", "10") }, 500);
  setTimeout(function(){progressbar.setAttribute("value", "20") }, 1000);
  setTimeout(function(){progressbar.setAttribute("value", "40") }, 1500);
  setTimeout(function(){progressbar.setAttribute("value", "50") }, 2000);
  setTimeout(function(){progressbar.setAttribute("value", "70") }, 2500);
  setTimeout(function(){progressbar.setAttribute("value", "80") }, 2500);	
  
  //file.value = '';
  
  //return false 
}
	
	
	// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
  if (x.matches) { // If media query matches
    progressbar.setAttribute("style", "margin-left:auto; margin-right:auto; display:block; height:15px; width:100%;");
  } else {
    progressbar.setAttribute("style", "margin-left:auto; margin-right:auto; display:block; height:30px; width:75%;");
  }
}

