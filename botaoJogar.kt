import kotlinx.browser.*
import org.w3c.files.*
import org.w3c.dom.Window
import org.w3c.dom.HTMLButtonElement
import kotlin.browser.window

val botaoIniciar = document.querySelector("[data-botao-iniciar]") as HTMLButtonElement
val botaoIniciarStyle = botaoIniciar.style

fun main() {

    botaoIniciar.addEventListener("mouseover", {
        ativarEfeitoHover()
    })

    botaoIniciar.addEventListener("mouseout", {
        if(botaoIniciar.classList.contains("focus")) desativarFocus()

        desativarEfeitoHover()
    })

    botaoIniciar.addEventListener("mousedown", {
        ativarEfeitoPressionado()
    })
}

fun ativarEfeitoHover() {
    botaoIniciarStyle.cursor = "pointer"

    botaoIniciarStyle.background = "#78BA87"
    botaoIniciarStyle.color = "#FFCD70"

    botaoIniciarStyle.transform = "scale(1.2)"

}

fun desativarEfeitoHover() {
    botaoIniciarStyle.cursor = "default"

    botaoIniciarStyle.background = "#59A96A"
    botaoIniciarStyle.color = "#FFBF47"

    botaoIniciarStyle.transform = "scale(1)"
}

fun ativarEfeitoPressionado() {
    if(!botaoIniciar.classList.contains("focus")) {
        botaoIniciarStyle.boxShadow = "0 0 0 0.2em rgba(120, 186, 135, 0.24)"

        botaoIniciarStyle.opacity = "0.8"

        botaoIniciar.classList.add("focus")
    }
}

fun desativarFocus() {
    botaoIniciarStyle.boxShadow = "none";

    botaoIniciarStyle.opacity = "1"

    botaoIniciar.classList.remove("focus")
}
