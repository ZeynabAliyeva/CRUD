let companyName1 = document.getElementById("companyName");
let contactName2 = document.getElementById("contactName");
let titleName3 = document.getElementById("titleName");

function add() {
    let newCategory = {
      companyName: companyName1.value,
      contactName: contactName2.value,
      contactTitle: titleName3.value,
    };

    axios
      .post("https://northwind.vercel.app/api/suppliers", newCategory)
      .then((res) => {
        axios.get("https://northwind.vercel.app/api/suppliers").then((res)=>{
            res.data.forEach(element => {
            let trElement = document.createElement('tr')
            let tdID = document.createElement('td')
            tdID.innerHTML = element.id;
            let tdCompany = document.createElement('td')
            tdCompany.innerHTML = element.companyName
            let tdContact = document.createElement('td')
            tdContact.innerHTML = element.contactName
            let tdTitle = document.createElement('td')
            tdTitle.innerHTML = element.contactTitle

            let tdBtn = document.createElement('td')
            let deleteBtn = document.createElement('button')
            deleteBtn.innerHTML = "Delete"
            deleteBtn.id = element.id;
            tdBtn.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', function(e){
                let delete_id = e.target.id
                e.target.parentElement.parentElement.remove();
                remove(delete_id)
            })
              

            trElement.appendChild(tdID);
            trElement.appendChild(tdCompany);
            trElement.appendChild(tdContact);
            trElement.appendChild(tdTitle);
            trElement.appendChild(tdBtn);
            document.getElementById('table_body').append(trElement)
                console.log(trElement);
            });
            function remove(id){
              axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
              .then((res) =>{

              })
            }
        })
      });

  }