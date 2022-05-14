let div = "";
let genderdiv = "";
let selectdiv = "";
let container = document.createElement("main");
container.className = "container";
let form = document.createElement("form");
form.id = "form";
form.noValidate = false;
let h1 = document.createElement("h1");
h1.innerHTML = "Form Submission:";
h1.id = "title";
// let p =document.createElement("p");
// p.id="description";
// p.innerHTML="form"

let row = document.createElement("p");
row.className = "row gap-3 mx-10 my-10 ";
row.id="description";
let col1 = document.createElement("div");
col1.className = "col-4";
let col2 = document.createElement("div");
col2.className = "col-8";
let fNme = formGroup("div", "form-group mb-3", "label", "first-name", "form-label", "First Name:", "input", "text", "first-name", "form-control", "First Name");
// if(fNme.hasattribute="first-name") {
//     fNme.required=true;
// }
let lName = formGroup("div", "form-group mb-3", "label", "last-name", "form-label", "Last Name:", "input", "text", "last-name", "form-control", "Last Name");

// if(lName.hasattribute="last-name") {
//     lName.required=true;
// }


let address1 = formGroup("div", "form-group mb-3", "label", "address", "form-label", "Address Line 1:", "textarea", "text", "address", "form-control", "Address Line 1");
let address2 = formGroup("div", "form-group mb-3", "label", "address2", "form-label", "Address Line 2:", "textarea", "text", "address2", "form-control", "Address Line 2");

let pin = formGroup("div", "form-group mb-3", "label", "pincode", "form-label", "PIN:", "input", "text", "pincode", "form-control", "PIN");
// if(pin.hasattribute="pincode") {
//     pin.required=true;
// }

let gender = genderFG("div", "mb-3", "label", "gender", "form-label spl-label", "Gender:", "input", "radio", "male", "female", "form-radio", "Male", "Female","gender");
let checkBox = selectFG("div", "mb-3", "label", "food", "form-label", "Choice of Food:", "input", "checkbox", "check1", "check2", "check3", "check4", "check5", "form-check-input", "North Indian", "South Indian", "Chinese", "Japanese", "Sea Food","food")

let state = formGroup("div", "mb-3", "label", "state", "form-label", "State:", "input", "text", "state", "form-control", "State");
let country = formGroup("div", "mb-3", "label", "country", "form-label", "Country:", "input", "text", "country", "form-control", "Country");

let btndiv = document.createElement("div");
btndiv.className = "mb-3 d-flex justify-content-center"
let btn = document.createElement("input");
btn.id = "submit";
btn.className = "btn btn-primary w-100";
btn.setAttribute("type", "submit");
btn.value = "Submit";
btndiv.append(btn);
form.append(h1, div, fNme, lName, address1, address2, pin, gender, checkBox, state, country, btndiv);
col1.append(form);



function genderFG(tagName, tagClass, labelTage, labelFor, labelClass, labelText, inputTag, inputtype, inputId1, inputId2, inputClass, inputValue1, inputValue2,nameval) {
    genderdiv = document.createElement(tagName);
    genderdiv.className = tagClass;
    genderdiv.id="gender";
    let label = document.createElement(labelTage);
    label.setAttribute("for", labelFor)
    label.className = labelClass;
    label.innerHTML = labelText;
    let male = document.createElement(inputTag);
    male.setAttribute("type", inputtype)
    male.id = inputId1;
    male.className = inputClass;
    male.setAttribute("value", inputValue1);
    male.setAttribute("name", nameval);
    let span1 = document.createElement("span");
    span1.innerHTML = inputValue1;
    let female = document.createElement(inputTag);
    female.setAttribute("type", inputtype)
    female.id = inputId2;
    female.className = inputClass;
    female.setAttribute("value", inputValue2);
    female.setAttribute("name", nameval);
    let span2 = document.createElement("span");
    span2.innerHTML = inputValue2;
    genderdiv.append(label, male, span1, female, span2);

    return genderdiv;
}
function selectFG(tagName, tagClass, labelTage, labelFor, labelClass, labelText, inputTag, inputtype, inputid1, inputid2, inputid3, inputid4, inputid5, inputClass, inputValue1, inputValue2, inputValue3, inputValue4, inputValue5,nameval) {
    selectdiv = document.createElement(tagName);
    selectdiv.className = tagClass;
    selectdiv.id="food";
    let label = document.createElement(labelTage);
    label.setAttribute("for", labelFor)
    label.className = labelClass;
    label.innerHTML = labelText;
    let span = document.createElement("span");
    span.innerHTML = "(must choose at least 2 out of 5 options)";
    span.className = ""
    let wrap = document.createElement("br");
    let check1 = document.createElement(inputTag);
    check1.setAttribute("type", inputtype);
    check1.id = inputid1;
    check1.className = inputClass;
    check1.setAttribute("value", inputValue1);
    check1.setAttribute("name",nameval);
    let check1span = document.createElement("span");
    check1span.innerHTML = inputValue1;
    let wrap1 = document.createElement("br");
    let check2 = document.createElement(inputTag);
    check2.setAttribute("type", inputtype)
    check2.id = inputid2;
    check2.className = inputClass;
    check2.setAttribute("value", inputValue2);
    check2.setAttribute("name",nameval);
    let check2span = document.createElement("span");
    check2span.innerHTML = inputValue2;
    let wrap2 = document.createElement("br");
    
    let check3 = document.createElement(inputTag);
    check3.setAttribute("type", inputtype)
    check3.id = inputid3;
    check3.className = inputClass;
    check3.setAttribute("value", inputValue3);
    check3.setAttribute("name",nameval);
    let check3span = document.createElement("span");
    check3span.innerHTML = inputValue3;
    let wrap3 = document.createElement("br");
    
    let check4 = document.createElement(inputTag);
    check4.setAttribute("type", inputtype)
    check4.id = inputid4;
    check4.className = inputClass;
    check4.setAttribute("value", inputValue4);
    check4.setAttribute("name",nameval);
    let check4span = document.createElement("span");
    check4span.innerHTML = inputValue4;
    let wrap4= document.createElement("br");
    
    let check5 = document.createElement(inputTag);
    check5.setAttribute("type", inputtype);
    check5.id = inputid5;
    check5.className = inputClass;
    check5.setAttribute("value", inputValue5);
    check5.setAttribute("name",nameval);
    let check5span = document.createElement("span");
    check5span.innerHTML = inputValue5;
    let wrap5 = document.createElement("br");
    // wrap1.append(check1, check1span)
    // wrap2.append(check2, check2span);
    // wrap3.append(check3, check3span);
    // wrap4.append(check4, check4span);
    // wrap5.append(check5, check5span);
    //selectdiv.append(label, span, wrap1, wrap2, wrap3, wrap4, wrap5);
    selectdiv.append(label, span,wrap, check1,check1span,wrap1, check2,check2span,wrap2,check3,check3span,wrap3,check4,check4span,wrap4,check5,check5span,wrap5)

    return selectdiv;
}

