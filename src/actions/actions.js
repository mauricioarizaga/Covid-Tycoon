import React from "react";

export function setName(payload) {
  return { type: "INPUT_NAME", payload };
}

export function buyStocks(payload) {
  return { type: "BUY_STOCKS", payload };
}

export function sellStocks(payload) {
  return { type: "SELL_STOCKS", payload };
}
export function stocksFlow(payload) {
  return { type: "STOCKS_FLOW", payload };
}

export function stockValues(payload) {
  return { type: "STOCKS_VALUE", payload };
}

export function feedEvents(payload) {
  return { type: "FEED_EVENTS", payload };
}

export function resetGame(payload) {
  return { type: "RESET_GAME", payload };
}

export function endGame(payload) {
  return { type: "END_GAME", payload };
}
