function trail() {
  const trail_response = document.getElementById("trail_response");
  const trail_warning = document.getElementById("trail_warning");

  const kg_trail = document.getElementById("kg_trail");
  const m3_trail = document.getElementById("m3_trail");
  const btn_trail = document.getElementById("buttonCalcTrail");

  let kgIn_trail, m3In_trail, stageOne_trail, summ;

  kg_trail.addEventListener("keypress", funKg_trail);
  m3_trail.addEventListener("keypress", funM3_trail);

  function funKg_trail() {
    let intervalKg_trail;
    clearTimeout(intervalKg_trail);
    intervalKg_trail = setTimeout(() => {
      kgIn_trail = parseInt(kg_trail.value);
    }, 300);
  }

  function funM3_trail() {
    let intervalM3_trail;
    clearTimeout(intervalM3_trail);
    intervalM3_trail = setTimeout(() => {
      m3In_trail = parseInt(m3_trail.value);
    }, 300);
  }

  function calc_trail(param) {
    if (param <= 110) {
      summ = 330 * m3In_trail;
    } else if (param >= 111 && param <= 130) {
      summ = 2.6 * kgIn_trail;
    } else if (param >= 131 && param <= 150) {
      summ = 2.4 * kgIn_trail;
    } else if (param >= 151 && param <= 170) {
      summ = 2.2 * kgIn_trail;
    } else if (param >= 171 && param <= 190) {
      summ = 2 * kgIn_trail;
    } else if (param >= 191 && param <= 210) {
      summ = 1.9 * kgIn_trail;
    } else if (param >= 211 && param <= 230) {
      summ = 1.85 * kgIn_trail;
    } else if (param >= 231 && param <= 250) {
      summ = 1.8 * kgIn_trail;
    } else if (param >= 251 && param <= 300) {
      summ = 1.6 * kgIn_trail;
    } else if (param >= 301 && param <= 350) {
      summ = 1.6 * kgIn_trail;
    } else if (param >= 351 && param <= 400) {
      summ = 1.45 * kgIn_trail;
    } else if (param >= 401 && param <= 450) {
      summ = 1.4 * kgIn_trail;
    } else if (param >= 451 && param <= 500) {
      summ = 1.3 * kgIn_trail;
    } else if (param >= 501 && param <= 600) {
      summ = 1.2 * kgIn_trail;
    } else if (param >= 601 && param <= 700) {
      summ = 1.1 * kgIn_trail;
    } else if (param >= 701) {
      summ = 1 * kgIn_trail;
    } else {
      trail_warning.textContent = "Данные за пределами";
    }
    return summ;
  }

  btn_trail.addEventListener("click", function () {
    stageOne_trail = kgIn_trail / m3In_trail;
    calc_trail(stageOne_trail);
    trail_response.innerHTML = `Ориентировочная сумма доставки составляет:  <b>${summ.toFixed(
      2
    )}$</b>`;
    trail_warning.classList.add("text-bg-danger");
    trail_warning.textContent = `Точную стоиомость необходимо уточнять!`;
  });
}

// function auto() {
//   const auto_response = document.getElementById("auto_response");
//   const auto_warning = document.getElementById("auto_warning");

//   const kg_auto = document.getElementById("kg_auto");
//   const m3_auto = document.getElementById("m3_auto");
//   const btn_auto = document.getElementById("buttonCalcAuto");

//   let kgIn_auto, m3In_auto, stageOne_auto, summ;

//   kg_auto.addEventListener("keypress", funKg_auto);
//   m3_auto.addEventListener("keypress", funM3_auto);

//   function funKg_auto() {
//     let intervalKg_auto;
//     clearTimeout(intervalKg_auto);
//     intervalKg_auto = setTimeout(() => {
//       kgIn_auto = parseInt(kg_auto.value);
//     }, 300);
//   }

//   function funM3_auto() {
//     let intervalM3_auto;
//     clearTimeout(intervalM3_auto);
//     intervalM3_auto = setTimeout(() => {
//       m3In_auto = parseInt(m3_auto.value);
//     }, 300);
//   }

