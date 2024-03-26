async function RegisterUser() {
  var full_name = document.getElementById("full_name").value; // $("#full_name").val();
  var User_Email = document.getElementById("User_Email").value; // $("#User_Email").val();
  var User_Phone = document.getElementById("User_Phone").value; // $("#User_Phone").val();
  var Shop_Size = document.getElementById("Shop_Size").value;
  var Shop_Location = document.getElementById("Shop_Location").value;
 alert( Shop_Size , Shop_Location );
 console.log( Shop_Size , Shop_Location );
 return null;
  //var Shop_Location = $('#Shop_Location').find(":selected").text();

  if (full_name == "" || User_Email == "" || User_Phone == "") {
    alert("Please Fill The Form");
  } else {
    const formData = new FormData();
    formData.append("Type", "001");
    formData.append("full_name", full_name);
    formData.append("User_Email", User_Email);
    formData.append("User_Phone", User_Phone);
    formData.append("Shop_Size", Shop_Size);
    formData.append("Shop_Location", Shop_Location);
    let req = await fetch("https://kalamacademy.org/learn/leadcaptureapi.php", {
      method: "POST",
      body: formData,
    });
    let data = await req.json();
    console.log(data);
    if (data > 0) {
      location.href =
        "https://www.kalamacademy.org/thank-for-signup-for-free-demo-of-grocery-business/";
    } else {
      alert(data);
    }
  }
}
