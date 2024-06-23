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
// bfood_item
let food_item=document.getElementById('food_item');
let btn_food_left=document.getElementById('btn_food_left');
let btn_food_right=document.getElementById('btn_food_right');
btn_food_left.addEventListener('click',() => {
    food_item.scrollLeft+=170;
    if (food_item.scrollLeft >0) {
        btn_food_right.style.display="flex";
        
    } else {
        btn_food_right.style.display="none";
        
    }
    if (food_item.scrollLeft >850) {
        btn_food_left.style.display="none";
        
    } else {
        btn_food_left.style.display="flex";
        
    }
})
btn_food_right.addEventListener('click',() => {
    btn_food_left.style.display="flex";
    food_item.scrollLeft-=170;
    if (food_item.scrollLeft > 0) {
        btn_food_right.style.display="flex";
        
    } else {
        btn_food_right.style.display="none";
        
    } 
})


// brand_item
let brand_item=document.getElementById('brand_item');
let btn_brands_left=document.getElementById('btn_brands_left');
let btn_brands_right=document.getElementById('btn_brands_right');

btn_brands_left.addEventListener('click',() => {
    brand_item.scrollLeft+=170;
    if (brand_item.scrollLeft >0) {
        btn_brands_right.style.display="flex";
        
    } else {
        btn_brands_right.style.display="none";
        
    }
    if (brand_item.scrollLeft >550) {
        btn_brands_left.style.display="none";
        
    } else {
        btn_brands_left.style.display="flex";
        
    }
})
btn_brands_right.addEventListener('click',() => {
    btn_brands_left.style.display="flex";
    brand_item.scrollLeft-=170;
    if (brand_item.scrollLeft > 0) {
        btn_brands_right.style.display="flex";
        
    } else {
        btn_brands_right.style.display="none";
        
    } 
})

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