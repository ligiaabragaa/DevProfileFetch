const url= "https://api.github.com/users/ligiaabragaa"

let bloco = document.querySelector('.perfil');

async function dev () {
    const response = await fetch (`${url}`);
    const data = await response.json();
    console.log(data);

    const pagina = document.createElement('div');
    const avatar = document.createElement('img');
    const usuario = document.createElement('h3');
    
    avatar.setAttribute('src',data.avatar_url);
    usuario.innerText= `${data.login}`;

    pagina.appendChild(avatar);
    pagina.appendChild(usuario);

    bloco.appendChild(pagina);

}

