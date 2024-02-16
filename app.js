window.onload = function () {
  setGame();
};
function setGame() {
  for (let i = 0; i < array.length; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
  }
}
