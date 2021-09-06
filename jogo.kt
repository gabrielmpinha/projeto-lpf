import kotlinx.browser.*
import org.w3c.files.*
import org.w3c.dom.*

fun main(){
    val jogo: Jogo = Jogo("palavras")
    jogo.iniciarJogo()
}

class ListaPalavras(val caminho: String) {
    val lista: ArrayList<String> = ArrayList<String>()

    fun palavras(novaPalavra: String): ArrayList<String> {
        
        lista.add(novaPalavra.uppercase())

        return lista
        
    }

    fun listaPalavrasSubrotina(onComplete:()->Unit){
        
        window.fetch(caminho).then { res ->
            res.text().then { 
                it.split("\n").map{ palavras(it)}
                onComplete()
            }
        }
        
    }
    
}

class Jogo(val caminho: String) {
    val escolhida : ListaPalavras = ListaPalavras(caminho + ".txt")
    val palavraEscolhida: String by lazy {escolhida.lista.random().trim()}

    fun iniciarJogo() {
        
        escolhida.listaPalavrasSubrotina({
        
            document.querySelector("[data-div-jogo]")!!.innerHTML += ("<div class=\"espacos-letras\" data-espaco-letras></div>" + "<div id=\"botoesAlfabetoContainer\"></div>") 
            criarPalavra(1)
            criarTeclado(65)
            
        })

    }

    fun criarTeclado(i: Int){
        
        if(i<=90){
            val c = i.toChar();

            val btn = document.createElement("BUTTON")
            btn.innerHTML = c.toString()

            btn.addEventListener("click", {
                escolherLetra(btn.innerHTML)
            })
            btn.setAttribute("id", "btn"+c) 
            btn.setAttribute("class", "botoesAlfabeto")
            
            val container = document.getElementById("botoesAlfabetoContainer") as HTMLDivElement
            container.appendChild(btn)

            criarTeclado(i+1)
        }

    }

    fun criarPalavra(i: Int){

        if(i<=palavraEscolhida.length){
            val lbl = document.createElement("label")
            lbl.innerHTML = "_"
            lbl.setAttribute("name", palavraEscolhida.get(i-1).toString())
            lbl.setAttribute("class", "espacos-letras-label")
            
            val container = document.querySelector("[data-espaco-letras]") as HTMLDivElement
            container.appendChild(lbl)

            criarPalavra(i+1)
        }

    }
    
    fun escolherLetra(x: String) {
        val botao = document.getElementById("btn"+x) as HTMLButtonElement
        botao.disabled = true

        verificarLetra(x)
        verificarFinal()    
        
    }
    

    fun verificarLetra(x: String) { 
        val letraLabel = document.querySelector("[data-espaco-letras]") as HTMLDivElement
        val imagemForca = document.querySelector("[data-imagem-forca]") as HTMLImageElement
        val imagemForcaSrc = imagemForca.getAttribute("src")

        val letras = letraLabel.children
        val listaLetras = letras.asList()

        if(palavraEscolhida.contains(x)) {
            listaLetras.map { n ->
                if (n.getAttribute("name").equals(x)) {
                    n.innerHTML = x
                }
            }
        } else{
            val erro = imagemForcaSrc!!.get(18)
                    
            if (erro == '6') {
                imagemForca.setAttribute("src", imagemForcaSrc.replace(erro.toString(), "Derrota"))
            } else if (erro.isDigit()) {
                imagemForca.setAttribute("src", imagemForcaSrc.replace(erro, erro+1))
            }   
        }

        if(isVitoria(listaLetras, listaLetras.size-1) == true) imagemForca.setAttribute("src", "images/forca/forcaVitoria.png")
         
    }

    fun isVitoria(listaLetras: List<Element>, i: Int): Boolean {

        if(i<0)
            return true
        else{
            if(listaLetras[i].innerHTML.equals("_"))
                return false
            else
                return isVitoria(listaLetras, i-1)
        }
    }

    fun desabilitarBotoes(i: Int){
        if(i<=90){
            val btn = document.getElementById("btn" + i.toChar()) as HTMLButtonElement
            btn.disabled = true
            desabilitarBotoes(i+1)
        }
    }

    fun verificarFinal(){
        val imgSrc = document.querySelector("[data-imagem-forca]")!!.getAttribute("src")
        if (imgSrc!!.contains("Derrota") || imgSrc.contains("Vitoria")){
            desabilitarBotoes(65)
            window.setTimeout(fun(){
                if(imgSrc.contains("Derrota")) window.alert("Você perdeu, tente novamente.\n\nA palavra era: ${palavraEscolhida}")
                else window.alert("Você ganhou, PARABÉNS!!!")
                window.location.href="index.html"},
                timeout = 500)
        }

    }
            
}

