// ========================================
// 7 MINUTOZ MUSIC PLAYER
// Parte 1
// ========================================

// ---------- ELEMENTOS ----------

const audio = document.getElementById("audio");

const listaMusicas = document.getElementById("listaMusicas");

const tituloAtual = document.getElementById("tituloAtual");

const artistaAtual = document.getElementById("artistaAtual");

const capaAtual = document.getElementById("capaAtual");

const totalMusicas = document.getElementById("totalMusicas");

const barraPesquisa = document.getElementById("searchInput");

// ---------- BOTÕES ----------

const btnPlay = document.getElementById("play");

const btnAnterior = document.getElementById("anterior");

const btnProxima = document.getElementById("proxima");

const barraProgresso = document.getElementById("barraProgresso");

const volume = document.getElementById("volume");

let tocando = false;
let indiceAtual = 0;

// ========================================
// CATÁLOGO DE MÚSICAS
// ========================================

// Basta copiar um objeto e alterar os dados.
// Troque "url" pelo caminho real do MP3 e "capa" pela imagem real.
// Categorias precisam bater com o texto dos <li> da sidebar no HTML.

const musicas = [
    {
        titulo: "Agonia",
        artista: "7 Minutoz",
        capa:  "../img/capa-agonia.png",
        categoria: "FNAF",
        url: "../audio/agonia-nerd-hits.mp3"
    },
    {
        titulo: "Caixão de Areia",
        artista: "7 Minutoz",
        capa: "../img/gaara-capa.png",
        categoria: "Naruto",
        url: "../audio/rap-gaara.mp3"
    },
    {
        titulo: "O Maldito Demonio Da Motossera",
        artista: "7 Minutoz",
        capa: "../img/denji-capa.png",
        categoria: "Chainsaw Man",
        url: "../audio/rap-denji.mp3"
    },
    {
        titulo: "Circo Dos Horrores",
        artista: "7 Minutoz",
        capa: "../img/circo-coringas.png",
        categoria: "DC",
        url: "../audio/circo-coringas.mp3"
    },
    {
    titulo: "O Cavaleiro das Trevas",
    artista: "7 Minutoz",
    capa: "../img/batman-capa.png",
    categoria: "DC",
    url: "../audio/rap-batman.mp3"
    },
    {
        titulo: "Olhem pro Céu ",
        artista: "7 Minutoz",
        capa: "../img/omni-capa.png",
        categoria: "Invencível",
        url: "../audio/rap-ommni.mp3"
    },
    {
    titulo: "O Invencível",
    artista: "7 Minutoz",
    capa: "../img/mikey-capa.png",
    categoria: "Tokyo Revengers",
    url: "../audio/rap-mikey.mp3"
    },
    {
        titulo: "O Maior Detetive",
        artista: "7 Minutoz",
        capa: "../img/capa-l.png",
        categoria: "Death Note",
        url: "../audio/rap-l.mp3"
    },
    {
        titulo: "O Sétimo Hokage",
        artista: "7 Minutoz",
        capa: "../img/capa-naruto.png",
        categoria: "Naruto",
        url: "../audio/rap-naruto.mp3"
    },
    {
        titulo: "Essa Dor Que Causei",
        artista: "7 Minutoz",
        capa: "../img/capa-itachi.png",
        categoria: "Naruto",
        url: "../audio/rap-itachi.mp3"
    },
    {
        titulo: "Chapéu de Palha",
        artista: "7 Minutoz",
        capa: "../img/capa-lufy.png",
        categoria: "One Piece",
        url: "../audio/rap-lufy.mp3"
    },
    {
        titulo: "Eu Sou O Homem de Ferro",
        artista: "7 Minutoz",
        capa: "../img/capa-ferro.png",
        categoria: "Marvel",
        url: "../audio/rap-ferro.mp3"
    },
    {
        titulo: "Ao Som Do Estrondo",
        artista: "7 Minutoz",
        capa: "../img/capa-eren.png",
        categoria: "Attack on Titan",
        url: "../audio/rap-eren.mp3"
    },
    {
    titulo: "Heisenberg",
    artista: "7 Minutoz",
    capa: "../img/heisenberg-capa.png",
    categoria: "Breaking Bad",
    url: "../audio/rap-heisenberg.mp3"
    },
    {
    titulo: "Orgulhoso Como um Leão",
    artista: "7 Minutoz",
    capa: "../img/escanor-capa.png",
    categoria: "Nanatsu no Taizai",
    url: "../audio/rap-escanor.mp3"
    },
    {
    titulo: "O Mandamento da Piedade",
    artista: "7 Minutoz",
    capa: "../img/zeldris-capa.png",
    categoria: "Nanatsu no Taizai",
    url: "../audio/rap-zeldris.mp3"
    },
    {
    titulo: "Tributo aos Clássicos",
    artista: "7 Minutoz",
    capa: "../img/tributo-aos-classicos-capa.png",
    categoria: "Nostalgia",
    url: "../audio/rap-tributo-aos-classicos.mp3"
    },
    {
    titulo: "O Que Eu Quiser",
    artista: "7 Minutoz",
    capa: "../img/capitao-patria-capa.png",
    categoria: "The Boys",
    url: "../audio/rap-capitao-patria.mp3"
    },
    {
    titulo: "A Canção de Pai e Filho",
    artista: "7 Minutoz",
    capa: "../img/minato-capa.png",
    categoria: "Naruto",
    url: "../audio/rap-minato.mp3"
    },
    {
    titulo: "Me Tornei Um Deus",
    artista: "7 Minutoz",
    capa: "../img/madara-capa.png",
    categoria: "Naruto",
    url: "../audio/rap-madara.mp3"
    },
    {
    titulo: "O Conto de um Ninja Destemido",
    artista: "7 Minutoz",
    capa: "../img/jiraiya-capa.png",
    categoria: "Naruto",
    url: "../audio/rap-jiraiya.mp3"
    },
    {
    titulo: "Minha Dor",
    artista: "7 Minutoz",
    capa: "../img/pain-capa.png",
    categoria: "Naruto",
    url: "../audio/rap-pain.mp3"
    },
    {
    titulo: "O Poder da Minha Ira 2",
    artista: "7 Minutoz",
    capa: "../img/ira-capa.png",
    categoria: "Ira",
    url: "../audio/rap-ira.mp3"
    },
    {
    titulo: "Eu Sou o Capitão",
    artista: "7 Minutoz",
    capa: "../img/meliodas-capa.png",
    categoria: "Nanatsu no Taizai",
    url: "../audio/rap-meliodas.mp3"
    },
    {
    titulo: "O Pecado da Ganância",
    artista: "7 Minutoz",
    capa: "../img/ban-capa.png",
    categoria: "Nanatsu no Taizai",
    url: "../audio/rap-ban.mp3"
    },
    {
    titulo: "Akatsuki",
    artista: "7 Minutoz",
    capa: "../img/akatsuki-capa.png",
    categoria: "Especiais",
    url: "../audio/rap-akatsuki.mp3"
    },
    {
    titulo: "A Vontade do Fogo",
    artista: "7 Minutoz",
    capa: "../img/hokages-capa.png",
    categoria: "Especiais",
    url: "../audio/rap-hokages.mp3"
    },
    {
    titulo: "Maldição Do Ódio",
    artista: "7 Minutoz",
    capa: "../img/sasuke-capa.png",
    categoria: "Naruto",
    url: "../audio/rap-sasuke.mp3"
    },
    {
    titulo: "O Maior Espadachim do Mundo",
    artista: "7 Minutoz",
    capa: "../img/zoro-capa.png",
    categoria: "One Piece",
    url: "../audio/rap-zoro.mp3"
    },
    {
    titulo: "Deus Super Saiyajin",
    artista: "7 Minutoz",
    capa: "../img/capa-goku.png",
    categoria: "Dragon Ball",
    url: "../audio/rap-goku.mp3"
    }

];

