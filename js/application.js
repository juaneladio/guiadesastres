document.querySelector('#btn-home').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-home').className = 'container container-current';
});
document.querySelector('#btn-cap00').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap00').className = 'container container-current';
});
document.querySelector('#btn-cap01').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap01').className = 'container container-current';
});
document.querySelector('#btn-cap02').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap02').className = 'container container-current';
});
document.querySelector('#btn-cap03').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap03').className = 'container container-current';
});
document.querySelector('#btn-cap04').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap04').className = 'container container-current';
});
document.querySelector('#btn-cap05').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap05').className = 'container container-current';
});
document.querySelector('#btn-cap06').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap06').className = 'container container-current';
});
document.querySelector('#btn-cap07').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap07').className = 'container container-current';
});
document.querySelector('#btn-cap08').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap08').className = 'container container-current';
});
document.querySelector('#btn-cap09').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap09').className = 'container container-current';
});
document.querySelector('#btn-cap10').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap10').className = 'container container-current';
});
document.querySelector('#btn-cap11').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap11').className = 'container container-current';
});
document.querySelector('#btn-cap12').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap12').className = 'container container-current';
});
document.querySelector('#btn-cap13').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap13').className = 'container container-current';
});
document.querySelector('#btn-cap14').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-cap14').className = 'container container-current';
});

function switchSection() {
    if (document.querySelector('.container-current'))
      document.querySelector('.container-current').className = 'container container-hidden';
    document.querySelector('.navbar-collapse').className = 'navbar-collapse collapse';
  };
/*
document.querySelector('.navbar-brand').addEventListener ('click', function () {
    if (document.querySelector('.container-current'))
      document.querySelector('.container-current').className = 'container container-hidden';
    document.querySelector('#area-home').className = 'container container-current;';
  }
);
*/
