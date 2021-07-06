handleTransaction = async()=>{
  var transactionMessage = null;
  db.collection("books").doc(this.state.scannedBookId).get()
  .then((doc)=>{
    var book = doc.data()
    if(book.bookAvailability){
      this.initiateBookIssue();
      transactionMessage = "Book Issued"
    }
    else{
      this.initiateBookReturn();
      transactionMessage = "Book Returned"
    }
  })

  this.setState({
    transactionMessage : transactionMessage
  })
}
