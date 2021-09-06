if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'jogo'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'jogo'.");
}var jogo = function (_, Kotlin) {
  'use strict';
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var throwCCE = Kotlin.throwCCE;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var equals = Kotlin.kotlin.text.equals_igcy3c$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var isDigit = Kotlin.kotlin.text.isDigit_myv2d0$;
  var replace_0 = Kotlin.kotlin.text.replace_r2fvfm$;
  var equals_0 = Kotlin.equals;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function main() {
    var jogo = new Jogo('palavras');
    jogo.iniciarJogo();
  }
  function ListaPalavras(caminho) {
    this.caminho = caminho;
    this.lista = ArrayList_init();
  }
  ListaPalavras.prototype.palavras_61zpoe$ = function (novaPalavra) {
    this.lista.add_11rb$(novaPalavra.toUpperCase());
    return this.lista;
  };
  function ListaPalavras$listaPalavrasSubrotina$lambda$lambda(this$ListaPalavras, closure$onComplete) {
    return function (it) {
      var $receiver = split(it, ['\n']);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(this$ListaPalavras.palavras_61zpoe$(item));
      }
      closure$onComplete();
      return Unit;
    };
  }
  function ListaPalavras$listaPalavrasSubrotina$lambda(this$ListaPalavras, closure$onComplete) {
    return function (res) {
      return res.text().then(ListaPalavras$listaPalavrasSubrotina$lambda$lambda(this$ListaPalavras, closure$onComplete));
    };
  }
  ListaPalavras.prototype.listaPalavrasSubrotina_o14v8n$ = function (onComplete) {
    window.fetch(this.caminho).then(ListaPalavras$listaPalavrasSubrotina$lambda(this, onComplete));
  };
  ListaPalavras.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListaPalavras',
    interfaces: []
  };
  function Jogo(caminho) {
    this.caminho = caminho;
    this.escolhida = new ListaPalavras(this.caminho + '.txt');
    this.palavraEscolhida_qerhew$_0 = lazy(Jogo$palavraEscolhida$lambda(this));
  }
  Object.defineProperty(Jogo.prototype, 'palavraEscolhida', {
    configurable: true,
    get: function () {
      return this.palavraEscolhida_qerhew$_0.value;
    }
  });
  function Jogo$iniciarJogo$lambda(this$Jogo) {
    return function () {
      ensureNotNull(document.querySelector('[data-div-jogo]')).innerHTML = ensureNotNull(document.querySelector('[data-div-jogo]')).innerHTML + ('<div class="espacos-letras" data-espaco-letras><\/div>' + '<div id="botoesAlfabetoContainer"><\/div>');
      this$Jogo.criarPalavra_za3lpa$(1);
      this$Jogo.criarTeclado_za3lpa$(65);
      return Unit;
    };
  }
  Jogo.prototype.iniciarJogo = function () {
    this.escolhida.listaPalavrasSubrotina_o14v8n$(Jogo$iniciarJogo$lambda(this));
  };
  function Jogo$criarTeclado$lambda(closure$btn, this$Jogo) {
    return function (it) {
      this$Jogo.escolherLetra_61zpoe$(closure$btn.innerHTML);
      return Unit;
    };
  }
  Jogo.prototype.criarTeclado_za3lpa$ = function (i) {
    var tmp$;
    if (i <= 90) {
      var c = toChar(i);
      var btn = document.createElement('BUTTON');
      btn.innerHTML = String.fromCharCode(c);
      btn.addEventListener('click', Jogo$criarTeclado$lambda(btn, this));
      btn.setAttribute('id', 'btn' + String.fromCharCode(toBoxedChar(c)));
      btn.setAttribute('class', 'botoesAlfabeto');
      var container = Kotlin.isType(tmp$ = document.getElementById('botoesAlfabetoContainer'), HTMLDivElement) ? tmp$ : throwCCE();
      container.appendChild(btn);
      this.criarTeclado_za3lpa$(i + 1 | 0);
    }};
  Jogo.prototype.criarPalavra_za3lpa$ = function (i) {
    var tmp$;
    if (i <= this.palavraEscolhida.length) {
      var lbl = document.createElement('label');
      lbl.innerHTML = '_';
      lbl.setAttribute('name', String.fromCharCode(this.palavraEscolhida.charCodeAt(i - 1 | 0)));
      lbl.setAttribute('class', 'espacos-letras-label');
      var container = Kotlin.isType(tmp$ = document.querySelector('[data-espaco-letras]'), HTMLDivElement) ? tmp$ : throwCCE();
      container.appendChild(lbl);
      this.criarPalavra_za3lpa$(i + 1 | 0);
    }};
  Jogo.prototype.escolherLetra_61zpoe$ = function (x) {
    var tmp$;
    var botao = Kotlin.isType(tmp$ = document.getElementById('btn' + x), HTMLButtonElement) ? tmp$ : throwCCE();
    botao.disabled = true;
    this.verificarLetra_61zpoe$(x);
    this.verificarFinal();
  };
  Jogo.prototype.verificarLetra_61zpoe$ = function (x) {
    var tmp$, tmp$_0;
    var letraLabel = Kotlin.isType(tmp$ = document.querySelector('[data-espaco-letras]'), HTMLDivElement) ? tmp$ : throwCCE();
    var imagemForca = Kotlin.isType(tmp$_0 = document.querySelector('[data-imagem-forca]'), HTMLImageElement) ? tmp$_0 : throwCCE();
    var imagemForcaSrc = imagemForca.getAttribute('src');
    var letras = letraLabel.children;
    var listaLetras = asList(letras);
    if (contains(this.palavraEscolhida, x)) {
      var destination = ArrayList_init_0(collectionSizeOrDefault(listaLetras, 10));
      var tmp$_1;
      tmp$_1 = listaLetras.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2 = destination.add_11rb$;
        if (equals(item.getAttribute('name'), x)) {
          item.innerHTML = x;
        }tmp$_2.call(destination, Unit);
      }
    } else {
      var erro = ensureNotNull(imagemForcaSrc).charCodeAt(18);
      if (erro === 54) {
        imagemForca.setAttribute('src', replace(imagemForcaSrc, String.fromCharCode(erro), 'Derrota'));
      } else if (isDigit(erro)) {
        imagemForca.setAttribute('src', replace_0(imagemForcaSrc, erro, toChar(erro + 1)));
      }}
    if (this.isVitoria_fosmmc$(listaLetras, listaLetras.size - 1 | 0) === true)
      imagemForca.setAttribute('src', 'images/forca/forcaVitoria.png');
  };
  Jogo.prototype.isVitoria_fosmmc$ = function (listaLetras, i) {
    if (i < 0)
      return true;
    else {
      if (equals_0(listaLetras.get_za3lpa$(i).innerHTML, '_'))
        return false;
      else
        return this.isVitoria_fosmmc$(listaLetras, i - 1 | 0);
    }
  };
  Jogo.prototype.desabilitarBotoes_za3lpa$ = function (i) {
    var tmp$;
    if (i <= 90) {
      var btn = Kotlin.isType(tmp$ = document.getElementById('btn' + String.fromCharCode(toBoxedChar(toChar(i)))), HTMLButtonElement) ? tmp$ : throwCCE();
      btn.disabled = true;
      this.desabilitarBotoes_za3lpa$(i + 1 | 0);
    }};
  function Jogo$verificarFinal$lambda(closure$imgSrc, this$Jogo) {
    return function () {
      if (contains(closure$imgSrc, 'Derrota'))
        window.alert('Voc\xEA perdeu, tente novamente.' + '\n' + '\n' + 'A palavra era: ' + this$Jogo.palavraEscolhida);
      else
        window.alert('Voc\xEA ganhou, PARAB\xC9NS!!!');
      window.location.href = 'index.html';
    };
  }
  Jogo.prototype.verificarFinal = function () {
    var imgSrc = ensureNotNull(document.querySelector('[data-imagem-forca]')).getAttribute('src');
    if (contains(ensureNotNull(imgSrc), 'Derrota') || contains(imgSrc, 'Vitoria')) {
      this.desabilitarBotoes_za3lpa$(65);
      window.setTimeout(Jogo$verificarFinal$lambda(imgSrc, this), 500);
    }};
  function Jogo$palavraEscolhida$lambda(this$Jogo) {
    return function () {
      var $receiver = random(this$Jogo.escolhida.lista, Random.Default);
      var tmp$;
      return trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    };
  }
  Jogo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Jogo',
    interfaces: []
  };
  _.main = main;
  _.ListaPalavras = ListaPalavras;
  _.Jogo = Jogo;
  main();
  Kotlin.defineModule('jogo', _);
  return _;
}(typeof jogo === 'undefined' ? {} : jogo, kotlin);