// Ordena o catálogo por ordem alfabética do título
musicas.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));

// ========================================
// FORMATAR TEMPO (segundos -> 0:00)
// ========================================

function formatarTempo(segundos){

    if(isNaN(segundos)) return "0:00";

    const minutos = Math.floor(segundos / 60);

    const segs = Math.floor(segundos % 60);

    return `${minutos}:${segs.toString().padStart(2,"0")}`;

}


// ========================================
// CRIAR LISTA DE CARDS
// ========================================

function criarLista(lista){

    listaMusicas.innerHTML = "";

    lista.forEach((musica, index)=>{

        // índice real dentro do array "musicas" completo,
        // necessário para o play/anterior/próxima funcionarem
        // corretamente mesmo com filtro de pesquisa/categoria
        const indiceReal = musicas.indexOf(musica);

        const card = document.createElement("div");

        card.classList.add("cardMusica");

        card.dataset.index = indiceReal;

        if(indiceReal === indiceAtual){

            card.classList.add("tocando");

        }

         card.innerHTML = `
            <img src="${musica.capa}" alt="${musica.titulo}">

            <button class="playCard">
                <i class="fa-solid fa-play"></i>
            </button>

            <div class="infoMusica">
                <div class="linhaTitulo">
                    <h3>${musica.titulo}</h3>
                    <span class="equalizador">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <p>${musica.artista}</p>
                <span>${musica.categoria}</span>
            </div>
        `;

        listaMusicas.appendChild(card);

    });

    totalMusicas.textContent = `${lista.length} músicas`;

    adicionarEventos();

}

