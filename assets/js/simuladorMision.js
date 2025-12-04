// BOOTCAMP FULL STACK JAVASCRIPT 0080
// EVALUACIÓN DE MÓDULO 03 - EXPLORACIÓN GALÁCTICA
// ALUMNA: MACARENA ESPINOZA GATICA


// FASE 1: CONFIGURACIÓN DE MISIÓN

let nombreNave = "Estrella del Alba"
let distanciaEstimada = 15000
let estadoMision = true

let recursos = {
    agua: Math.floor(Math.random() * 50) + 100,
    comida: Math.floor(Math.random() * 50) + 100,
    energia: Math.floor(Math.random() * 50) + 100
}

let nave = {
    nombre: nombreNave,
    modelo: "Explorador X-42",
    tripulacion: [],
    estadoMision: estadoMision,

    mostrarEstado: function () {
        console.log("=== ESTADO DE LA NAVE ===")
        console.log("Nombre: " + this.nombre)
        console.log("Modelo: " + this.modelo)
        console.log("Estado: " + (this.estadoMision ? "Activa" : "Finalizada"))
        console.log("Distancia: " + distanciaEstimada + " años luz")
        console.log("Tripulantes: " + this.tripulacion.length)
    },

    reportarRecursos: function () {
        console.log("=== RECURSOS ===")
        console.log("Agua: " + recursos.agua)
        console.log("Comida: " + recursos.comida)
        console.log("Energía: " + recursos.energia)
    }
}

// FASE 2: REGISTRO DE TRIPULANTES

function agregarTripulante(nombre, rol) {
    let nuevoTripulante = {
        nombre: nombre,
        rol: rol,
        salud: Math.floor(Math.random() * 21) + 80
    }

    nave.tripulacion.push(nuevoTripulante)
    console.log(nombre + " agregado - Salud: " + nuevoTripulante.salud + "%")
}

function mostrarTripulacion() {
    console.log("=== TRIPULACIÓN ===")

    if (nave.tripulacion.length === 0) {
        console.log("No hay tripulantes")
        return
    }

    for (let i = 0; i < nave.tripulacion.length; i++) {
        console.log((i + 1) + ". " + nave.tripulacion[i].nombre + " - " + nave.tripulacion[i].rol + " - Salud: " + nave.tripulacion[i].salud + "%")
    }
}

// FASE 3: SIMULACIÓN DE EVENTOS

function explorar() {
    console.log("--- EXPLORANDO ---")

    let consumoAgua = Math.floor(Math.random() * 10) + 5
    let consumoComida = Math.floor(Math.random() * 8) + 5
    let consumoEnergia = Math.floor(Math.random() * 15) + 10

    recursos.agua = recursos.agua - consumoAgua
    recursos.comida = recursos.comida - consumoComida
    recursos.energia = recursos.energia - consumoEnergia

    if (recursos.agua < 0) recursos.agua = 0
    if (recursos.comida < 0) recursos.comida = 0
    if (recursos.energia < 0) recursos.energia = 0

    console.log("Consumo - Agua: " + consumoAgua + " Comida: " + consumoComida + " Energía: " + consumoEnergia)

    let evento = Math.random()

    if (evento < 0.3 && nave.tripulacion.length > 0) {
        let index = Math.floor(Math.random() * nave.tripulacion.length)
        let dano = Math.floor(Math.random() * 15) + 5
        nave.tripulacion[index].salud = nave.tripulacion[index].salud - dano

        if (nave.tripulacion[index].salud < 0) {
            nave.tripulacion[index].salud = 0
        }

        console.log(nave.tripulacion[index].nombre + " tuvo un accidente! -" + dano + "% salud")
    } else {
        console.log("Exploración exitosa")
    }
}

function comer() {
    console.log("--- COMIENDO ---")

    if (nave.tripulacion.length === 0) {
        console.log("No hay tripulantes")
        return
    }

    let consumo = nave.tripulacion.length * 2

    if (recursos.comida < consumo) {
        console.log("No hay suficiente comida")
        return
    }

    recursos.comida = recursos.comida - consumo
    console.log("Comida consumida: " + consumo)

    for (let i = 0; i < nave.tripulacion.length; i++) {
        let mejora = Math.floor(Math.random() * 10) + 5
        nave.tripulacion[i].salud = nave.tripulacion[i].salud + mejora

        if (nave.tripulacion[i].salud > 100) {
            nave.tripulacion[i].salud = 100
        }

        console.log(nave.tripulacion[i].nombre + " +" + mejora + "% salud")
    }
}

