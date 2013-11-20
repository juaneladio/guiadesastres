// 1. Interaction between pages

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
document.querySelector('#btn-phonebook').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-phonebook').className = 'container container-current';
});
document.querySelector('#btn-about').addEventListener ('click', function () {
  switchSection();
  document.querySelector('#area-about').className = 'container container-current';
});

function switchSection() {
    if (document.querySelector('.container-current'))
      document.querySelector('.container-current').className = 'container container-hidden';
    document.querySelector('.navbar-collapse').className = 'navbar-collapse collapse';
  };

// 2. Activities: add as contact some numbers

function addContact(number,name) {
  var activity = new MozActivity({
    name: "new",
    data: {
      type: "webcontacts/contact",
        params: {
          givenName: "AAA",
          lastName: name,
          tel: number,
          company: "Emergencias"
      }
    }
  });
  activity.onsuccess = function() {
    var picture = this.result;
    console.log("A picture has been retrieved");
  };
  activity.onerror = function() {
    console.log(this.error);
  };  
}

document.querySelector('#btn-add-116').addEventListener ('click', function () {
  addContact("116","Bomberos");
});

document.querySelector('#btn-add-105').addEventListener ('click', function () {
  addContact("105","Policía Nacional");
});

// 3. Check battery
function checkBatteryStatus()
{
  var batteryDisplay = document.querySelector("#battery-display");
  var battery = navigator.battery,
      batteryLevel = Math.round(battery.level * 100),
      charging = battery.charging,
      dischargingTime = parseInt(battery.dischargingTime / 60, 10),
      batteryInfo;
  if (batteryLevel >= 50)
  {
    batteryInfo = '<p class="alert alert-danger"><span class="glyphicon glyphicon-exclamation-sign"></span> ALERTA: Tu nivel de batería es de ' + batteryLevel + '% ';
    if (!isNaN(dischargingTime)) batteryInfo += 'y te quedan' + dischargingTime + " minutos";
    batteryInfo += ".";
    batteryInfo += '<br>Por favor sé muy prudente con el uso de tu celular.</p>';
    batteryDisplay.innerHTML = batteryInfo;
    batteryDisplay.style.display = "block";
  }
}

checkBatteryStatus();