function formGroup(tagName, tagClass, labelTag, labelFor, labelClass, labelText, inputTag, inputtype, inputId, inputClass, inputPlaceHolder) {
    div = document.createElement(tagName);
    div.className = tagClass;
    let label = document.createElement(labelTag);
    label.setAttribute("for", labelFor)
    label.className = labelClass;
    label.innerHTML = labelText;
    let input = document.createElement(inputTag);
    input.setAttribute("type", inputtype)
    input.id = inputId;
    input.className = inputClass;
    input.setAttribute("placeholder", inputPlaceHolder);
    div.append(label, input);
    if(input.hasattribute=inputId){
        input.required=true;
    }

    return div;
}


/*Grid Section */
let col2div = document.createElement("div");
col2div.className = "table-responsive";
let table = document.createElement("table");
table.className = "table table-bordered";
table.id = "table";
let tableHead = document.createElement("thead");
tableHead.className = "table-dark text-light";
let tr = document.createElement("tr");
let thfname = thtd("th", "First Name");
let thlName = thtd("th", "Last Name");
let thAddress = thtd("th", "Address");
let thpincode = thtd("th", "Pincode");
let thGender = thtd("th", "Gender");
let thFood = thtd("th", "Food");
let thState = thtd("th", "State");
let thCountry = thtd("th", "Country");
let tbody = document.createElement("tbody");

tr.append(thfname, thlName, thAddress, thpincode, thGender, thFood, thState, thCountry);
tableHead.append(tr);

table.append(tableHead, tbody);
col2div.append(table);
col2.append(col2div);
row.append(col1, col2);
container.append(row);
document.body.append(container);


function thtd(tagName, value) {
    let thTag = document.createElement(tagName);
    thTag.innerHTML = value;
    return thTag;
}


let fm = document.getElementById("form");
fm.addEventListener('submit', function (e) {
    e.preventDefault();
    let fn = document.getElementById("first-name").value;
    console.log(fn)
    let ln = document.getElementById("last-name").value;
    console.log(ln)
    let add = document.getElementById("address").value;
    console.log(add)
    let pn = document.getElementById("pincode").value;
    console.log(pn)
    let gn = document.getElementsByName("gender");
    let gnVal="";
    for(var i = 0; i < gn.length; i++){
        if(gn[i].checked){
            gnVal = gn[i].value;
        }
    }
    console.log(gnVal);
    let fd = document.getElementsByName("food");
    let fdVal="";
    for(var j = 0; j < fd.length; j++){
        if(fd[j].checked){
            fdVal = fd[j].value;
        }
    }
    console.log(fdVal);

    let st = document.getElementById("state").value;
    console.log(st)
    let cun = document.getElementById("country").value;
    console.log(cun)


    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = fn;
    let td2 = document.createElement("td");
    td2.innerHTML = ln;
    let td3 = document.createElement("td");
    td3.innerHTML = add;
    let td4 = document.createElement("td");
    td4.innerHTML = pn;
    let td5 = document.createElement("td");
    td5.innerHTML = gnVal;
    let td6 = document.createElement("td");
    td6.innerHTML = fdVal;
     let td7 = document.createElement("td");
     td7.innerHTML = st;
     let td8 = document.createElement("td");
     td8.innerHTML = cun;

    tr.append(td1, td2, td3, td4, td5, td6,td7,td8);
    tbody.append(tr);
    // fn.value="";
    // ln.value="";
    // add.value="";
    // pn.value="";
    // gnVal.value="";
    // fdVal.value="";
    // st.value="";
    // cun.value="";
    const inputs = document.querySelectorAll('#first-name,#last-name,#address,#address2,#pincode,#gender,#food,#state,#country');

  inputs.forEach(input => {
    input.value = '';
  });
})


