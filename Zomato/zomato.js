// location
let location_bx =document.getElementById('location_bx');
let search_address=document.getElementById('search_address');
let search_arrow =document.getElementById('search_arrow');

search_address.addEventListener('focusin', ()=>{
    location_bx.style.visibility = "visible";
    search_arrow.style.transform="rotate(180deg)"
    location_bx.style.opacity=1;
})

search_address.addEventListener('focusout', ()=>{
    location_bx.style.visibility = "hidden";
    search_arrow.style.transform="rotate(0deg)"
    location_bx.style.opacity=0;

})

// contact

let email=document.getElementById('email');
let phone=document.getElementById('phone');
let emails=document.getElementById('emails');
let phones=document.getElementById('phones');
let emails_phones=document.getElementById('emails_phones');

phone.addEventListener('click'  , ()=>{
    emails_phones.classList.add('show_more');
    email.Checked =false;
});

email.addEventListener('click'  , ()=>{
    emails_phones.classList.remove('show_more');
    phone.Checked =false;
});

// js work for country select

let country=document.getElementById('country');
let country_button=document.getElementById('country_button');

window.addEventListener('click',(select)=>{
    if (select.target.id =="country_button") {
        country.classList.add('country_con');
    } else {
        country.classList.remove('country_con');
    }
})

//js work for language select

let lang_button=document.getElementById('lang_button');
let language_btn=document.getElementById('language_btn');

window.addEventListener('click',(item)=>{
    if (item.target.id =="lang_button") {
        language_btn.classList.add('language_con');
    } else {
        language_btn.classList.remove('language_con');
    }
})