// ========================================
// CARREGAR MÚSICA NO PLAYER
// ========================================

function carregarMusica(index){

    const musica = musicas[index];

    if(!musica) return;

    indiceAtual = index;

    audio.src = musica.url;

    tituloAtual.textContent = musica.titulo;

    artistaAtual.textContent = musica.artista;

    capaAtual.src = musica.capa;

    document.title = `▶ ${musica.titulo} — ${musica.artista}`;

    // Marca visualmente o card que está tocando
    document.querySelectorAll(".cardMusica").forEach(card=>{

        card.classList.toggle(
            "tocando",
            Number(card.dataset.index) === indiceAtual
        );

    });

}

// ========================================
// PLAY E PAUSE
// Parte 2.1
// ========================================

function tocarMusica() {

    audio.play();

    tocando = true;

    btnPlay.innerHTML = `
        <i class="fa-solid fa-pause"></i>
    `;

    if(musicas[indiceAtual]){

        document.title = `▶ ${musicas[indiceAtual].titulo} — ${musicas[indiceAtual].artista}`;

    }

}

function pausarMusica() {

    audio.pause();

    tocando = false;

    btnPlay.innerHTML = `
        <i class="fa-solid fa-play"></i>
    `;

    document.title = "7 Minutoz Music";
    
}

btnPlay.addEventListener("click", () => {

    if (tocando) {

        pausarMusica();

    } else {

        tocarMusica();

    }

});

// ========================================
// QUANDO CLICAR EM UMA MÚSICA
// ========================================

// Substitua a função adicionarEventos()
// da Parte 1 por esta:

function adicionarEventos(){

    const cards = document.querySelectorAll(".cardMusica");

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            indiceAtual = Number(card.dataset.index);

            carregarMusica(indiceAtual);

            tocarMusica();

        });

    });

}

// ========================================
// PRÓXIMA MÚSICA
// ========================================

function proximaMusica(){

    indiceAtual++;

    if(indiceAtual >= musicas.length){

        indiceAtual = 0;

    }

    carregarMusica(indiceAtual);

    tocarMusica();

}

// ========================================
// MÚSICA ANTERIOR
// ========================================

function musicaAnterior(){

    indiceAtual--;

    if(indiceAtual < 0){

        indiceAtual = musicas.length - 1;

    }

    carregarMusica(indiceAtual);

    tocarMusica();

}

// ========================================
// BOTÕES
// ========================================

btnProxima.addEventListener("click",proximaMusica);

btnAnterior.addEventListener("click",musicaAnterior);

// ========================================
// BARRA DE PROGRESSO
// Parte 2.2
// ========================================

const tempoAtual = document.getElementById("tempoAtual");
const duracao = document.getElementById("duracao");

// Atualiza a barra enquanto a música toca
audio.addEventListener("timeupdate", atualizarProgresso);

function atualizarProgresso() {

    if (!audio.duration) return;

     const porcentagem =
        (audio.currentTime / audio.duration) * 100;

    barraProgresso.value = porcentagem;

    tempoAtual.textContent = formatarTempo(audio.currentTime);
    duracao.textContent = formatarTempo(audio.duration);
}

// Permite ao usuário arrastar a barra para pular no tempo da música
barraProgresso.addEventListener("input", ()=>{

    if(!audio.duration) return;

    audio.currentTime = (barraProgresso.value / 100) * audio.duration;

});



// ========================================
// PARTE 3
// PESQUISA E CATEGORIAS
// ========================================

// Lista que será exibida
let listaAtual = [...musicas];

// ---------- PESQUISA ----------

barraPesquisa.addEventListener("input", pesquisarMusicas);

function pesquisarMusicas(){

    const texto = barraPesquisa.value.toLowerCase();

    listaAtual = musicas.filter(musica =>

        musica.titulo.toLowerCase().includes(texto) ||

        musica.artista.toLowerCase().includes(texto) ||

        musica.categoria.toLowerCase().includes(texto)

    );

    criarLista(listaAtual);

}

// ========================================
// CATEGORIAS
// ========================================

