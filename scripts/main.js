
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting virtual server...");
  await delay(950);
  createText("Connecting to [/96.1//.4/.1/0]...");
  await delay(1500);
  createText("Known Commands");
 
  // createCode("about me", "Who am i and what do i do."); //
  createCode("docs", "All public documents and information.");
  createCode("help", "View all publically avaliable commands.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/not-found";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    //createCode("projects", "My github page with my projects. Follow me there ;)");
    //createCode("about me", "Who am i and what do i do.");
    //createCode("social -a", "All my social networks.");
    createCode("docs", "All public documents and information.");
    createCode("clear", "Clear the terminal.");
    
  }
  /*
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/heberleonard2' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Oi, meu nome é Héber ;)")
    createText("Desenvolvedor atualmente focado em todo o ecossistema Javascript. Utilizando principalmente a stack <span class='blue'>Node, React e React Native </span>por permitir criar aplicações de forma descomplicada e produtiva.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/heberleonard2' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>")
    createText("<a href='https://www.linkedin.com/in/heber-leonard/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/heber-leonard</a>")
    createText("<a href='https://www.instagram.com/heber_leonard/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/heber_leonard</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  */
  else if(value === "docs"){
    trueValue(value);
    createText("<a href='https://docs.google.com/document/d/15N9Hpp_UsPS3Rjvdl-i_OX1Akc4Pm3q5itr3-ntVpZE/edit?usp=sharing' target='_blank'><i class='fab fa-github white'></i> The Tales of Site-73 | Volume 1</a>")
    createText("<a href='https://docs.google.com/document/d/191uwyoL13ftCcDSNFeXIvZXMSFrLPkS_nkoIJ08OhEM/edit?usp=sharing' target='_blank'><i class='fab fa-linkedin-in white'></i> The Tales of Site-73 | Volume 2</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "doc"){
    trueValue(value);
    createText("Didn't you mean: docs?")
  }
  else if(value === "clean"){
    trueValue(value);
    createText("Didn't you mean: clear?")
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();