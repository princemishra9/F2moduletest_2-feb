
     // array to store details of issued books
     var issued_Books = [];

    
     function issue_Book() {
       var bookName = document.getElementById("bookName").value;
       var issuedTo = document.getElementById("issuedTo").value;
       var issuedTime = new Date().toLocaleString();
       var status = "not returned";
       var id = issued_Books.length + 1;
       issued_Books.push({id: id, book_name: bookName, issued_to: issuedTo, issued_time: issuedTime, status: status});
       updateTable();
     }
     
     
     function updateTable() {
       var table = document.getElementById("issuedBooksTable");
       for (var i = table.rows.length - 1; i > 0; i--) {
         table.deleteRow(i);
       }
       for (var i = 0; i < issued_Books.length; i++) {
         var row = table.insertRow(i+1);
         row.insertCell(0).innerHTML = issued_Books[i].id;
         row.insertCell(1).innerHTML = issued_Books[i].book_name;
         row.insertCell(2).innerHTML = issued_Books[i].issued_to;
         row.insertCell(3).innerHTML = issued_Books[i].issued_time;
         var statusCell = row.insertCell(4);
         statusCell.innerHTML = issued_Books[i].status;
         if (issued_Books[i].status == "not returned") {
           statusCell.style.color = "red";
         } else {
           statusCell.style.color = "green";
         }
         statusCell.contentEditable = true;
         statusCell.onblur = function() {
           updateStatus(this);
         };
       }
     }
     
     
     function updateStatus(cell) {
       var row = cell.parentNode;
       var index = row.rowIndex - 1;
       var status = cell.innerHTML;
       issued_Books[index].status = status;
       if (status == "not returned") {
         cell.style.color = "red";
       } else {
         cell.style.color = "green";
       }
     }