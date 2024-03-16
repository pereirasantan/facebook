//senha-input,mostrar
const senha = document.querySelector('#senha')
const mostrarSenha=document.querySelector('.exibir')
const form=document.querySelector('form')
const entrar=document.querySelector('#entrar')
senha.addEventListener('mousedown',()=>{
  mostrarSenha.classList.add('active')
})

form.addEventListener('submit',(e)=>{
  e.preventDefault()
})



