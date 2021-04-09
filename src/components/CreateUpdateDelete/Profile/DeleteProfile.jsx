
deleteWriter = (e) => {
  console.log("deleting ", this.props.id);
  axios
    .delete(`http://localhost:4000/api/writers/${this.props.id}`)
    .then((res) => {
      if (res.data.deletedCount >= 1) {
        console.log(">>>> successful deletion");
        this.props.refreshWriters();
      } else {
        console.log(">>>> nothing deleted");
      }
    });
  console.log("could I run the refresh in here?");
};

<button onClick={this.deleteWriter} action={this.props.refreshWriters}>
  Delete Writer
</button>;