import React from "react";

var empresas = [
  {
    id: 0,
    name: "Mapple",
    rubro: "Tecnología",
    pais: "España",
    ciudad: "Madrid",
    valor: 54,
    inversion: {
      marketing: 10,
      desarrolloTecnologia: 5,
      recursosuhmanos: 2,
      equipamientoMaquinaria: 8,
      personal: 4,
    },
    tendencia: "", //La tendencia no tendria que ser seteada al arrancar
    ultimosCierres: 2,
    cantidadEmpleados: 200,
    rentabilidad: 50, //porcentaje
  },
  {
    id: 1,
    name: "Teleformica",
    rubro: "Tecnología",
    pais: "Argentina",
    ciudad: "Buenos Aires",
    valor: 2,
    inversion: {
      marketing: 30,
      desarrolloTecnologia: 1,
      recursosuhmanos: 1,
      equipamientoMaquinaria: 4,
      personal: 2,
    },
    tendencia: "",
    ultimosCierres: 3,
    cantidadEmpleados: 600,
    rentabilidad: 30, //porcentaje
  },
  {
    id: 2,
    name: "Gaytorade",
    rubro: "Alimentos y Bebidas",
    pais: "Francia",
    ciudad: "Paris",
    valor: 12,
    inversion: {
      marketing: 30,
      desarrolloTecnologia: 1,
      recursosuhmanos: 1,
      equipamientoMaquinaria: 4,
      personal: 2,
    },
    tendencia: "",
    ultimosCierres: 3,
    cantidadEmpleados: 600,
    rentabilidad: 30, //porcentaje
  },
  {
    id: 3,
    name: "Loca Cola",
    rubro: "Alimentos y Bebidas",
    pais: "Argentina",
    ciudad: "Buenos Aires",
    valor: 3,
    inversion: {
      marketing: 30,
      desarrolloTecnologia: 1,
      recursosuhmanos: 1,
      equipamientoMaquinaria: 4,
      personal: 2,
    },
    tendencia: "",
    ultimosCierres: 3,
    cantidadEmpleados: 600,
    rentabilidad: 30, //porcentaje
  },
  {
    id: 4,
    name: "TeleTroski",
    rubro: "Tecnología",
    pais: "Rusia",
    ciudad: "Moscu",
    valor: 2,
    inversion: {
      marketing: 30,
      desarrolloTecnologia: 1,
      recursosHumanos: 1,
      equipamientoMaquinaria: 4,
      personal: 2,
    },
    tendencia: "",
    ultimosCierres: 3,
    cantidadEmpleados: 600,
    rentabilidad: 30, //porcentaje
  },
];
export default empresas;
//return empresas;