function descansar() {
    console.log("--- DESCANSANDO ---")

    if (nave.tripulacion.length === 0) {
        console.log("No hay tripulantes")
        return
    }

    let consumo = Math.floor(Math.random() * 5) + 3
    recursos.energia = recursos.energia - consumo

    if (recursos.energia < 0) {
        recursos.energia = 0
    }

    console.log("Energía consumida: " + consumo)

    for (let i = 0; i < nave.tripulacion.length; i++) {
        let recuperacion = Math.floor(Math.random() * 15) + 10
        nave.tripulacion[i].salud = nave.tripulacion[i].salud + recuperacion

        if (nave.tripulacion[i].salud > 100) {
            nave.tripulacion[i].salud = 100
        }

        console.log(nave.tripulacion[i].nombre + " +" + recuperacion + "% salud")
    }
}

// FASE 4: REPORTES Y LÓGICA AVANZADA

function calcularPromedioSalud() {
    if (nave.tripulacion.length === 0) {
        return 0
    }

    let suma = 0

    for (let i = 0; i < nave.tripulacion.length; i++) {
        suma = suma + nave.tripulacion[i].salud
    }

    let promedio = suma / nave.tripulacion.length
    return Math.round(promedio)
}

function contarTripulantesEnfermos() {
    let contador = 0

    for (let i = 0; i < nave.tripulacion.length; i++) {
        if (nave.tripulacion[i].salud < 50) {
            contador = contador + 1
        }
    }

    return contador
}

function reportarEstado() {
    console.log("========================================")
    console.log("REPORTE DE MISIÓN")
    console.log("========================================")

    nave.mostrarEstado()
    nave.reportarRecursos()
    mostrarTripulacion()

    let promedio = calcularPromedioSalud()
    let enfermos = contarTripulantesEnfermos()

    console.log("=== ESTADÍSTICAS ===")
    console.log("Promedio de salud: " + promedio + "%")
    console.log("Tripulantes enfermos: " + enfermos)
    console.log("========================================")
}

function verificarEstadoMision() {
    if (recursos.agua <= 0 || recursos.comida <= 0 || recursos.energia <= 0) {
        console.log("MISIÓN FALLIDA - Recursos agotados")
        nave.estadoMision = false
        estadoMision = false
        return false
    }

    if (nave.tripulacion.length > 0) {
        let muertos = 0
        for (let i = 0; i < nave.tripulacion.length; i++) {
            if (nave.tripulacion[i].salud <= 0) {
                muertos = muertos + 1
            }
        }

        if (muertos === nave.tripulacion.length) {
            console.log("MISIÓN FALLIDA - Tripulación muerta")
            nave.estadoMision = false
            estadoMision = false
            return false
        }
    }

    return true
}

function mostrarMenu() {
    console.log("--- MENÚ ---")
    console.log("1. Explorar")
    console.log("2. Comer")
    console.log("3. Descansar")
    console.log("4. Reportar estado")
    console.log("5. Ver tripulación")
    console.log("6. Salir")
}

// SIMULACIÓN

console.log("SIMULADOR DE MISIÓN GALÁCTICA")
console.log("Nave: " + nave.nombre)

agregarTripulante("Maca", "Piloto")
agregarTripulante("César", "Ingeniero Espacial")
agregarTripulante("Kathy", "Científica Nuclear")

nave.reportarRecursos()

let dia = 1

while (estadoMision) {
    console.log("========== DÍA " + dia + " ==========")

    mostrarMenu()

    let opcion = Math.floor(Math.random() * 4) + 1

    console.log("Opción: " + opcion)

    if (opcion === 1) {
        explorar()
    } else if (opcion === 2) {
        comer()
    } else if (opcion === 3) {
        descansar()
    } else if (opcion === 4) {
        reportarEstado()
    }

    if (!verificarEstadoMision()) {
        break
    }

    dia = dia + 1

    if (dia > 10) {
        console.log("Misión completada - 10 días")
        break
    }
}

console.log("========================================")
console.log("FIN DE LA SIMULACIÓN")
console.log("========================================")
reportarEstado()