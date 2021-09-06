if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'botaoJogar'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'botaoJogar'.");
}var botaoJogar = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var botaoIniciar;
  var botaoIniciarStyle;
  function main$lambda(it) {
    ativarEfeitoHover();
    return Unit;
  }
  function main$lambda_0(it) {
    if (botaoIniciar.classList.contains('focus'))
      desativarFocus();
    desativarEfeitoHover();
    return Unit;
  }
  function main$lambda_1(it) {
    ativarEfeitoPressionado();
    return Unit;
  }
  function main() {
    botaoIniciar.addEventListener('mouseover', main$lambda);
    botaoIniciar.addEventListener('mouseout', main$lambda_0);
    botaoIniciar.addEventListener('mousedown', main$lambda_1);
  }
  function ativarEfeitoHover() {
    botaoIniciarStyle.cursor = 'pointer';
    botaoIniciarStyle.background = '#78BA87';
    botaoIniciarStyle.color = '#FFCD70';
    botaoIniciarStyle.transform = 'scale(1.2)';
  }
  function desativarEfeitoHover() {
    botaoIniciarStyle.cursor = 'default';
    botaoIniciarStyle.background = '#59A96A';
    botaoIniciarStyle.color = '#FFBF47';
    botaoIniciarStyle.transform = 'scale(1)';
  }
  function ativarEfeitoPressionado() {
    if (!botaoIniciar.classList.contains('focus')) {
      botaoIniciarStyle.boxShadow = '0 0 0 0.2em rgba(120, 186, 135, 0.24)';
      botaoIniciarStyle.opacity = '0.8';
      botaoIniciar.classList.add('focus');
    }}
  function desativarFocus() {
    botaoIniciarStyle.boxShadow = 'none';
    botaoIniciarStyle.opacity = '1';
    botaoIniciar.classList.remove('focus');
  }
  Object.defineProperty(_, 'botaoIniciar', {
    get: function () {
      return botaoIniciar;
    }
  });
  Object.defineProperty(_, 'botaoIniciarStyle', {
    get: function () {
      return botaoIniciarStyle;
    }
  });
  _.main = main;
  _.ativarEfeitoHover = ativarEfeitoHover;
  _.desativarEfeitoHover = desativarEfeitoHover;
  _.ativarEfeitoPressionado = ativarEfeitoPressionado;
  _.desativarFocus = desativarFocus;
  var tmp$;
  botaoIniciar = Kotlin.isType(tmp$ = document.querySelector('[data-botao-iniciar]'), HTMLButtonElement) ? tmp$ : throwCCE();
  botaoIniciarStyle = botaoIniciar.style;
  main();
  Kotlin.defineModule('botaoJogar', _);
  return _;
}(typeof botaoJogar === 'undefined' ? {} : botaoJogar, kotlin);
