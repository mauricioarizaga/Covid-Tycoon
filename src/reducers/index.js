import empresas from "../components/Data/Empresas";
import news from "../components/Data/News";
import jugador from "../components/Data/Jugador";
const initialState = {
  empresas: empresas,
  jugador: jugador,
  news: news,
};
// Reducers >>>
function rootReducer(state = initialState, action) {
  if (action.type === "INPUT_NAME") {
    return {
      ...state,
      jugador: { ...state.jugador, nombre: action.payload },
    };
  }
  if (action.type === "BUY_STOCKS") {
    console.log(state);
    let empresa = state.empresas.find((id) => id.id === action.payload.id);
    console.log(empresa.id);
    return {
      ...state,
      jugador: {
        ...state.jugador,
        dinero: state.jugador.dinero - action.payload.valor,
        accionesJugador: (state.jugador.accionesJugador[empresa.id] = [
          {
            idEmpresa: action.payload.id,
            Nombre: action.payload.name,
            Cantidad: 1,
          },
        ]),
      },
    };
  }
  if (action.type === "SELL_STOCKS") {
    //duda como hacer si no quiero vender todas las acciones
    return {};
  }
  if (action.type === "STOCK_FLOW") {
    return {};
  }

  if (action.type === "FEED_EVENTS") {
    return {};
  }

  if (action.type === "END_GAME") {
    return {};
  }

  if (action.type === "RESET_GAME") {
    return {
      state: initialState,
    };
  }

  return state;
}
export default rootReducer;