//   function calc_auto(param) {
//     if (param <= 110) {
//       summ = 330 * m3In_auto;
//     } else if (param >= 111 && param <= 130) {
//       summ = 2.6 * kgIn_auto;
//     } else if (param >= 131 && param <= 150) {
//       summ = 2.4 * kgIn_auto;
//     } else if (param >= 151 && param <= 170) {
//       summ = 2.2 * kgIn_auto;
//     } else if (param >= 171 && param <= 190) {
//       summ = 2 * kgIn_auto;
//     } else if (param >= 191 && param <= 210) {
//       summ = 1.9 * kgIn_auto;
//     } else if (param >= 211 && param <= 230) {
//       summ = 1.85 * kgIn_auto;
//     } else if (param >= 231 && param <= 250) {
//       summ = 1.8 * kgIn_auto;
//     } else if (param >= 251 && param <= 300) {
//       summ = 1.6 * kgIn_auto;
//     } else if (param >= 301 && param <= 350) {
//       summ = 1.6 * kgIn_auto;
//     } else if (param >= 351 && param <= 400) {
//       summ = 1.45 * kgIn_auto;
//     } else if (param >= 401 && param <= 450) {
//       summ = 1.4 * kgIn_auto;
//     } else if (param >= 451 && param <= 500) {
//       summ = 1.3 * kgIn_auto;
//     } else if (param >= 501 && param <= 600) {
//       summ = 1.2 * kgIn_auto;
//     } else if (param >= 601 && param <= 700) {
//       summ = 1.1 * kgIn_auto;
//     } else if (param >= 701) {
//       summ = 1 * kgIn_auto;
//     } else {
//       auto_warning.textContent = "Данные за пределами";
//     }
//     return summ;
//   }

//   btn_auto.addEventListener("click", function () {
//     stageOne_auto = kgIn_auto / m3In_auto;
//     calc_auto(stageOne_auto);
//     auto_response.textContent = `Ориентировочная сумма доставки составляет:  ${summ.toFixed(
//       2
//     )}$`;
//     auto_warning.classList.add("text-bg-danger");
//     auto_warning.textContent = `Точную стоиомость необходимо уточнять!`;
//   });
// }

// function auto_express() {
//   const express_response = document.getElementById("express_response");
//   const express_warning = document.getElementById("express_warning");

//   const kg_express = document.getElementById("kg_express");
//   const m3_express = document.getElementById("m3_express");
//   const btn_express = document.getElementById("buttonCalcExpress");

//   let kgIn_express, m3In_express, stageOne_express, summ;

//   kg_express.addEventListener("keypress", funKg_express);
//   m3_express.addEventListener("keypress", funM3_express);

//   function funKg_express() {
//     let intervalKg_express;
//     clearTimeout(intervalKg_express);
//     intervalKg_express = setTimeout(() => {
//       kgIn_express = parseInt(kg_express.value);
//     }, 300);
//   }

//   function funM3_express() {
//     let intervalM3_express;
//     clearTimeout(intervalM3_express);
//     intervalM3_express = setTimeout(() => {
//       m3In_express = parseInt(m3_express.value);
//     }, 300);
//   }

//   function calc_express(param) {
//     if (param <= 110) {
//       summ = 330 * m3In_express;
//     } else if (param >= 111 && param <= 130) {
//       summ = 2.6 * kgIn_express;
//     } else if (param >= 131 && param <= 150) {
//       summ = 2.4 * kgIn_express;
//     } else if (param >= 151 && param <= 170) {
//       summ = 2.2 * kgIn_express;
//     } else if (param >= 171 && param <= 190) {
//       summ = 2 * kgIn_express;
//     } else if (param >= 191 && param <= 210) {
//       summ = 1.9 * kgIn_express;
//     } else if (param >= 211 && param <= 230) {
//       summ = 1.85 * kgIn_express;
//     } else if (param >= 231 && param <= 250) {
//       summ = 1.8 * kgIn_express;
//     } else if (param >= 251 && param <= 300) {
//       summ = 1.6 * kgIn_express;
//     } else if (param >= 301 && param <= 350) {
//       summ = 1.6 * kgIn_express;
//     } else if (param >= 351 && param <= 400) {
//       summ = 1.45 * kgIn_express;
//     } else if (param >= 401 && param <= 450) {
//       summ = 1.4 * kgIn_express;
//     } else if (param >= 451 && param <= 500) {
//       summ = 1.3 * kgIn_express;
//     } else if (param >= 501 && param <= 600) {
//       summ = 1.2 * kgIn_express;
//     } else if (param >= 601 && param <= 700) {
//       summ = 1.1 * kgIn_express;
//     } else if (param >= 701) {
//       summ = 1 * kgIn_express;
//     } else {
//       express_warning.textContent = "Данные за пределами";
//     }
//     return summ;
//   }

//   btn_express.addEventListener("click", function () {
//     stageOne_express = kgIn_express / m3In_express;
//     calc_express(stageOne_express);
//     express_response.textContent = `Ориентировочная сумма доставки составляет:  ${summ.toFixed(
//       2
//     )}$`;
//     express_warning.classList.add("text-bg-danger");
//     express_warning.textContent = `Точную стоиомость необходимо уточнять!`;
//   });
// }

trail();
// auto();
// auto_express();
