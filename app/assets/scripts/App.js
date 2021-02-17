import '../styles/styles.css';
import 'lazysizes';

//lazyload About
let about;

document.getElementById("about-icon").addEventListener("click", ()=>{
  if (typeof about == "undefined"){
    import(/* webpackChunkName: "about" */ './modules/About').then((x)=>{
      about = new x.default();
      setTimeout(()=> about.introduce(), 20);
    }).catch((error)=>{
      console.log(error);
    })
  }else{
    //add about-section to DOM
  }
});

//lazyload Skills
let skills;

document.getElementById("skills-icon").addEventListener("click", ()=>{
  if (typeof skills == "undefined"){
    import(/* webpackChunkName: "skills" */ './modules/Skills').then((x)=>{
      skills = new x.default();
      setTimeout(()=> skills.introduce(), 20);
    }).catch((error)=>{
      console.log(error);
    })
  }else{
    //add skills-section to DOM
  }
});

//lazyload Contact
let contact;

document.getElementById("contact-icon").addEventListener("click", ()=>{
  if (typeof contact == "undefined"){
    import(/* webpackChunkName: "contact" */ './modules/Contact').then((x)=>{
      contact = new x.default();
      setTimeout(()=> contact.introduce(), 20);
    }).catch((error)=>{
      console.log(error);
    })
  }else{
    //add contact-section to DOM
  }
})



if (module.hot) {
  module.hot.accept();
}
