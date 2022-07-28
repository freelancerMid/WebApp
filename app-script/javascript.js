// Active menu css style
document.addEventListener("click", (e) => {
  let btn = document.getElementsByClassName("menu");

  if (e.target.classList.contains("menu")) {
    for (let el = 0; el < btn.length; el++) {
      let current = document.getElementsByClassName("active");
      let current_section = document.getElementsByClassName("show_section");
      current[0].className = current[0].className.replace(" active", "");
      current_section[0].className = current_section[0].className.replace(
        " show_section",
        ""
      );
      document.getElementsByClassName(
        String(e.target.innerText).toLowerCase().replace(/\s/, "_")
      )[0].className += " show_section";
      e.target.className += " active";
    }
  }
});

// ADDING POPUP FOR STATUS CHANGING.................................
document.addEventListener(
  "click",
  (e) => {
    let status_div = document.getElementsByClassName("status_div")[0] || null;
    // console.log(status_div);
    if (e.target.classList.contains("status_button")) {
      if (status_div == null) {
        let main_div = createNewElement("div", "status_div");
        let sub_div = createNewElement("div", "status_div_sub");

        let form_name_div = createNewElement("div", "form_name_div");
        form_name_div.appendChild(
          createNewElement("p", "form_name", "Calling Status Form")
        );

        // PARTY NAME INPUT FIELD-------------------------------------------------
        let party_name_div = createNewElement(
          "div",
          "party_name_div field_div"
        );
        let party_name_label = createNewElement(
          "label",
          "label_field",
          "Party Name"
        );
        let party_name_input = createNewElement(
          "input",
          "party_name_input input"
        );
        party_name_input.type = "text";
        party_name_input.placeholder = "Enter Party Name...";
        party_name_input.required = "required";
        party_name_div.appendChild(party_name_label);
        party_name_div.appendChild(party_name_input);

        // SALE PERSON NAME -------------------------------------------------
        let sale_person_div = createNewElement(
          "div",
          "sale_person_div field_div"
        );
        let sale_person_label = createNewElement(
          "label",
          "label_field",
          "Sale Person Name"
        );
        let sale_person_input = createNewElement(
          "input",
          "sale_person_input input"
        );
        sale_person_input.type = "text";
        sale_person_input.required = "required";
        sale_person_input.placeholder = "Enter Sale Person Name...";
        sale_person_div.appendChild(sale_person_label);
        sale_person_div.appendChild(sale_person_input);

        let buttons = createNewElement("div", "form_button");
        buttons.appendChild(
          createNewElement("button", "status_button", "close")
        );
        buttons.appendChild(
          createNewElement("button", "status_button submit", "SUBMIT")
        );

        sub_div.appendChild(form_name_div);
        sub_div.appendChild(party_name_div);
        sub_div.appendChild(sale_person_div);

        sub_div.appendChild(buttons);

        main_div.appendChild(sub_div);
        document.body.appendChild(main_div);
      } else {
        document.body.removeChild(status_div);
      }
    }
  },
  false
);

const createNewElement = (el, classN, text = "") => {
  let e = document.createElement(el);
  e.className += " " + classN;

  if (text != "" && el != "input") {
    e.innerText = text;
  }
  if (el == "input") {
    e.value = text;
  }

  return e;
};