const categorias = document.querySelectorAll(".sidebar li");

categorias.forEach(botao=>{

    botao.addEventListener("click",()=>{

        categorias.forEach(item=>{

            item.classList.remove("ativo");

        });

        botao.classList.add("ativo");

        const categoria = botao.textContent;

        if(categoria === "Todos"){

            listaAtual = [...musicas];

        }else{

            listaAtual = musicas.filter(musica=>{

                return musica.categoria === categoria;

            });

        }

        criarLista(listaAtual);

    });


    
});

// ========================================
// TECLAS DE ATALHO
// ========================================

document.addEventListener("keydown",(e)=>{

    // Se o usuário estiver digitando em algum input, ignora os atalhos
    if(e.target.tagName === "INPUT"){

        return;

    }

    if(e.code === "Space"){

        e.preventDefault();

        if(tocando){

            pausarMusica();

        }else{

            tocarMusica();

        }

    }

    if(e.code === "ArrowRight"){

        proximaMusica();

    }

    if(e.code === "ArrowLeft"){

        musicaAnterior();

    }

});

// ========================================
// VOLUME COM RODA DO MOUSE
// ========================================

volume.addEventListener("input", () => {
    audio.volume = Number(volume.value) / 100;
});


volume.addEventListener("wheel", (e) => {
    e.preventDefault();

    let novoVolume = Number(volume.value);

    if (e.deltaY < 0) {
        novoVolume += 5;
    } else {
        novoVolume -= 5;
    }

    novoVolume = Math.max(0, Math.min(100, novoVolume));

    volume.value = novoVolume;
    audio.volume = novoVolume / 100;
});

// ========================================
// INICIAR PLAYER
// ========================================

audio.volume = 1;

criarLista(musicas);

carregarMusica(0);

console.log("7 Minutoz Music iniciado com sucesso!");


// ========================================
// PARTE 3.1
// SHUFFLE E REPETIR
// ========================================

let modoShuffle = false;
let modoRepetir = false;

// Crie dois botões no HTML com os ids:
// shuffle
// repetir

const btnShuffle = document.getElementById("shuffle");
const btnRepetir = document.getElementById("repetir");

if(btnShuffle){

    btnShuffle.addEventListener("click",()=>{

        modoShuffle = !modoShuffle;

        btnShuffle.classList.toggle("ativo");

    });

}

if(btnRepetir){

    btnRepetir.addEventListener("click",()=>{

        modoRepetir = !modoRepetir;

        btnRepetir.classList.toggle("ativo");

    });

}

// ========================================
// QUANDO TERMINAR A MÚSICA
// ========================================

audio.addEventListener("ended",()=>{

    if(modoRepetir){

        audio.currentTime = 0;

        tocarMusica();

        return;

    }

    if(modoShuffle){

        indiceAtual = Math.floor(Math.random()*musicas.length);

        carregarMusica(indiceAtual);

        tocarMusica();

        return;

    }

    proximaMusica();

});

function proximaMusica() {

    if (modoShuffle) {

        indiceAtual = Math.floor(Math.random() * musicas.length);

    } else {

        indiceAtual++;

        if (indiceAtual >= musicas.length) {
            indiceAtual = 0;
        }

    }

    carregarMusica(indiceAtual);
    tocarMusica();

}


// ========================================
// MODAL PARA LUCAS
// ========================================

const btnParaLucas = document.getElementById("btnParaLucas");
const modalLucas = document.getElementById("modalLucas");
const fecharModal = document.getElementById("fecharModal");

if(btnParaLucas){

    btnParaLucas.addEventListener("click", ()=>{

        modalLucas.classList.add("aberto");

        criarConfete();

    });

}

function criarConfete(){

    for(let i = 0; i < 40; i++){

        const particula = document.createElement("div");

        particula.classList.add("particulaConfete");

        particula.style.left = Math.random() * 100 + "vw";

        particula.style.animationDuration = (Math.random() * 1.5 + 1.5) + "s";

        particula.style.opacity = Math.random();

        particula.style.transform = `scale(${Math.random() * 0.8 + 0.4})`;

        document.body.appendChild(particula);

        setTimeout(()=>{

            particula.remove();

        }, 3000);

    }

}

if(fecharModal){

    fecharModal.addEventListener("click", ()=>{

        modalLucas.classList.remove("aberto");

    });
}

// Fecha clicando fora da carta
if(modalLucas){

    modalLucas.addEventListener("click", (e)=>{

        if(e.target === modalLucas){

            modalLucas.classList.remove("aberto");

        }

    });

}