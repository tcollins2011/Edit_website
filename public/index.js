const submitButton = document.getElementById("submitChanges");
const staticContainer = document.getElementById("staticHolder");
const permanent = document.getElementById("permanent");
var changeZone = document.getElementById("changeable");
var changes = changeZone;

submitButton.onclick = () => {
  changeZone = changes;
  changeZone.remove();
  staticContainer.appendChild(changes);
};
